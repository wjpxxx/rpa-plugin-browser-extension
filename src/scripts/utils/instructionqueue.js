import InstructionEvent from "./instructionevent";
import Console from "./log";
//指令队列
function InstructionQueue(){
    this.queue=[];
    this.currentInstruction = undefined;//类型:Instruction 当前指令,在子指令集中的currentInstruction没有实际意义
    this.parent = undefined;//类型:Instruction 由于指令集可能会有嵌套使用,这里利用数组的push和shift,来解决指令集返回的问题
    this.pointer=this;  //队列指针,当前处于哪个队列
    //指令进入队列,需要进行指令编排
    this.pushQueue = function (instruction){
        this.clearForeach(instruction);
        this.buildIfFunction(instruction);
        this.buildStatusFunction(instruction);
        this.pushYesQueue(instruction, instruction.IfYes);
        this.pushNoQueue(instruction, instruction.IfNo);
        this.pushForeachQueue(instruction, instruction.Foreach);
        this.queue.push(instruction);
    };
    //清理非foreach的ForeachInputType,ForeachInput
    this.clearForeach = function (instruction){
        if (instruction.Event != InstructionEvent.FOREACH) {
            instruction.ForeachInputType=undefined;
            instruction.ForeachInput = undefined;
            instruction.ForeachInputs = undefined;
        } else if (!Array.isArray(instruction.ForeachInput)){
            instruction.ForeachInputType = undefined;
            instruction.ForeachInput = undefined;
            instruction.ForeachInputs = undefined;
        }
        instruction.ForeachIndex=0;
    };
    //构建状态函数
    this.buildStatusFunction = function (instruction){
        instruction.setStatus = function (status, msg) { this.Status = status; this.Msg = msg;};
        instruction.getStatus = function () { return this.Status; };
        instruction.setFinish = function () { this.setStatus(2); };
        instruction.setRuning = function () { this.setStatus(1);};
        instruction.setFail = function (msg){return this.setStatus(-1,msg);};
        instruction.setCancel = function () { this.setStatus(3); };
    };
    //构建IfFunction
    this.buildIfFunction = function (instruction){
        if (instruction.IfFunction && Object.keys(instruction.IfFunction).length>0){
            instruction.IfFunction = new Function("topQueue", "curQueue", "input", "inputType","instruction",instruction.IfFunction.body);
        }
    },
    //初始化IfYes指令队列
    this.pushYesQueue=function (instruction, ifYes) {
        if (ifYes && ifYes.length > 0) {
            var iq = new InstructionQueue();
            iq.pushsQueue(ifYes);
            //console.log("yes:", iq);
            instruction.IfYes = iq;
        }
    };
    //初始化IfNo指令队列
    this.pushNoQueue=function (instruction, ifNo) {
        if (ifNo && ifNo.length > 0) {
            var iq = new InstructionQueue();
            iq.pushsQueue(ifNo);
            //console.log("no:", iq);
            instruction.IfNo = iq;
        }
    };
    //初始化Foreach指令队列
    this.pushForeachQueue = function (instruction, _foreach) {
        if (_foreach && _foreach.length > 0) {
            var iq = new InstructionQueue();
            iq.pushsQueue(_foreach);
            //console.log("foreach:", iq);
            instruction.Foreach = iq;
        }
    };
    //多条指令进入队列,需要对指令进行编排
    this.pushsQueue=function (instructions) {
        for (var i in instructions) {
            this.pushQueue(instructions[i]);
        }
    };
    //执行下一条指令-需要考虑子指令集
    this.nextInstruction=function(input,inputType) {
        var ins = this.getInstruction();
        if (ins&&ins.Event == InstructionEvent.IF) {
            //IF指令
            if (this.currentInstruction.IfFunction(this, this.pointer, ins.Input, ins.InputType, ins)){
                //条件成立
                //Console.log("IF条件成立");
                var that = this.pointer;
                this.pointer = ins.IfYes;
                this.pointer.parent = that;
                this.currentInstruction = ins.IfYes.nextInstruction(ins.Input, ins.InputType);
                return this.currentInstruction;
            }else{
                //条件不成立
                //Console.log("IF条件不成立");
                var that = this.pointer;
                this.pointer = ins.IfNo;
                this.pointer.parent = that;
                this.currentInstruction = ins.IfNo.nextInstruction(ins.Input, ins.InputType);
                return this.currentInstruction;
            }
        } else if (ins &&ins.Event == InstructionEvent.FOREACH) {
            //FOREACH指令
            //Console.log("foreach指令:",ins);
            var that = this.pointer;
            this.pointer = ins.Foreach;
            this.pointer.parent = that;
            this.currentInstruction.ForeachInputType = ins.InputType;
            this.currentInstruction.ForeachInput = ins.Input;
            this.currentInstruction.ForeachInputs = ins.Input;
            this.currentInstruction = this.pointer.nextInstruction(ins.Input, ins.InputType);
            this.currentInstruction.ForeachInputType = ins.InputType;
            this.currentInstruction.ForeachInput = ins.Input;
            this.currentInstruction.ForeachInputs = ins.Input;
            //Console.log(this.currentInstruction.ForeachInput, ins.Input);
            return this.currentInstruction;
        }else{
            //其他指令
            var task = this.pointer.queue.shift();
            if (task){
                if (this.currentInstruction && this.currentInstruction.ForeachInputType) {
                    //向下继承
                    task.ForeachInputType = this.currentInstruction.ForeachInputType;
                }
                if (this.currentInstruction && this.currentInstruction.ForeachInputs && Object.keys(this.currentInstruction.ForeachInputs).length > 0) {
                    //向下继承
                    task.ForeachInput = this.currentInstruction.ForeachInput;
                    task.ForeachInputs = this.currentInstruction.ForeachInputs;
                }
                this.currentInstruction = task;
                this.pointer.currentInstruction=task;
                //Console.log("指令:", this.currentInstruction, input, inputType);
                this.currentInstruction.Input = input;
                this.currentInstruction.InputType = inputType;
                return this.currentInstruction;
            } else if (this.pointer.parent != undefined) {
                //往父的回
                var that = this.pointer;
                this.pointer = that.parent;
                that.parent = undefined;
                that.currentInstruction.ForeachInput=undefined;
                that.currentInstruction.ForeachInputType = undefined;
                that.currentInstruction.ForeachInputs = undefined;
                this.pointer.currentInstruction = that.currentInstruction;
            }
            
        }
    };
    //获得当前指令
    this.getInstruction=function(){
        return this.currentInstruction;
    };
};
module.exports = new InstructionQueue();
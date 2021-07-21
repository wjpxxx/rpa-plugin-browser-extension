import InstructionQueue from "./instructionqueue";
import MockInstruction from "./mockinstruction";
import Console from "./log";
import InstructionAnaly from "./instructionanaly";
//轮询指令队列监听器
const InstructionRun={
    //启动监听器
    run:function(){
        this.intoQueue();
        this.startTimer();
        this.runCodeTimer();
    },
    //请求指令集接口,将指令放入队列
    intoQueue:function(){
        var codes = MockInstruction.get();
        InstructionQueue.pushsQueue(codes);
        //Console.log(InstructionQueue);
    },
    //启动计时器进行监听
    startTimer:function(){
        var task = InstructionQueue.getInstruction();
        if (task&&task.getStatus()==2){
            //完成后执行下一条任务
            InstructionQueue.nextInstruction(InstructionQueue.getInstruction().Output, InstructionQueue.getInstruction().OutputType);
            //Console.log("完成下一条:",InstructionQueue.getInstruction());
        }else if(task==undefined){
            InstructionQueue.nextInstruction();
        }
        setTimeout(()=>{
            this.startTimer();
        },800);
    },
    //指令运行器
    runCodeTimer:function(){
        var task=InstructionQueue.getInstruction();
        if (task &&task.getStatus()==0){
            InstructionAnaly.analysis(task);
        }
        setTimeout(()=>{
            this.runCodeTimer();
        }, 1000);
    },
}
module.exports = InstructionRun;
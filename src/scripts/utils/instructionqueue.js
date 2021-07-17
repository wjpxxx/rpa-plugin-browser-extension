//指令队列
const InstructionQueue = {
    queue:[],
    currentInstruction: {},  //类型:Instruction 当前指令
    returnInstruction: [], //类型:Instruction 由于指令集可能会有嵌套使用,这里利用数组的push和shift,来解决指令集返回的问题
    //指令进入队列,需要进行指令编排
    pushQueue: function (instruction){
        
    },
    //多条指令进入队列,需要对指令进行编排
    pushsQueue: function (instructions) {

    },
    //执行下一条指令-需要考虑子指令集
    nextInstruction:function(){

    },
    //获得当前指令
    getInstruction:function(){

    },
}
module.exports = InstructionQueue;
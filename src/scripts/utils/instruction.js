import InstructionEvent from "./instructionevent";
//指令定义
const Instruction={
    Name:"指令名称", //指令名称
    Url:"",         //指令打开连接地址
    Event: InstructionEvent.JAVASCRIPT,    //指令事件
    Delay:1000,     //延迟ms后执行
    Element:"",     //操作元素选择器文本
    IfYes: [],       //类型:InstructionQueue 用于IF指令判断成立执行的子指令集
    IfNo: [],        //类型:InstructionQueue 用于IF指令集判断不成立执行的子指令集
    Foreach: [],      //类型:InstructionQueue 用于FOREACH指令集
    IfFunction: {input:{},parent:this,body:"return true;"},  //if条件判断使用函数如果返回true 则执行IfYes的子指令集,如果返回false则执行IfNo指令集
    ForeachInput:{      //foreach指令集时,保存foreach指令的Input的单个元素输入参数

    },
    Input:{         //输入参数

    },
    Output: {       //输出参数

    },
    Params:{        //额外参数

    },
    Status:0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败

}
module.exports = Instruction;
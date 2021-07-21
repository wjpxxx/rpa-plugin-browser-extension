import InstructionEvent from "./instructionevent";
//指令定义
const Instruction={
    Name:"指令名称", //指令名称
    Url:"",         //指令打开连接地址
    Event: InstructionEvent.JAVASCRIPT,    //指令事件
    EffectiveDomain:[],         //浏览器打开域名在这个数组内,指令才执行
    Delay:1000,     //延迟ms后执行
    Element:"",     //操作元素选择器文本
    IfYes: [],       //类型:InstructionQueue 用于IF指令判断成立执行的子指令集
    IfNo: [],        //类型:InstructionQueue 用于IF指令集判断不成立执行的子指令集
    Foreach: [],      //类型:InstructionQueue 用于FOREACH指令集
    IfFunction: {body:"return true;"},  //if条件判断使用函数如果返回true 则执行IfYes的子指令集,如果返回false则执行IfNo指令集
    ForeachInputType: "dom", //输入参数类型值有: dom, json 向下继承
    ForeachInput:{      //foreach指令集时,保存foreach指令的Input的单个元素输入参数 向下继承

    },
    ForeachInputs: {      //foreach指令集时,保存foreach指令的Input的外层遍历的数组个元素输入参数 向下继承

    },
    ForeachIndex:0,  //foreach循环里的index索引值
    InputType:"dom",  //输入参数类型值有:dom,json
    Input:{         //输入参数

    },
    OutputType: "dom",   //输出参数类型值有:dom,json
    Output: {       //输出参数

    },
    Params:{        //额外参数

    },
    Status:0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    Msg:"",
    //设置状态
    setStatus:function(status,msg){
        this.Status=status;
        this.Msg=msg;
    },
    //获取状态
    getStatus:function(){
        return this.Status;
    },
    //设置完成状态
    setFinish:function(){
        this.setStatus(2);
    },
    //设置运行中状态
    setRuning: function () {
        this.setStatus(1);
    },
    setFail:function(msg){
        this.setStatus(-1, msg);
    },
    //终止运行
    setCancel:function(){
        this.setStatus(3);
    },
}
module.exports = Instruction;
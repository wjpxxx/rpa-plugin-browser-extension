import InstructionEvent from "../instructionevent";
var ajax = [
    {
        Name: "请求ajax", //指令名称
        Url: "",         //指令打开连接地址
        Event: InstructionEvent.FETCH,    //指令事件
        EffectiveDomain: [
            "baidu.com"
        ],
        Delay: 1000,     //延迟ms后执行
        Element: ".gLFyf.gsfi",     //操作元素选择器文本
        IfYes: [],       //类型:InstructionQueue 用于IF指令判断成立执行的子指令集
        IfNo: [],        //类型:InstructionQueue 用于IF指令集判断不成立执行的子指令集
        Foreach: [],      //类型:InstructionQueue 用于FOREACH指令集
        IfFunction: { body: "return true;" },  //if条件判断使用函数如果返回true 则执行IfYes的子指令集,如果返回false则执行IfNo指令集
        ForeachInputType: "dom", //输入参数类型值有: dom, json
        ForeachInput: {      //foreach指令集时,保存foreach指令的Input的单个元素输入参数

        },
        InputType: "dom",  //输入参数类型值有:dom,json
        Input: {         //输入参数

        },
        OutputType: "dom",   //输出参数类型值有:dom,json
        Output: {       //输出参数
            Name: "获取元素1"
        },
        Params: {        //额外参数
            input:"https://www.baidu.com",
            isSync:true,
            //先定义一个请求参数d,这个请求参数d可以通过input剥离出想要的数据
            init:"var d={a:'wjp'}; return {body: JSON.stringify(d),method:'POST',credentials: 'same-origin',mode: 'cors',headers: {'user-agent': 'Mozilla/4.0 MDN Example','content-type': 'application/text'}}"  //此函数必须返回fetch请求所需的参数部分
        },
        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    },
    {
        Name: "ajax返回内容", //指令名称
        Url: "",         //指令打开连接地址
        Event: InstructionEvent.JAVASCRIPT,    //指令事件
        EffectiveDomain: [
            "baidu.com"
        ],
        Delay: 1000,     //延迟ms后执行
        Element: "a",     //操作元素选择器文本
        IfYes: [],       //类型:InstructionQueue 用于IF指令判断成立执行的子指令集
        IfNo: [],        //类型:InstructionQueue 用于IF指令集判断不成立执行的子指令集
        Foreach: [],      //类型:InstructionQueue 用于FOREACH指令集
        IfFunction: { body: "return true;" },  //if条件判断使用函数如果返回true 则执行IfYes的子指令集,如果返回false则执行IfNo指令集
        ForeachInputType: "dom", //输入参数类型值有: dom, json
        ForeachInput: {      //foreach指令集时,保存foreach指令的Input的单个元素输入参数

        },
        InputType: "dom",  //输入参数类型值有:dom,json
        Input: {         //输入参数

        },
        OutputType: "dom",   //输出参数类型值有:dom,json
        Output: {       //输出参数
            Name: "获取元素1"
        },
        Params: {        //额外参数
            body: "console.log(input,inputType);"
        },
        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    },
];
module.exports = ajax;
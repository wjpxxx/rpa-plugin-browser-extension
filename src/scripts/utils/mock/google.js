import InstructionEvent from "../instructionevent";
var baidu = [
    {
        Name: "获得谷歌输入文本框", //指令名称
        Url: "",         //指令打开连接地址
        Event: InstructionEvent.GETELEMENT,    //指令事件
        EffectiveDomain: [
            "google.com"
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

        },
        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    },
    {
        Name: "执行脚本,往文本框输入关键词", //指令名称
        Url: "",         //指令打开连接地址
        Event: InstructionEvent.JAVASCRIPT,    //指令事件
        EffectiveDomain: [
            "google.com"
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
            body: "input.value='关键词';"
        },
        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    },
    {
        Name: "获得搜索按钮", //指令名称
        Url: "",         //指令打开连接地址
        Event: InstructionEvent.GETELEMENT,    //指令事件
        EffectiveDomain: [
            "google.com"
        ],
        Delay: 1000,     //延迟ms后执行
        Element: ".gNO89b",     //操作元素选择器文本
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

        },
        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    },
    {
        Name: "点击搜索按钮", //指令名称
        Url: "",         //指令打开连接地址
        Event: InstructionEvent.TRIGGER,    //指令事件
        EffectiveDomain: [
            "google.com"
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
            eventType: "Event",
            typeArg:"click",
        },
        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    },
];
module.exports = baidu;
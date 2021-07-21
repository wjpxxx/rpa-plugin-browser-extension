import InstructionEvent from "../instructionevent";
var common = [
    {
        Name: "打开一个链接地址", //指令名称
        Url: "www.baidu.com",         //指令打开连接地址
        Event: InstructionEvent.OPEN,    //指令事件
        EffectiveDomain: [
            "www.baidu.com"
        ],
        Delay: 1000,     //延迟ms后执行
        Element: "",     //操作元素选择器文本
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
            Name: "打开一个链接地址"
        },
        Params: {        //额外参数
            target: "location"
        },
        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    },
    {
        Name: "创建元素", //指令名称
        Url: "",         //指令打开连接地址
        Event: InstructionEvent.CREATEELEMENT,    //指令事件
        EffectiveDomain: [
            "www.baidu.com"
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
            tagName: "div",
            attrs: {
                style: "background-color:#f00;width:200px;height:200px;"
            }
        },
        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    },
    {
        Name: "执行脚本", //指令名称
        Url: "",         //指令打开连接地址
        Event: InstructionEvent.JAVASCRIPT,    //指令事件
        EffectiveDomain: [
            "www.baidu.com"
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
            body: "console.log('javascript:',input);"
        },
        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    },
    {
        Name: "获取元素1", //指令名称
        Url: "",         //指令打开连接地址
        Event: InstructionEvent.GETELEMENT,    //指令事件
        EffectiveDomain: [
            "www.baidu.com"
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

        },
        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    },
    {
        Name: "FOREACH循环 指令", //指令名称
        Url: "www.baidu.com",         //指令打开连接地址
        Event: InstructionEvent.FOREACH,    //指令事件
        EffectiveDomain: [
            "www.baidu.com"
        ],
        Delay: 1000,     //延迟ms后执行
        Element: "",     //操作元素选择器文本
        IfYes: [],       //类型:InstructionQueue 用于IF指令判断成立执行的子指令集
        IfNo: [],        //类型:InstructionQueue 用于IF指令集判断不成立执行的子指令集
        Foreach: [//类型:InstructionQueue 用于FOREACH指令集
            {
                Name: "for指令集里创建元素红色块", //指令名称
                Url: "",         //指令打开连接地址
                Event: InstructionEvent.CREATEELEMENTTOPARENT,    //指令事件
                EffectiveDomain: [
                    "www.baidu.com"
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
                    tagName: "div",
                    attrs: {
                        style: "background-color:#f00;width:200px;height:200px;"
                    }
                },
                Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
            },
            {
                Name: "for指令集里获取元素1", //指令名称
                Url: "",         //指令打开连接地址
                Event: InstructionEvent.GETELEMENT,    //指令事件
                EffectiveDomain: [
                    "www.baidu.com"
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

                },
                Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
            },
        ],
        IfFunction: { body: "return true;" },  //if条件判断使用函数如果返回true 则执行IfYes的子指令集,如果返回false则执行IfNo指令集
        ForeachInputType: "dom", //输入参数类型值有: dom, json
        ForeachInput: {      //foreach指令集时,保存foreach指令的Input的单个元素输入参数
            Name: "FOREACH循环 指令", //指令名称
        },
        InputType: "dom",  //输入参数类型值有:dom,json
        Input: {         //输入参数

        },
        OutputType: "dom",   //输出参数类型值有:dom,json
        Output: {       //输出参数
            Name: "FOREACH循环 指令"
        },
        Params: {        //额外参数
            target: "location"
        },
        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    },
    {
        Name: "IF条件", //指令名称
        Url: "",         //指令打开连接地址
        Event: InstructionEvent.IF,    //指令事件
        EffectiveDomain: [
            "www.baidu.com"
        ],
        Delay: 1000,     //延迟ms后执行
        Element: "a",     //操作元素选择器文本
        IfYes: [
            {
                Name: "获取元素2", //指令名称
                Url: "",         //指令打开连接地址
                Event: InstructionEvent.GETELEMENT,    //指令事件
                Delay: 1000,     //延迟ms后执行
                EffectiveDomain: [
                    "www.baidu.com"
                ],
                Element: "a",     //操作元素选择器文本
                IfYes: [
                    {
                        Name: "打开一个链接地址", //指令名称
                        Url: "www.baidu.com",         //指令打开连接地址
                        Event: InstructionEvent.OPEN,    //指令事件
                        Delay: 1000,     //延迟ms后执行
                        Element: "",     //操作元素选择器文本
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
                            Name: "打开一个链接地址",
                        },
                        Params: {        //额外参数

                        },
                        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
                    }
                ],       //类型:InstructionQueue 用于IF指令判断成立执行的子指令集
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
                    Name: "获取元素2"
                },
                Params: {        //额外参数

                },
                Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
            },
            {
                Name: "IF条件判断2", //指令名称
                Url: "",         //指令打开连接地址
                Event: InstructionEvent.IF,    //指令事件
                EffectiveDomain: [
                    "www.baidu.com"
                ],
                Delay: 1000,     //延迟ms后执行
                Element: "a",     //操作元素选择器文本
                IfYes: [
                    {
                        Name: "打开一个链接地址", //指令名称
                        Url: "www.baidu.com",         //指令打开连接地址
                        Event: InstructionEvent.OPEN,    //指令事件
                        Delay: 1000,     //延迟ms后执行
                        Element: "",     //操作元素选择器文本
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
                            Name: "打开一个链接地址2222", //指令名称
                        },
                        Params: {        //额外参数

                        },
                        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
                    }
                ],       //类型:InstructionQueue 用于IF指令判断成立执行的子指令集
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
                    Name: "IF条件判断2", //指令名称
                },
                Params: {        //额外参数

                },
                Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
            },
            {
                Name: "获取元素333", //指令名称
                Url: "",         //指令打开连接地址
                Event: InstructionEvent.GETELEMENT,    //指令事件
                EffectiveDomain: [
                    "www.baidu.com"
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
                    Name: "获取元素333", //指令名称
                },
                Params: {        //额外参数

                },
                Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
            },
        ],       //类型:InstructionQueue 用于IF指令判断成立执行的子指令集
        IfNo: [
            {
                Name: "获取元素3", //指令名称
                Url: "",         //指令打开连接地址
                Event: InstructionEvent.GETELEMENT,    //指令事件
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
                    Name: "获取元素3", //指令名称
                },
                Params: {        //额外参数
                },
                Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
            },
        ],        //类型:InstructionQueue 用于IF指令集判断不成立执行的子指令集
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
            Name: "IF条件", //指令名称
        },
        Params: {        //额外参数

        },
        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    },
    {
        Name: "获取元素10", //指令名称
        Url: "",         //指令打开连接地址
        Event: InstructionEvent.GETELEMENT,    //指令事件
        EffectiveDomain: [
            "www.baidu.com"
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
            Name: "获取元素10", //指令名称
        },
        Params: {        //额外参数

        },
        Status: 0,       //指令状态 0.待执行 1.执行中 2.执行完成 3.执行终止(下一条指令不可在执行了) -1.执行失败
    }
];
module.exports = common;
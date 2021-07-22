import Console from "./log";
import InstructionEvent from "./instructionevent";
//指令解析器
const InstructionAnaly = {
    //指令解析函数,输入单条指令---所有执行函数必须是同步的,避免使用异步导致不可预知问题
    analysis:async function (instruction){
        //进来标记为运行中
        if (this.filterDomain(instruction)){
            //不是本网站应该运行的终止
            instruction.setCancel();
            return ;
        }
        instruction.setRuning();
        //延迟
        await this.delay(instruction);
        //Console.log("指令:", instruction, "input:", instruction.Input, "inputType:", instruction.InputType, "ForeachInputType:", instruction.ForeachInputType, "ForeachInput:", instruction.ForeachInput);
        //Console.log("指令:", instruction);
        /*
        if (instruction.ForeachInputs && instruction.ForeachInputs.entries) {
            //带循环的
            
            for (var entry of instruction.ForeachInputs.entries()){
                instruction.ForeachIndex = entry[0];
                instruction.Input = entry[1];
                instruction.ForeachInput = entry[1];
                instruction.ForeachInputType = "dom";
                instruction.InputType="dom";
                await this.single(instruction);
            }
            
        }else{
            await this.single(instruction);
        }
        */
        await this.single(instruction);

        if (instruction.getStatus()==1) {
            instruction.setFinish();
        }
        
    },
    //指令应该在哪些域名下运行的一个过滤,不应该运行返回true,应该运行返回false
    filterDomain: function (instruction){
        if (instruction.EffectiveDomain && instruction.EffectiveDomain.length>0){
            var oldUrl = window.location.href;
            var find=false;
            for (var i in instruction.EffectiveDomain) {
                var ul = instruction.EffectiveDomain[i];
                if (oldUrl.indexOf(ul) != -1) {
                    find=true;
                    break;
                }
            }
            if (find){
                //应该运行
                return false;
            }else{
                //不应该运行
                return true;
            }
        }else{
            return false;
        }
    },
    //单条指令无循环下的
    single:async function (instruction){
        //Console.log("指令:", instruction.Name);
        Console.log("指令:", instruction);
        switch (instruction.Event) {
            case InstructionEvent.OPEN:
                //打开窗口
                this.open(instruction);
                break;
            case InstructionEvent.JAVASCRIPT:
                //执行脚本
                this.javascript(instruction);
                break;
            case InstructionEvent.GETELEMENT:
                //获取元素
                this.getElement(instruction);
                break;
            case InstructionEvent.GETELEMENTS:
                //获取多个元素
                this.getElements(instruction);
                break;
            case InstructionEvent.CREATEELEMENT:
                //创建元素
                this.createElement(instruction);
                break;
            case InstructionEvent.CREATEELEMENTTOPARENT:
                //创建元素在元素下
                this.createElementToParent(instruction);
                break;
            case InstructionEvent.FOREACH:
                //遍历指令
                this.foreach(instruction);
                break;
            case InstructionEvent.TRIGGER:
                //触发事件指令
                this.trigger(instruction);
                break;
            case InstructionEvent.FETCH:
                //触发事件指令
                if (instruction.Params.isSync){
                    //同步执行
                   await this.runfetch(instruction);
                }else{
                    //异步执行
                    this.runfetch(instruction);
                }
                //Console.log("执行完毕");
                break;
            default:
                break;
        }
    },
    //InstructionEvent定义的类型,一个个以函数形式实现它
    //延迟函数
    delay: async function (instruction){
        if (instruction.Delay>0) {
            await new Promise((resolve, reject) => {
                setTimeout(resolve, instruction.Delay);
            });
            //Console.log("结束延迟:", instruction.Delay, "ms");
        }
    },
    //打开一个连接地址
    //Url 为要打开的页面url地址.打开分为当前页面打开,创建一个新窗口打开区别用Params来区分
    //比如Params:{"target":"window"}表示创建一个新窗口打开window.open(Instruction.Url);
    //比如Params:{"target":"location"}表示在当前页面打开 windows.location.href=Instruction.Url;
    open: function (instruction){
        var url = instruction.Url;
        if (url.indexOf("http")==-1){
            url="http://"+url;
        }
        if (instruction.Params.target =="window"){
            var oldUrl = window.location.href;
            if (oldUrl.indexOf(instruction.Url) == -1) {
                window.open(url);
            }
        } else if (instruction.Params.target == "location"){
            var oldUrl = window.location.href;
            if (oldUrl.indexOf(instruction.Url)==-1){
                //Console.log(window.location.href, url);
                window.location.href = url;
            }
            
        }
    },
    //指令执行一段JavaScript脚本,这个时候指令的Params.body属性是一段JavaScript脚本文本内容,利用Function函数
    //let script=new Function(foreachInput, foreachInputType, input, inputType,instruction,"逻辑程序")
    //逻辑程序返回值必须定死return {output:{},outputType:"dom"};
    javascript: function (instruction){
        if (instruction.Params.body) {
            var body = instruction.Params.body;
            //Console.log("javascript");
            try{
                var f = new Function("foreachInput", "foreachInputType", "input", "inputType","instruction", body);
                var ret = f(instruction.ForeachInput, instruction.ForeachInputType, instruction.Input, instruction.InputType, instruction);
                //Console.log("ret:",ret);
                if (ret) {
                    instruction.Output = ret.output;
                    instruction.OutputType = ret.outputType;
                }
            }catch(e){
                instruction.setFail("javascript脚本异常");
            }
        }
    },
    //获得dom元素 利用querySelector对象选择器实现对dom元素的获取,Element属性为对象选择器的文本写法,Output输出dom对象
    //这个如果跟CREATEELEMENTTOPARENT连用,比如上一条指令是GETELEMENT获取元素dom,下一条指令为CREATEELEMENTTOPARENT
    //这个时候Input为GETELEMENT获取的dom对象,在其底下创建出一个dom子元素出来
    getElement: function (instruction){
        if (instruction.Element!="") {
            var dom = document.querySelector(instruction.Element);
            if (dom) {
                instruction.Output = dom;
                instruction.OutputType = "dom";
            } else{
                //找不到元素
                instruction.setFail("找不到元素");
            }
        }
        
    },
    getElements: function (instruction) {
        if (instruction.Element != "") {
            var doms = document.querySelectorAll(instruction.Element);
            if (doms && doms.length > 0) {
                instruction.Output = doms;
                instruction.OutputType = "doms";
            } else {
                //找不到元素
                instruction.setFail("找不到元素");
            }
        }
    },
    //指令执行创建一个dom元素,document.createElement调用,Params是要创建元素的属性值
    //如:Params:{tagName:"a", attrs:{href:"http://www.baidu.com"}}
    createElement: function (instruction){
        if (instruction.Params && instruction.Params.tagName){
            var el = document.createElement(instruction.Params.tagName);
            for (var i in instruction.Params.attrs){
                el[i] = instruction.Params.attrs[i];
            }
            document.body.appendChild(el);
            instruction.Output=el;
            instruction.OutputType="dom";
        }else{
            instruction.setFail("缺少Params");
        }
    },
    //创建一个子dom元素在一个父dom元素下,Input可以是一个父元素dom对象，如果Input是空,此指令效果跟CREATEELEMENT是一样的
    //如果Input不为空,则在Input指向的dom元素下创建一个子元素dom
    createElementToParent: function (instruction){
        if(instruction.Input){
            if (instruction.Params && instruction.Params.tagName) {
                var el = document.createElement(instruction.Params.tagName);
                for (var i in instruction.Params.attrs) {
                    el[i] = instruction.Params.attrs[i];
                }
                if (instruction.InputType=="dom") {
                    instruction.Input.appendChild(el);
                    instruction.Output = el;
                    instruction.OutputType = "dom";
                }
            }
        }else{
            this.createElement(instruction);
        }
    },
    //foreach循环指令
    //如果Input有值时,Input是个数组,遍历Input数组,
    //取出Input[0]当成Foreach子指令集第一条的输入Input,并且也是ForeachInput的值,
    //第二条指令的Input是第一条指令的Output,但是ForeachInput依然延续下去
    foreach: function (instruction){
        //Console.log("FOR指令:", instruction);
    },
    //出发dom元素的事件,这个时候Input是一个dom元素,这个时候触发Input对应dom元素的事件,需要触发什么事件,参数是什么
    //可以放入Params中,比如:想要触发按钮的点击事件,先调用GETELEMENT,获得dom元素--->放入TRIGGER指令的Input
    //触发点击事件Params:{eventType:"event",typeArg:"click", eventInit:[参数值...]}
    //eventType事件类型:MouseEvent,Event,InputEvent,UIEvent等等,参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Event
    //可以拿来直接初始化Event对象let evt=new Event(Params.typeArg, Params.eventInit);
    //Input.dispatchEvent(evt)
    trigger: function (instruction){
        if (instruction.InputType == "dom" && instruction.Input){
            var evt = document.createEvent(instruction.Params.eventType);
            var p=[];
            if (instruction.Params.eventInit){
                p = instruction.Params.eventInit;
            }
            if (instruction.Params.eventType =="Event"){
                evt.initEvent(instruction.Params.typeArg, ...p);
            } else if (instruction.Params.eventType == "MouseEvent") {
                evt.initMouseEvent(instruction.Params.typeArg, ...p);
            } else {
                evt.initUIEvent(instruction.Params.typeArg, ...p);
            }
            //Console.log(instruction.Input);
            instruction.Input.dispatchEvent(evt);
        }else{
            instruction.setFail("无dom元素可触发");
        }
    },
    //发起fetch请求
    //Params参数:{input:"www.baidu.com",init:执行逻辑javascrpit字符串,Function("input", "inputType","instruction","执行逻辑返回fetch所需的init"),
    //isSync:true  //是否同步执行 true 同步 false异步,异步的时候流程继续往下走不会等返回，同步的时候下一个指令的input为fetch请求返回的数据
    //}
    runfetch:async function (instruction){
        if (instruction.Params && instruction.Params.input){
            var f = new Function("input", "inputType", "instruction", instruction.Params.init);
            var params=f(instruction.Input,instruction.InputType,instruction);
            var data=await fetch(instruction.Params.input, params).then(response =>{
                if (params.headers&&params.headers["content-type"] =="application/json"){
                    return response.json();
                }else{
                    return response.text();
                }
            });
            instruction.Output=data;
            if (params.headers && params.headers["content-type"] == "application/json") {
                instruction.OutputType ="json";
            }else{
                instruction.OutputType = "text";
            }
        }
    },
}

module.exports = InstructionAnaly;
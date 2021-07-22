//指令的事件类型---开发聚焦于每一个InstructionEvent即可
//所有的异步函数都统一转成同步函数,利用Promise,async,await 可以实现这个效果
const InstructionEvent = {
    //打开一个连接地址
    //Url 为要打开的页面url地址.打开分为当前页面打开,创建一个新窗口打开区别用Params来区分
    //比如Params:{"target":"window"}表示创建一个新窗口打开window.open(Instruction.Url);
    //比如Params:{"target":"location"}表示在当前页面打开 windows.location.href=Instruction.Url;
    OPEN:"open",
    //指令执行一段JavaScript脚本,这个时候指令的Params.body属性是一段JavaScript脚本文本内容,利用Function函数
    //let script=new Function(foreachInput, foreachInputType, input, inputType,instruction,"逻辑程序")
    //foreachInput:在FOREACH指令的时候,此值为所遍历的单元素的值
    //foreachInputType:在FOREACH指令的时候,此值为所遍历的单元素的类型
    //input：上一条指令的输出
    //inputType：上一条指令的输出类型
    //instruction:当前指令对象,在foreach指令时instruction.ForeachInputs为所遍历的元素数组
    //instruction.ForeachIndex为当前执行到第几个元素
    //逻辑程序返回值必须定死return {output:{},outputType:"dom"};
    JAVASCRIPT:"javascript",
    //指令执行创建一个dom元素,document.createElement调用,Params是要创建元素的属性值
    //如:Params:{tagName:"a", attrs:{href:"http://www.baidu.com"}}
    CREATEELEMENT: "createElement",
    //创建一个子dom元素在一个父dom元素下,Input可以是一个父元素dom对象，如果Input是空,此指令效果跟CREATEELEMENT是一样的
    //如果Input不为空,则在Input指向的dom元素下创建一个子元素dom
    CREATEELEMENTTOPARENT:"createElementToParent",
    //获得dom元素 利用querySelector对象选择器实现对dom元素的获取,Element属性为对象选择器的文本写法,Output输出dom对象
    //这个如果跟CREATEELEMENTTOPARENT连用,比如上一条指令是GETELEMENT获取元素dom,下一条指令为CREATEELEMENTTOPARENT
    //这个时候Input为GETELEMENT获取的dom对象,在其底下创建出一个dom子元素出来
    GETELEMENT:"getElement",
    //获得dom元素 利用querySelector对象选择器实现对dom元素的获取,Element属性为对象选择器的文本写法,Output输出dom对象
    //这个如果跟CREATEELEMENTTOPARENT连用,比如上一条指令是GETELEMENTS获取元素dom,下一条指令为CREATEELEMENTTOPARENT
    //这个时候Input为GETELEMENT获取的dom对象,在其底下创建出一个dom子元素出来
    GETELEMENTS: "getElements",
    //出发dom元素的事件,这个时候Input是一个dom元素,这个时候触发Input对应dom元素的事件,需要触发什么事件,参数是什么
    //可以放入Params中,比如:想要触发按钮的点击事件,先调用GETELEMENT,获得dom元素--->放入TRIGGER指令的Input
    //触发点击事件Params:{eventType:"event",typeArg:"click", eventInit:[参数值...]}
    //eventType事件类型:MouseEvent,Event,InputEvent,UIEvent等等,参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Event
    //可以拿来直接初始化Event对象let evt=new Event(Params.typeArg, Params.eventInit);
    //Params.eventInit:初始化事件所需要的参数 如：eventType=UIEvent,Params.eventInit=[canBubble,cancelable,view,detail]实际传入值[true, true, window, 1]
    //Input.dispatchEvent(evt)
    TRIGGER:"trigger",
    //IF条件判断指令 读取当前指令的时候先利用Function函数将指令的IfFunction转为函数
    //当Input有值时,IfFunction(Input,this){//逻辑,最后返回值true或者false}
    //当Input无值时,Element有值时,通过选择器获取到dom元素当成Input值,IfFunction=new Function("topQueue", "curQueue", "input", "inputType","instruction","执行逻辑返回true或则false")
    //利用Function,IfFunction=new Function("topQueue", "curQueue", "input", "inputType","instruction","执行逻辑返回true或则false")
    //调用 IfFunction(Input, this, "return true;")
    //如果返回true的时候,走向IfYes指令队列
    //如果返回false的时候,走向IfNo指令队列
    //要考虑到如果进入IF指令的子集指令中,所有的子集指令执行完毕返回到外层指令
    IF:"if",
    //foreach循环指令
    //如果Input有值时,Input是个数组,遍历Input数组,
    //取出Input[0]当成Foreach子指令集第一条的输入Input,并且也是ForeachInput的值,
    //第二条指令的Input是第一条指令的Output,但是ForeachInput依然延续下去
    FOREACH:"foreach",
    //发起fetch请求
    //Params参数:{input:"www.baidu.com",init:Function("input", "inputType","instruction","执行逻辑返回fetch所需的init参数对象"),
    //isSync:true  //是否同步执行 true 同步 false异步,异步的时候流程继续往下走不会等返回，同步的时候下一个指令的input为fetch请求返回的数据
    //}
    FETCH:"fetch",
};
module.exports = InstructionEvent;
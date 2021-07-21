const Console={
    log:function(...arg){
        console.log("=============", ...arg);
    },
    err: function (...arg){
        console.error("=============", ...arg);
    },
}

module.exports = Console;
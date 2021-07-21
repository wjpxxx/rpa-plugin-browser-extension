import Instruction from "./instruction";
import Common from "./mock/common";
import Baidu from "./mock/baidu";
import Google from "./mock/google";
const MockInstruction={
    get:function(){
        var datas = Google;
        for(var i in datas){
            datas[i] = Object.assign(Object.create(Instruction), datas[i]);
        }
        return datas;
    }
}
module.exports = MockInstruction;
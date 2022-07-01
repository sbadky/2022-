let a = 12;
console.log(a.toString());//=>'12'
console.log((NaN).toString());//=>'NaN'

//null和undefined值禁止直接tostring的
//(null).tostring() //=>报错
//但是和undefined一样转换为字符串的结果就是'null'/''undefined

//普通对象.tostring（）的结果是"[object object]" =>Object.prototype.tostring方法不是转换为字符串，而是用来检测数据类型的

//===========字符串拼接
//四则运算法则中，除加法外，其余都是数学计算，只有加法可能存在字符串拼接（一旦遇到字符串，则不是数学运算，而是字符串拼接）
console.log('10' + 10); //=>'1010'
console.log('10' - 10); //=>0
console.log('10px' - 10); //=>NaN


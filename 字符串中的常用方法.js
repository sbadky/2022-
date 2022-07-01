/*
*charAt:根据索引获取指定位置的字符
*charCodeAt：根据指定字符的ASCII码值（Unicode编码值
*@params：n[number]获取字符指定的索引
*@return：
返回查找的字符/找不到返回的是空字符不是undefined，或者对应的编码值
 */
/*
let str = 'zdwadhbqwhjbd ';
console.log(str.charAt(0));//=>'z'
console.log(str[0]);//=>'z'
console.log(str[1000]);//=>undefind
console.log(str.charAt[1000]);//=>''

console.log(str.charCodeAt[0])//=>122
console.log(String.fromCharCode(122));//=>'z'
*/


/*
都是为了实现自付出的截取（在原来的字符串中查找到自己想要的）
substr(n,m):从索引n开始截取m个字符，m不写时截取到末尾
substring（n，m）：从索引n开始查找到m处（不含m）
slice(n,m):和substring一样，都是找到索引为m处，但是slice可以支持负数作为索引，其余两个是不可以的
*/
/*let str = 'chengang123'
console.log(str.slice(-4, -2));//=>'g1' 相当于str.length+负数==>str.slice(10-4,10-2)*/

/*
验证字符串是否存在
indexOf(x,y):获取x出现位置的索引，y是控制查找的起始位置的索引
lastIndexOf(x)：最后一次出现位置的索引
=>没有这个字符，返回结果是-1
*/

//toUpperCase / toLowerCase
/*
字符串中字母的大小写转换
toUpperCase():转大写
toLowerCase()：转小写
*/

/*
*split([分隔符])：把字符串按照指定的分隔符拆分成数组（和数组中的join对应）
*/
/*let str = 'music|movie|food|sport';
let ary = str.split('|');//=>["music","movie","food","sport"]
str = ary.join(',');
console.log(str);//=>'music,movie,food,sport'*/

/*
*replace(老字符，新字符)：实现字符串替换（通常伴随正则使用）
*/
/*let str = '姓名@年龄@性别@爱好';
console.log(str.replace('@', "|"));//=>姓名|年龄@性别@爱好 在不使用正则表达式的情况下，执行一次replace只能替换一次字符*/
let time = '2022-6-29 13:6:50';


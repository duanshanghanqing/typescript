// type inference
var str1 = 'str';
// union types
var numberOrString;
// 类型断言 + 联合类型，最佳使用
function getLength(input) {
    var str = input; // 把 input 断言为 string 类型
    if (str.length) { // 字符串有长度属性
        return str.length;
    }
    else { // 数值没有长度属性
        var number = input; // 断言为数值类型 
        return number.toString().length;
    }
}
// type guard
function getLength2(input) {
    if (typeof input === 'string') { // ts 会智能缩小返回
        return input.length; // 这里会有智能提醒
    }
    else {
        return input.toString().length; // 这里也会有智能提醒
    }
}
//# sourceMappingURL=4.类型断言.js.map
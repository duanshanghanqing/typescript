// 1
function echo(arg) {
    // console.log(arg.length);
    // return arg.length;
    return {
        name: 'xxxx'
    };
}
// 2
var echo2 = function (arg) {
    console.log(arg.length);
    return arg;
};
// 3
var echo3 = function (arg) {
    console.log(arg.length);
    return arg;
};
// 4
// <T extends IWithLength>(data: T) 为函数泛型类型
var fun4 = function (data) { return data; };
// 5 
// (x: number, y: number, z?: number) => number  为类型
var fun5 = function (x, y, z) {
    return x + y + z;
};
var fun6 = function (x, y, z) {
    return x + y + z;
};
fun6(1, 2, 3);
var str = echo('str');
var str2 = echo2('str');
var str3 = echo3('str');
var num4 = fun4([]);
console.log(num4);
var num5 = fun5(1, 2, 3);
console.log(num5);
//# sourceMappingURL=3.泛型.js.map
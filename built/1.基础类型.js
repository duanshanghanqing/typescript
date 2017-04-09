/**
 * 基本数据类型
 */
/**
 * 布尔类型
 */
var isDone = false;
/**
 * 数字类型
 */
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
/**
 * 字符串
 */
var userName = "bob";
userName = "smith";
var age = 37;
var sentence = "Hello, my name is " + userName + ".I'll be " + (age + 1) + " years old next month.";
/**
 * 数组
 */
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
/**
 * 元组 Tuple
 */
var x = ['hello', 10]; // OK
x[2] = 'world';
console.log(x[0]); // OK
//let x: [string, number] = [10,'hello'];
/**
 * 枚举
 */
/*
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
*/
//或者，全部都采用手动赋值：
/*
enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Green;
*/
//查找值
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
/**
 * 任意类型（不知道数据类型的情况下使用,可以给变量赋任何值）
 */
var notSure = 4;
notSure = "maybe a string instead"; //在任何地方可以随意赋值
notSure = false;
notSure.ifItExists();
notSure.toFixed();
notSure.toString();
/**
 * 对象类型（Object）。
 */
//Object类型的变量只是允许你给它赋任意值 ， 但是却不能够在它上面调用任意的方法,即使有方法
var ageNumber = 4;
//ageNumber.ifItExists();
//ageNumber.toFixed();
/**
 * 空值类型
 * void(没有)类型像是与any(任意)类型相反
 */
function warnUser() {
    console.log("This is my warning message");
}
/**
 * void类型
 * 声明void类型的变量没有什么大用，因为你只能为它赋予undefined和null
 */
var unusable1 = undefined;
var unusable2 = null;
/**
 * Null 和 Undefined  类型
 * TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似。用处不大，没意义
 */
var u = undefined;
var n = null;
/**
 * never类型
 * 表示的是那些永不存在的值的类型
 * never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
 * 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
 */
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message); //有异常抛出
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
/**
 * 类型断言(类型检测)
 */
var someValue = "this is a string";
var strLength = someValue.length; //告诉解析器，someValue这个变量是字符串类型
//或者
var nameValue = "this is a string";
var nameLength = nameValue.length; //告诉解析器，nameValue这个变量是字符串类型

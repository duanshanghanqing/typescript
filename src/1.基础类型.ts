/**
 * 基本数据类型
 */

/**
 * 布尔类型
 */
let isDone: boolean = false;

/**
 * 数字类型
 */
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let num: number = null
let num2: number = undefined

/**
 * 字符串
 */
let userName: string = "bob";
userName = "smith";

let age: number = 37;
let sentence: string = `Hello, my name is ${ userName }.I'll be ${ age + 1 } years old next month.`;

/**
 * 数组
 */
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
// 累数组
function test() {
    // IArguments 是 类数组 类型
    let args: IArguments = arguments;
    console.log(args); 
}


/**
 * 元组 Tuple
 */
let x: [string, number] = ['hello', 10]; // OK
    // x[2] = 'world';
    x.push(1); // 只能添加两种类型中的其中一种
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
enum Color { Red = 1, Green, Blue };
let colorName: string = Color[2];


/**
 * 任意类型（不知道数据类型的情况下使用,可以给变量赋任何值）
 */
let notSure: any = 4;
notSure = "maybe a string instead";//在任何地方可以随意赋值
notSure = false;
notSure.ifItExists();
notSure.toFixed();
notSure.toString();

/**
 * 对象类型（Object）。
 */
//Object类型的变量只是允许你给它赋任意值 ， 但是却不能够在它上面调用任意的方法,即使有方法
let ageNumber: Object = 4;
//ageNumber.ifItExists();
//ageNumber.toFixed();

/**
 * 空值类型
 * void(没有)类型像是与any(任意)类型相反
 */
function warnUser(): void {//void:表示该方法没有返回值
    console.log("This is my warning message");
}

/**
 * void类型
 * 声明void类型的变量没有什么大用，因为你只能为它赋予undefined和null
 */
let unusable1: void = undefined;
let unusable2: void = null;


/**
 * Null 和 Undefined  类型
 * TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似。用处不大，没意义
 */
let u: undefined = undefined;
let n: null = null;

/**
 * never类型
 * 表示的是那些永不存在的值的类型
 * never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
 * 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message); //有异常抛出
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {//死循环
    }
}


/**
 * 类型断言(类型检测)
 * 万金油 any 类型
 */
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;//告诉解析器，someValue这个变量是字符串类型
//或者
let nameValue: any = "this is a string";
let nameLength: number = (nameValue as string).length;//告诉解析器，nameValue这个变量是字符串类型
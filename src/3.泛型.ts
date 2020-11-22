interface IWithLength {
    length: number
}

interface IWithName {
    name: string
}

// 1
// 泛型继承接口
function echo<T extends IWithLength>(arg: T): IWithName {
    // console.log(arg.length);
    // return arg.length;
    return {
        name: 'xxxx'
    };
}

// 2
var echo2 = function <T extends IWithLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// 3
var echo3 = <T extends IWithLength>(arg: T): T => {
    console.log(arg.length);
    return arg;
}

// 4
// <T extends IWithLength>(data: T) 为函数泛型类型
let fun4: <T extends IWithLength>(data: T) => T = (data) => data;

interface ISum {

}
// 5 
// (x: number, y: number, z?: number) => number  为类型
let fun5: (x: number, y: number, z?: number) => number = (x, y, z) => {
    return x + y + z;
}

// 6 
// 使用借口简化 5
interface ISum {
    (x: number, y: number, z?: number): number
}
let fun6: ISum = (x, y, z) => {
    return x + y + z;
}
fun6(1, 2, 3);

const str = echo('str');
const str2 = echo2('str');
const str3 = echo3('str');
let num4 = fun4([]);
console.log(num4);
let num5 = fun5(1, 2, 3);
console.log(num5);



// 7
// 类用泛型描述
class Queue<T> { // 声明泛型
    private data = [];
    public push(item: T) { // 使用泛型
        this.data.push(item);
    }
    public pop(): T { // 使用泛型
        return this.data.shift();
    }
}

// 实例化类时传入泛型约束
const queue = new Queue<number>();
queue.push(1);
console.log(queue.pop());


// 8.动态泛型
// 声明泛型约束接口
interface KeyPair<T, U> { // T, U 是动态传入
    key: T,
    value: U
}
// 传入不同的泛型约束
let kp1: KeyPair<number, string> = {
    key: 1,
    value: 'string'
}
let kp2: KeyPair<string, number> = {
    key: 'string',
    value: 1
}

// 数组泛型
let arrTwo: Array<number> = [1, 2, 3];

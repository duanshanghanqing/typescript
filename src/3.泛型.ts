interface IWithLength {
    length: number
}

interface IWithName {
    name: string
}

// 1
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
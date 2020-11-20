// type inference
let str1: string = 'str';

// union types
let numberOrString: number | string;

// 类型断言 + 联合类型，最佳使用
function getLength(input: string | number): number {
    const str = input as string; // 把 input 断言为 string 类型
    if (str.length) { // 字符串有长度属性
        return str.length;
    } else { // 数值没有长度属性
        const number = input as number; // 断言为数值类型 
        return number.toString().length;
    }
}

// type guard
function getLength2(input: string | number): number {
    if (typeof input === 'string') { // ts 会智能缩小返回
        return input.length; // 这里会有智能提醒
    } else {
        return input.toString().length; // 这里也会有智能提醒
    }
}
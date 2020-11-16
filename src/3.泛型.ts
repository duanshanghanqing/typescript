interface IWithLength {
    length: number
}

interface IWithName {
    name: string
}

function echo<T extends IWithLength>(arg: T): IWithName {
    // console.log(arg.length);
    // return arg.length;
    return {
        name: 'xxxx'
    };
}

var echo2 = function <T extends IWithLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

var echo3 = <T extends IWithLength>(arg: T): T => {
    console.log(arg.length);
    return arg;
}

// <T extends IWithLength>(data: T) 为函数泛型类型
let fun4: <T extends IWithLength>(data: T) => T = (data) => data;


const str = echo('str');
const str2 = echo2('str');
const str3 = echo3('str');
let num4 = fun4([]);
console.log(num4);
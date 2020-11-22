// Promise 都是基于回调模式的

// 高阶函数
// 1.如果你的函数参数是一个函数
// 2.或者函数返回函数
// 都叫高阶函数

// 柯里化就是让函数变得更具体
// 反柯里化就是让函数的返回变大



// 通用颗粒化函数
const curring = (fn) => {
    const exec = (sumArgs) => {
        // fn.length 参数长度
        return sumArgs.length === fn.length ? fn(...sumArgs) :  (...args) => exec([...sumArgs, ...args])
    }
    return exec([]);
}
function sum(a,b,c,d) {
    return a + b + c + d;
}
const _sum = curring(sum);
console.log( _sum(1)(2)(3)(4) );



// Promise 最重要的核心，解决了 1.异步兵法问题 2.回调低于问题


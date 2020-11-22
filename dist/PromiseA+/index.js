// Promise 都是基于回调模式的
// 高阶函数
// 1.如果你的函数参数是一个函数
// 2.或者函数返回函数
// 都叫高阶函数
// 柯里化就是让函数变得更具体
// 反柯里化就是让函数的返回变大
// 通用颗粒化函数
var curring = function (fn) {
    var exec = function (sumArgs) {
        // fn.length 参数长度
        return sumArgs.length === fn.length ? fn.apply(void 0, sumArgs) : function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return exec(sumArgs.concat(args));
        };
    };
    return exec([]);
};
function sum(a, b, c, d) {
    return a + b + c + d;
}
var _sum = curring(sum);
console.log(_sum(1)(2)(3)(4));
// Promise 最重要的核心，解决了 1.异步兵法问题 2.回调低于问题
//# sourceMappingURL=index.js.map
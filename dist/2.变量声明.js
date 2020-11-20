var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/**
 * var 声明
 */
var a = 10;
//在函数内部定义变量：
function f() {
    var message = "Hello, world!";
    return message;
}
var F = f();
console.log(F); //Hello, world!
//var声明变量的类型
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i); //连续打印10次
    }, 10);
}
//只能使用独立作用域解决，转换成块级作用域解决
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i); //0，1，2，3，4，5，6，7，8，9
        }, 10);
    })(i);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1); //0，1，2，3，4，5，6，7，8，9
    }, 10);
};
/**
 * let 声明
 * 块作用域,let声明的变量只会作用在花括号内
 */
/*
function k(input: boolean) {
    let a = 100;
    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }
    // 这里返回b报错，因为let是块级作用域，只在最近的花括号有效。
    return b;
}
*/
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
/*
try {
    throw "oh no!";
}catch (e) {
    console.log(e);//只能在作用域名内访问到
}
// catch中返回的值是访问不到的
console.log(e);
*/
//拥有块级作用域的变量的另一个特点是，它们不能在被声明之前读或写。
//虽然这些变量始终“存在”于它们的作用域里，但在直到声明它的代码之前的区域都属于 时间死区。因为内存里还没有什么这个变量
/*
a++; // illegal to use 'a' before it's declared;在声明之前使用“a”是非法的；
let a;
*/
/**
 * const 声明
 * 被赋值后不能再改变,用于常量
 */
var numLivesForCat = 9;
//numLivesForCat = 10;//重新赋值报错
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
//可以操作属性
kitty.name = "lisi";
kitty["age"] = 18;
/*
//但不能重新赋值
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};
*/
/**
 * 解构数组
 * 把数组每个元素赋值给对应数组的变量
 */
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // outputs = 1
console.log(second); // outputs = 2
//其实使用了 first = input[0];  second = input[1];  这两个数组的索引
//优雅的使用 [first, second] = [1, 2];
//在数组里使用...语法创建剩余变量：
var _a = [1, 2, 3, 4], number1 = _a[0], rest = _a.slice(1);
console.log(number1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
//...rest  把除了第一个元素外的剩余数组元素组成一个新的数组赋值给rest变量
//可以忽略你不关心的尾随元素
var element1 = [1, 2, 3, 4][0];
console.log(element1); // outputs 1
(function () {
    /**
     * 对象解构
     */
    var o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    //let { a, b } = o;//var a = o.a, b = o.b;
    //通过 o.a 和 o.b 创建了 a 和 b 。 注意，如果你不需要 c 你可以忽略它。
    //像数组解构，你可以用没有声明的赋值：给变量a b赋值.变量a b必须和对象属性一致
    //({ a, b } = { a: "baz", b: 101 });
    var a = o.a, passthrough = __rest(o, ["a"]); //==>  var a = "foo" , var passthrough = {b: 12, c: "bar"}
})();
(function () {
    /**
     * 属性命名
     */
    var o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    var name = o.a, age = o.b; //==>  var name = o.a, age = o.b;
})();
(function () {
    /**
     *默认值
    */
    function keepWholeObject(wholeObject) {
        var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    }
    function f1(_a) {
        var a = _a.a, b = _a.b;
        // ...
    }
    //设置默认值类型，并赋值
    function f2(_a) {
        var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, b = _b.b;
        // ...
    }
    f2(); // ok, default to { a: "", b: 0 }
    //设置默认值类型，并赋值
    function f3(_a) {
        var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
        // ...
    }
    f3({ a: "yes" }); // ok, default b = 0
    f3(); // ok, default to {a: ""}, which then defaults b = 0
})();
(function () {
    /**
     * 展开
     */
    //展开数组
    var first = [1, 2];
    var second = [3, 4];
    var bothPlus = [0].concat(first, second, [5]);
    //bothPlus = [0,1,2,3,4,5]
    //展开对象
    var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
    var search = __assign({}, defaults, { food: "rich" });
    //{ food: "rich", price: "$$", ambiance: "noisy" }
    //对象展开，有相同的属性时，后属性会重写前属性
    var C = /** @class */ (function () {
        function C() {
            this.p = 12;
        }
        C.prototype.m = function () {
        };
        return C;
    }());
    var c = new C();
    var clone = __assign({}, c);
    //clone.p; // ok
    //clone.m(); // error!  展开后会丢失方法
})();
//# sourceMappingURL=2.变量声明.js.map
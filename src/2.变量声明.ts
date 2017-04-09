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
console.log(F);//Hello, world!

//var声明变量的类型
for(var i=0;i<10;i++) {
    setTimeout(function(){
        console.log(i);//连续打印10次
    },10);
}
//只能使用独立作用域解决，转换成块级作用域解决
for(var i=0;i<10;i++) {
    (function(i){
        setTimeout(function(){
            console.log(i);//0，1，2，3，4，5，6，7，8，9
        },10);
    })(i);
}


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

for(let i=0;i<10;i++) {
    setTimeout(function(){
        console.log(i);//0，1，2，3，4，5，6，7，8，9
    },10);
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
const numLivesForCat = 9;
//numLivesForCat = 10;//重新赋值报错

const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}
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
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs = 1
console.log(second); // outputs = 2
//其实使用了 first = input[0];  second = input[1];  这两个数组的索引
//优雅的使用 [first, second] = [1, 2];

//在数组里使用...语法创建剩余变量：
let [number1, ...rest] = [1, 2, 3, 4];
console.log(number1);   // outputs 1
console.log(rest);      // outputs [ 2, 3, 4 ]
//...rest  把除了第一个元素外的剩余数组元素组成一个新的数组赋值给rest变量

//可以忽略你不关心的尾随元素
let [element1] = [1, 2, 3, 4];
console.log(element1); // outputs 1




(function(){
    /**
     * 对象解构
     */
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    }
    //let { a, b } = o;//var a = o.a, b = o.b;
    //通过 o.a 和 o.b 创建了 a 和 b 。 注意，如果你不需要 c 你可以忽略它。


    //像数组解构，你可以用没有声明的赋值：给变量a b赋值.变量a b必须和对象属性一致
    //({ a, b } = { a: "baz", b: 101 });

    let { a, ...passthrough } = o;//==>  var a = "foo" , var passthrough = {b: 12, c: "bar"}
})();




(function(){
    /**
     * 属性命名
     */
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    }
    let { a: name, b: age } = o;//==>  var name = o.a, age = o.b;
})();



(function(){
    /**
     *默认值 
    */
    function keepWholeObject(wholeObject: { a: string, b?: number }) {//接收一个对象，对象中要包括a b两个属性
        let { a, b = 1001 } = wholeObject;
    }

    /**
     * 函数声明
     */
    type C = { a: string, b?: number }//设置默认值的类型并没有赋值
    function f1({ a, b }: C): void {
        // ...
    }

    //设置默认值类型，并赋值
    function f2({ a, b } = { a: "", b: 0 }): void {
        // ...
    }
    f2(); // ok, default to { a: "", b: 0 }

    //设置默认值类型，并赋值
    function f3({ a, b = 0 } = { a: "" }): void {
        // ...
    }
    f3({ a: "yes" }) // ok, default b = 0
    f3() // ok, default to {a: ""}, which then defaults b = 0
})();





(function(){
    /**
     * 展开
     */
    //展开数组
    let first = [1, 2];
    let second = [3, 4];
    let bothPlus = [0, ...first, ...second, 5];
    //bothPlus = [0,1,2,3,4,5]

    //展开对象
    let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
    let search = { ...defaults, food: "rich" };
    //{ food: "rich", price: "$$", ambiance: "noisy" }
    //对象展开，有相同的属性时，后属性会重写前属性

    class C {
        p = 12;
        m() {
        }
    }
    let c = new C();
    let clone = { ...c };
    //clone.p; // ok
    //clone.m(); // error!  展开后会丢失方法
})();
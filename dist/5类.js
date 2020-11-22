// 类 class：定义了一切事物的抽象特点
// 对象 Object：类的实例
// 面向对象 OOP 三大特性: 封装，继承，多态
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // 重写父类构造函数
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.dogrun = function () {
        return _super.prototype.run.call(this); // protected 修饰的 属性， 方法，只能在子类里被调用。使用 super 关键字调用
    };
    return Dog;
}(Animal));
var dog = new Dog('xiaomao');
console.log(dog.dogrun());
//# sourceMappingURL=5类.js.map
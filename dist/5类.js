// 类 class：定义了一切事物的抽象特点
// 对象 Object：类的实例
// 面向对象 OOP 三大特性: 封装，继承，多态
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var snake = new Animal('lily');
console.log(snake.run());
//# sourceMappingURL=5类.js.map
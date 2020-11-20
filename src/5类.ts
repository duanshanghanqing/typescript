// 类 class：定义了一切事物的抽象特点
// 对象 Object：类的实例
// 面向对象 OOP 三大特性: 封装，继承，多态

class Animal {
    name: string;
    constructor(name: string) {
        this.name  = name;
    }

    run() {
        return `${this.name} is running`;
    }
}

const snake = new Animal('lily');
console.log(snake.run());

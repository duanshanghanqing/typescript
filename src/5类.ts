// 类 class：定义了一切事物的抽象特点
// 对象 Object：类的实例
// 面向对象 OOP 三大特性: 封装，继承，多态

class Animal {
    public name: string; // 共有属性
    private age: number; // 私有属性
    readonly height: number; // 只读属性，不能修改
    constructor(name: string) {
        this.name  = name;
    }

    protected run() {
        return `${this.name} is running`;
    }
}

class Dog extends Animal {
    // 重写父类构造函数
    constructor(name: string) {
        super(name);
    }
    public dogrun() {
        return super.run(); // protected 修饰的 属性， 方法，只能在子类里被调用。使用 super 关键字调用
    }
}
const dog = new Dog('xiaomao');
console.log(dog.dogrun());

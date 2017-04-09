(function(){
    /**
     * 定义接口
     * 接口是对一个对象的描述
     */
    interface LabelledValue {
        label: string;//描述对象属性的类型
    }
    function printLabel(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }
    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);
})();


(function(){
    /**
     * 可选参数
     */
    //定义,?：表示该属性不全都是必需的，可有可无
    interface SquareConfig {
        color?: string;
        width?: number;
    }
    //config：接收的参数。SquareConfig：修饰参数的接口。
    //{color: string; area: number}：方法的返回值，是一个对象，并修饰对象属性的类型
    function createSquare(config: SquareConfig): {color: string; area: number} {
        let newSquare = {color: "white", area: 100};
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }

    let mySquare = createSquare({color: "black"});
})();


(function(){
    /**
     * 只读属性
     */
    interface Point {
        readonly x: number;
        readonly y: number;
    }
    //基于接口创建对象，赋值后， x和y再也不能被改变了。
    let p1: Point = { x: 10, y: 20 };
    //p1.x = 5; // error!


    //TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似
    let a: number[] = [1, 2, 3, 4];//创建number类型的数组
    let ro: ReadonlyArray<number> = a;//赋值给Readonly类型Array。并设置number类型.不能修改了
    //ro[0] = 12; // error!
    //ro.push(5); // error!
    //ro.length = 100; // error!
    //a = ro; // error!
    //可以用类型断言重写
    let b = ro as number[];//重新赋值给b


})();



(function(){
    /**
     * 额外的属性检查
     */
    interface SquareConfig {
        color?: string;
        width?: number;
    }
    function createSquare(config: SquareConfig): { color: string; area: number } {
        let newSquare = {color: "white", area: 100};
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    //传入colour属性和接口描述的属性不一致，导致报错
    //let mySquare = createSquare({ colour: "red", width: 100 });//报错
    let mySquare = createSquare({ color: "red", width: 100 });
})();
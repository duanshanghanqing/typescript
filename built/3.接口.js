(function () {
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
})();
(function () {
    //config：接收的参数。SquareConfig：修饰参数的接口。
    //{color: string; area: number}：方法的返回值，是一个对象，并修饰对象属性的类型
    function createSquare(config) {
        var newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    var mySquare = createSquare({ color: "black" });
})();
(function () {
    //基于接口创建对象，赋值后， x和y再也不能被改变了。
    var p1 = { x: 10, y: 20 };
    //p1.x = 5; // error!
    //TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似
    var a = [1, 2, 3, 4]; //创建number类型的数组
    var ro = a; //赋值给Readonly类型Array。并设置number类型.不能修改了
    //ro[0] = 12; // error!
    //ro.push(5); // error!
    //ro.length = 100; // error!
    //a = ro; // error!
    //可以用类型断言重写
    var b = ro; //重新赋值给b
})();
(function () {
    function createSquare(config) {
        var newSquare = { color: "white", area: 100 };
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
    var mySquare = createSquare({ color: "red", width: 100 });
})();

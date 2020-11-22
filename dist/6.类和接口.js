// 2.实现接口
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.switchRadio = function (trigger) {
    };
    return Car;
}());
// 实现多个接口 ， 隔开
// class Cellphone implements Radio, Battery  {
// 使用 继承 的 接口
var Cellphone = /** @class */ (function () {
    function Cellphone() {
    }
    Cellphone.prototype.switchRadio = function (trigger) {
    };
    Cellphone.prototype.checkBatteryStatus = function () {
    };
    return Cellphone;
}());
//# sourceMappingURL=6.类和接口.js.map
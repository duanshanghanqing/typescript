// 1.定义接口
interface Radio {
    switchRadio(trigger: boolean): void;
}

interface Battery {
    checkBatteryStatus(): void;
}

// 接口继承
interface RadioWithBattery extends Battery{
    checkBatteryStatus(): void;
}


// 2.实现接口
class Car implements Radio {
    switchRadio(trigger: boolean) {

    }
}

// 实现多个接口 ， 隔开
// class Cellphone implements Radio, Battery  {

// 使用 继承 的 接口
class Cellphone implements RadioWithBattery  {
    switchRadio(trigger: boolean) {

    }
    checkBatteryStatus() {

    }
}
const funuum: (x: number, y: number) => number = (x, y) => x + y;
console.log(funuum(1, 2));

// 使用type关键字定义类型别名
type PlusType = (x: number, y: number) => number;

const funuum2: PlusType = (x, y) => x + y;
console.log(funuum2(1, 2));

// | ： 联合类型, 即可以是字符串类型，又何以是数值
type PlusType2 = string | number;
const val1: PlusType2 = 1;
const val2: PlusType2 = 'hello';

// 只能是其中的一种
type PlusType3 = 'up' | 'down' | 'left' | 'right';
const toWhere: PlusType3 = 'right';

// 固定类型, 值只能是 'name'
const val3: 'name' = 'name';
const val4: 1 = 1;

// & : 并且，同时拥有两个类型
interface IName {
    name: string
}
type Iperson = IName & { age: number };
const person: Iperson = {
    name: 'zhangsan',
    age: 12,
};

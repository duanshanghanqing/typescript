// 数值枚举，递增
enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right, // 3
}

console.log(Direction.Up);

// 常量枚举，提高编译效率
const enum DirectionStr {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}
console.log(DirectionStr.Up);
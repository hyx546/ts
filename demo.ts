// 单个泛型 T用来指任意输入的类型
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result
}

console.log(createArray(3, 'x'));



// 多个类型参数
function swap<T, U>(s1: T, s2: U): [U, T] {
  return [s2, s1]
}

console.log(swap(1, 'h'));


// 泛型约束
interface lengthWise {
  length: number;
}

function lengthWiseFn<T extends lengthWise>(value: T): T {
  console.log(value.length);
  return value;
}
console.log(lengthWiseFn('132'));


// 定义接口的泛型
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArray1: CreateArrayFunc =
  function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  }
console.log(createArray1(4, 'y'));


// 泛型类
class genicNumber<T> {
  value: T;
  add: (x: T, y: T) => T;
}

let myGenicNumber = new genicNumber<number>();
myGenicNumber.value = 234;
myGenicNumber.add = (x, y) => x + y;
console.log(myGenicNumber,myGenicNumber.add(13,14));

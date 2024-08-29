const obj1 = { name: 'Alice' };
const obj2 = { age: 30, city: 'New York' };

function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB); 
}

const mergedObject = merge(obj1, obj2);

console.log(mergedObject); 

const user = {
    name: "Alice",
    age: 30,
    isAdmin: true,
};

console.log(user.name);
console.log(user["age"]);

user.age = 31;
user["isAdmin"] = false;

console.log(user.age);
console.log(user.isAdmin);

user.email = "test@example.com";
console.log(user.email);
console.log(user);
delete user.isAdmin;
console.log(user);

const user2 = {
    name:"Bob",
    greet: function () {
        console.log("Hello, my name is " + this.name);
    },
};
user2.greet();


const arr1 = [1, 2,];
const arr2 = [3, 4,];
const combinde = [...arr1, ...arr2];
console.log(combinde);

const obj1 = { a: 1, b: 2, };
const obj2 = { c: 3, d: 4, };
const merged = { ...obj1, ...obj2, };
console.log(merged);

const numbers = [1, 2, 3, 4, 5];
const [first, second, third, ,last] = numbers;
console.log(first);
console.log(second);
console.log(third);
console.log(last);
console.log(numbers);
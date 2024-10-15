// import { usersData, username as myName } from "./usersData.js";
// console.log("Username: ", myName);

import { usersData, username } from "./usersData.js";

import { add, avg as average_of, greet } from "./export_function.js";


const firstUser = usersData[0];

console.log("Username: ", username);
console.log(firstUser);

console.log("12 + 8 = " + add(12, 8));

// greet = (username) => { // can not change 
//     console.log(`Hello, ${username}`);
// }

greet("Nirbhay");

console.log(average_of(10, 10, 5, 9, 8, 6, 3));
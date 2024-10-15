// debugger;
const username = "Nirbhay";
// const user = "OM";

// user = "Raj";  <-- not allow because of type="module" 
// console.log("user: ", user);

// import { usersData } from "./usersData.js";

console.log(username);
// console.log(usersData);

const h1 = document.querySelector("#heading");

console.log(h1); 

console.log(usersData);

console.log("Before import");
import { usersData } from "./usersData.js";
console.log("After import");
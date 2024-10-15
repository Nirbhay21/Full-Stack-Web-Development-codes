import * as module from "./temp_module1.js";

console.log(module);
console.log("----------------------------------------");
console.log(module.user);
console.log("----------------------------------------");
module.displayUser();
console.log("----------------------------------------");
module.default(module.user);
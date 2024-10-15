// import username from "./default_export_module.js";
import myName from "./default_export_module.js"

// import nm from "./named_export_and_default_export.js";

import getUsername, { name1, name2 } from "./named_export_and_default_export.js";

console.log("My name is:", myName);

console.log("name1:", name1);
console.log("name2:", name2);

console.log("Username:", getUsername());
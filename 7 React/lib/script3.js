"use strict";

var heading = function heading() {
  return /*#__PURE__*/React.createElement("h1", null, "This is Heading");
};
var root = ReactDOM.createRoot(document.querySelector("#root"));
console.log(heading());
root.render(heading());
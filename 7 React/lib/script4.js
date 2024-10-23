"use strict";

var root = ReactDOM.createRoot(document.querySelector("#root"));
var container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  style: {
    width: "500px",
    height: "500px",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "box",
  style: {
    width: "120px",
    height: "120px",
    backgroundColor: "aqua",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    fontWeight: "600"
  }
}, "Life"));
console.log("Hello");
root.render(container);
//# sourceMappingURL=script4.js.map
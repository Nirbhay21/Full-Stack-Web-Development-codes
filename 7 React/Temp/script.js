const react_h1 = React.createElement("h1", {className: "h1-heading", id:"heading"}, "This is h1 Heading");

// h1.props.children = "NOT HEADING";

// const my_h1 = {
//     "$$typeof": Symbol.for('react.element'),
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "className": "h1-heading",
//         "id": "heading",
//         "children": "This is my Heading"
//     },
//     "_owner": null,
//     "_store": {}
// }

const my_h1 = {
    "$$typeof": Symbol.for('react.element'),
    "type": "h1",
    "ref": null,
    "props": {
        "className": "h1-heading",
        "id": "heading",
        "children": "This is my Heading"
    },
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
// console.dir(root);

// root.render(react_h1);
root.render(my_h1);

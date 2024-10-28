import React from "react";
import { createRoot } from "react-dom/client"

const root = document.getElementById("root")._root || createRoot(document.getElementById("root"));
document.getElementById("root")._root = root;

function Card(props) {
    return (
        <div>
            <ul>
                <li>First name: <span>{props.firstName}</span></li>
                <li>Last name: <span>{props.lastName}</span></li>
                <li>Age: <span>{props.age}</span></li>
            </ul>
        </div>
    );
}

// const element = {
//     $$typeof: Symbol.for("react.element"),
//     type: func,
//     ref: null,
//     props: {
//         firstName: "Nirbhay",
//         lastName: "Marde",
//         age: 20,
//         key: 1,
//     }
// }

const element = React.createElement(Card, {
    firstName: "Nirbhay",
    lastName: "Marde",
    age: 20,
    key: 1,
});

const h1 = <h1>Nirbhay</h1>;

// root.render(element);

const cardComponent = (
    <Card
        firstName="Nirbhay"
        lastName="Marde"
        age="20"
    />
);

// Converted into - 
console.log(/*#__PURE__*/React.createElement(Card, {
    firstName: "Nirbhay",
    lastName: "Marde",
    age: "20"
}));

console.log(cardComponent);

root.render(cardComponent)
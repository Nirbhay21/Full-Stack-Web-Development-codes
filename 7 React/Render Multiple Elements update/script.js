import React from "react"

import "./style.css"

import { createRoot } from "react-dom/client"

const root = document.getElementById("root")._root || createRoot(document.querySelector("#root"));
document.getElementById("root")._root = root;

function Card(props) {
    return (
        <div className="card" key={props.id}>
            <img className="card__image" src={props.thumbnail} alt="card_image" />
            <div className="card__content">
                <h2 className="card__title">{props.title}</h2>
                <p className="card__info">{props.description}</p>
                <p className="card__price">Price: <span>${props.price}</span></p>
            </div>
        </div>
    );
}

function displayAllCards(cardsData) {
    const container = (
        <div className="container"> {
            cardsData.map((cardData) => {
                return Card({
                    id: cardData.id,
                    title: cardData.title,
                    price: cardData.price,
                    thumbnail: cardData.thumbnail,
                    description: cardData.description,
                });
            })
        }
        </div>
    );

    root.render(container);
}

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        displayAllCards(data.products);
    });

if (module.hot) {
    module.hot.accept();
}
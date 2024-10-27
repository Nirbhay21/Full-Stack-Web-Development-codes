import React from "react"

import "./style.css"

import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector("#root"));

function Card(key, imgUrl, title, info, price) {
    return (
        <div className="card" key={key}>
            <img className="card__image" src={imgUrl} />
            <div className="card__content">
                <h2 className="card__title">{title}</h2>
                <p className="card__info">{info}</p>
                <p className="card__price">Price: <span>${price}</span></p>
            </div>
        </div>
    );
}

function displayAllCards(cardsData) {
    const container = (
        <div className="container"> {
            cardsData.map((cardData) => {
                return Card(cardData.id, cardData.thumbnail, cardData.title, cardData.description, cardData.price); 
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
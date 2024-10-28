import React from "react";
import { createRoot } from "react-dom/client"

const root = document.getElementById("root")._root || createRoot(document.getElementById("root"));
document.querySelector("#root")._root = root;

function Card(props) {
    return (
        <div id="card" className="max-w-80 overflow-hidden rounded-xl bg-white p-4 shadow-md">
            <img src={props.imgUrl} alt="card_image" className="h-60 w-full" />
            <div id="card-text" className="flex flex-col gap-2">
                <h2 className="text-center text-xl font-bold">{props.title}</h2>
                <p className="text-center text-base">{props.description}</p>
                <p className="text-center font-semibold">Price: <span className="font-normal">${props.price}</span></p>
            </div>
        </div>
    );
}

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        const allCards = data.products.map((cardData) => {
            return (
                <Card
                    key={cardData.id}
                    title={cardData.title}
                    imgUrl={cardData.thumbnail}
                    description={cardData.description}
                    price={cardData.price}
                />
            );
        });

        const container = (
            <div className="flex flex-wrap justify-center gap-7 p-8">
                {allCards}
            </div>
        );

        root.render(
            <body className="bg-gray-100">
                {container}
            </body>
        );
    });

if (module.hot) {
    module.hot.accept();
}
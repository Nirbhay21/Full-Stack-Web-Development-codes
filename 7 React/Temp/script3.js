const heading = () => {
    return <h1>This is Heading</h1>;
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

console.log(heading());

root.render(heading());
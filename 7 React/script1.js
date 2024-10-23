const h2 = <h2 id="heading">Hello JSX</h2>

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h2);

const ren = (root, element) => {
    root.render(element);
}

const container = (
    <div className="container" style={{padding: "1rem", backgroundColor: "black", color: "#0F0", fontSize: "1.6rem"}}>
        <ul className="container__list">
            <li>List item - 1</li>
            <li>List item - 2</li>
            <li>List item - 3</li>
            <li>List item - 4</li>
            <li>List item - 5</li>
        </ul>
    </div>
);

console.log(h2);

ren(root, container);

// ren = 123;
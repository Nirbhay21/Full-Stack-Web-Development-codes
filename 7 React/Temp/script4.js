const root = ReactDOM.createRoot(document.querySelector("#root"));

const container = (
    <div className="container" style={{ width: "500px", height: "500px", backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="box" style={{ width: "120px", height: "120px", backgroundColor: "aqua", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: "600" }}>Life</div>
    </div>
)


console.log("Hello");

root.render(container);
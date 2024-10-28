import { createRoot } from "react-dom/client"

const h1 = <h1>Nirbhay</h1>;
const root = createRoot(document.getElementById("root"));

console.log(h1);

root.render(h1);

if (module.hot) {
    module.hot.accept();
}
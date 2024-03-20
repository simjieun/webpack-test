import "./styles/global.css";

function App() {
  const element = document.createElement("h1");
  element.innerHTML = "Hello, world!!!";
  return element;
}
document.body.appendChild(App());

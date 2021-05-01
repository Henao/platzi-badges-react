

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";

import BadgeNew from "./pages/BadgeNew";

// const jsx = <h1>Hello, Platzi Badges 2021!</h1>;
// const element = React.createElement(
//   "a",
//   { href: "http://www.google.com" },
//   "ir a google"
// );
// const name = " Luisa";
// const suma = () => 3 + 3;
// const jsx2 = <h1>Hola soy , {suma()}</h1>

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  <BadgeNew/>,
  container
);

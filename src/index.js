// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

// import './global.css';
import Badge from './components/badge';

// const jsx = <h1>Hello, Platzi Badges 2021!</h1>;
// const element = React.createElement(
//   "a",
//   { href: "http://www.google.com" },
//   "ir a google"
// );
// const name = " Luisa";
// const suma = () => 3 + 3;
// const jsx2 = <h1>Hola soy , {suma()}</h1>


// ReactDOM.render(__qué__, __dónde__);


const container = document.getElementById('app');

ReactDOM.render(
  <Badge
    firstName="Julian"
    lastName="Henao"
    avatarUrl="https://s.gravatar.com/avatar/89e0d1c13aec05d2fc71c206e04242a9?d=identicon"
    jobTitle="Frontend Engineer"
    twitter="henao88"
  />,
  container
);

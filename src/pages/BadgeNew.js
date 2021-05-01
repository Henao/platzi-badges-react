import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Badge from "../components/badge";
import BadgeForm from "../components/BadgeForm";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";

export class BadgeNew extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img src={header} alt="Logo" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                nombre="Julian"
                apellido="Henao"
                twitter="henao88"
                jobTitle="Frontend Engineer"
                avatarUrl="https://s.gravatar.com/avatar/89e0d1c13aec05d2fc71c206e04242a9?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;

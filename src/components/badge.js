import React from "react";
import confLogo from "../images/badge-header.svg";
import './styles/Badge.css';


class Badge extends React.Component {
    render() {
      console.log( this.props)
        // this.props
        // const nombre = 'Julian';
        // const apellido = 'Henao H.';
    return (
      <div className="badge">
        <div className="badge_header">
        <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="badge_section-name">
          <img className="badge_avatar" src={this.props.avatarUrl} alt="Avatar" />
          <h1>
            {this.props.nombre} <br /> {this.props.apellido}
          </h1>
        </div>
        <div className="badge_section-info ">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="badge_footer" >#platziconf</div>
      </div>
    );
  }
}

export default Badge;

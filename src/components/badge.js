import React from "react";
import confLogo from "../images/badge-header.svg";
import '../styles/Badge.css';


class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
        <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="badge_section-name">
          <img className="badge_avatar" src="https://s.gravatar.com/avatar/89e0d1c13aec05d2fc71c206e04242a9?s=80" alt="Avatar" />
          <h1>
            Julian <br /> Henao
          </h1>
        </div>
        <div className="badge_section-info ">
          <h3>frontend Engineer</h3>
          <div>@Henao88</div>
        </div>
        <div className="badge_footer" >#platziconf</div>
      </div>
    );
  }
}

export default Badge;

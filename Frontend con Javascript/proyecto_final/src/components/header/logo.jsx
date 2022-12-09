import React from "react";
import "../../styles/header.css";

class Logo extends React.Component {
  render() {
    return (
      <div id="logo" onClick={event => this.props.navigation(event,0)} className="d-flex flex-row justify-content-start align-items-center float-lg-start">
        <img src={require("../../assets/imagenes/logo.png")} alt="Logo OYE"  />
        <p className="lead fw-bold h1 fs-2  ps-2 m-0 text-primary">OYE</p>
      </div>
    );
  }
}

export default Logo;
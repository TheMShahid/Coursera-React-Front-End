import React, { Component } from "react";
import { Jumbotron, Navbar, NavbarBrand } from "reactstrap";

class HeaderComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/"> Resturent Con Fusion </NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Resturent Con Fusion</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta deserunt similique, cum rerum quos non sunt sequi
                  perferendis voluptates labore.
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default HeaderComponent;

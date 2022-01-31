import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Menu from "./components/MenuComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <div className="container">
            <NavbarBrand href="/"> Resturent Con Fusion </NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;

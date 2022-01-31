import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <div className="container">
            <NavbarBrand href="/"> Resturent Con Fusion </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;

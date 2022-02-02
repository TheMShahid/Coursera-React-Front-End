import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailsComponent";
import { DISHES } from "../shared/dishes";
import HeaderComponent from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <div className="container">
          <h1>Home Page</h1>
          <Home />
        </div>
      );
    };

    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;

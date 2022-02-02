import React from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailsComponent";
import { DISHES } from "../shared/dishes";
import HeaderComponent from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: DishDetail,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail
          dish={this.state.dishes.filter(
            (dish) => dish.id === this.state.selectedDish[0]
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;

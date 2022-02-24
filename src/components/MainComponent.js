import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailsComponent";
import HeaderComponent from "./HeaderComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import { connect } from "react-redux";

const mapSateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.id === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    const AboutUsPage = () => {
      return <About leaders={this.props.leaders} />;
    };

    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/contactus" exact component={Contact} />
          <Route path="/aboutus" exact component={AboutUsPage} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapSateToProps)(Main));

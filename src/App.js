import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "../src/pages/homepage/Homepage";
import ShopPage from "../src/pages/shop/shop";
import Header from "../src/componets/header/header";
import SignInAndSignUpPage from "../src/pages/SignInAndSignUpPage/SignInAndSignUpPage";
import { auth } from "../src/firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

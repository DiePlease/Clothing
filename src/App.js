import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "../src/pages/homepage/Homepage";
import ShopPage from "../src/pages/shop/shop";
import Header from "../src/componets/header/header";
import SignInAndSignUpPage from "../src/pages/SignInAndSignUpPage/SignInAndSignUpPage";
import {
  auth,
  createUserProfileDocument
} from "../src/firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/userActions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDisatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  null,
  mapDisatchToProps
)(App);

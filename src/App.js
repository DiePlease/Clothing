import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "../src/pages/homepage/Homepage";
import ShopPage from "../src/pages/shop/shop";
import Header from "../src/componets/header/header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

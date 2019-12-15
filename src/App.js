import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostList from "./components/PostList";
import OneDish from "./components/OneDish";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import MainPage from "./pages/index";
import Dishes from "./pages/dishes";
import Dish from "./pages/dish";
import NotFound from "./pages/404";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/dishes" component={Dishes} />
        <Route path="/dishes/:id" component={Dish} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/404" component={NotFound} />

        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;

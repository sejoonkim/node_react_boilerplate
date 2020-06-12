import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from './hoc/auth'
import NavBar from "./components/views/NavBar/NavBar";
import MyPage from "./components/views/MyPage/MyPage";
import DonationMapPage from "./components/views/DonationMapPage/DonationMapPage"
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/mypage" component={Auth(MyPage, true)} />
          <Route exact path="/donationmap" component={Auth(DonationMapPage, null)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

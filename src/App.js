import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { logout } from "./actions/loginAction";
import store from "./store";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/admin/AdminDashboard";
import { LOGIN_SUCCESS } from "./actions/types";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  const userData = jwt_decode(localStorage.token);
  store.dispatch({
    type: LOGIN_SUCCESS,
    payload: userData.user_claims,
  });
  const currentTime = Date.now() / 1000;
  if (userData.exp < currentTime) {
    store.dispatch(logout());
    window.localStorage.href = "/";
  }
}
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
        </div>
      </Router>
    );
  }
}

export default App;

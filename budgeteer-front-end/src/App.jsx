import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";

const App = () => {
  return (
    <Switch>
      <Route exact path={"/"} render={(props) => <Home {...props} />} />
      <Route path={"/dashboard"} render={(props) => <Dashboard {...props} />} />
      <Route path={"/profile"} render={(props) => <Profile {...props} />} />
    </Switch>
  );
};

export default App;

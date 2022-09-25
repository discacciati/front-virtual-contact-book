import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Contact from "../pages/contact";
import User from "../pages/user";
import Users from "../pages/users";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useUserInfo } from "../providers/userInfo";
import { Redirect } from "react-router-dom";

const Routes = () => {
  const { getUserInfo, isAuthenticated } = useUserInfo();

  useEffect(() => {
    async function getInitialUserInfo() {
      await getUserInfo();
    }

    getInitialUserInfo();
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={isAuthenticated ? "/contact" : "/user/login"} />
        <Login />
      </Route>
      <Route path="/user/login">
        <Login />
      </Route>
      <Route path="/user/register">
        {isAuthenticated && <Redirect to="/contact" />}
        <Register />
      </Route>
      <Route path="/contact">
        {!isAuthenticated && <Redirect to="/" />}
        <Home />
      </Route>
      <Route path="/contact/:id">
        {!isAuthenticated && <Redirect to="/" />}
        <Contact />
      </Route>
      <Route path="/user/:id">
        {!isAuthenticated && <Redirect to="/" />}
        <User />
      </Route>
      <Route path="/user">
        {!isAuthenticated && <Redirect to="/" />}
        <Users />
      </Route>
    </Switch>
  );
};

export default Routes;

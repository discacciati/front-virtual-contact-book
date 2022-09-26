import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Contact from "../pages/contact";
import User from "../pages/user";
import Users from "../pages/users";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useUserInfo } from "../providers/userInfo";
import { Link } from "react-router-dom";

const RoutesPath = () => {
  const { getUserInfo, isAuthenticated } = useUserInfo();

  useEffect(() => {
    async function getInitialUserInfo() {
      await getUserInfo();
    }

    getInitialUserInfo();
  }, []);

  return (
    <Routes>
      <Route exact path="/">
        <Link to={isAuthenticated ? "/contact" : "/user/login"} />
        <Login />
      </Route>
      <Route path="/user/login">
        <Login />
      </Route>
      <Route path="/user/register">
        {isAuthenticated && <Link to="/contact" />}
        <Register />
      </Route>
      <Route path="/contact">
        {!isAuthenticated && <Link to="/" />}
        <Home />
      </Route>
      <Route path="/contact/:id">
        {!isAuthenticated && <Link to="/" />}
        <Contact />
      </Route>
      <Route path="/user/:id">
        {!isAuthenticated && <Link to="/" />}
        <User />
      </Route>
      <Route path="/user">
        {!isAuthenticated && <Link to="/" />}
        <Users />
      </Route>
    </Routes>
  );
};

export default RoutesPath;

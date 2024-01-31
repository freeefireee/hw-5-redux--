import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./styles.module.css";

const HeaderComponents = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);


  return (
    <nav>
      <ul className={classes.navbar}>
        <li>
          <h2><Link state={{ from: location.pathname }} to="/">Main</Link></h2>
        </li>
        <li>
          <h2><Link state={{ from: location.pathname }} to="/posts">Posts</Link></h2>
        </li>
        <li>
          <h2><Link state={{ from: location.pathname }} to="/users">Users</Link></h2>
        </li>
      </ul>

    </nav>
  );
};

export default HeaderComponents;

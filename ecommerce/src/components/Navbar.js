import React from "react";
// Import the styles from the CSS file
import classes from "./Navbar.module.css";


function Navbar(props) {
    return (
      <div className={classes.navbar}>
        <div className={classes.brand}>{props.brand}</div>
        <div className={classes.cart}>Cart</div>
      </div>
    );
  }

export default Navbar;
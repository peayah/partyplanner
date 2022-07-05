import React from "react";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import foodImage from "../../assets/food.jpeg"
import classes from "./Header.module.css"

const Header = (props) => {
    return (
    < Fragment>
        <header className={classes.header}>
            <h1>PartyPlanner</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes["main-image"]}>
            <img src={foodImage} alt = "a table full of food"/>
        </div>
    </Fragment>
    );
};

export default Header;
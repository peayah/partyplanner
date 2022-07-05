import React from "react";
import { Fragment } from "react";
import foodImage from "../../assets/partyfood.jpeg"
import classes from "./Header.modules.css"
const Header = props => {
    return < Fragment>
        <header className={classes=[classes.header]}>
            <h1>Be there for your guests, we'll be there for the rest</h1>
            <button>Cart</button>
        </header>
        <div>
            <img src={foodImage} alt = "a table full of food"/>
        </div>
    </Fragment>
}

export default Header;
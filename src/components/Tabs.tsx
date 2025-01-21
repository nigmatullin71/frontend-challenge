import React, { JSX } from "react";
import {Link, NavLink} from "react-router-dom";

function Tabs(): JSX.Element{
    return(
        <div className="Tabs">
            <NavLink to='/'>Все котики</NavLink>
            <NavLink to='/favourites'>Любимые котики</NavLink>
        </div>
    )
}

export default Tabs;
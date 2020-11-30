import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

function MainNavigation(): ReactElement {
    return (
        <React.Fragment>
            <NavLink to="/home" activeClassName="active">
                Home
            </NavLink>
            <NavLink to="/" activeClassName="active">
                Dashboard
            </NavLink>
        </React.Fragment>
    );
}

export default MainNavigation;

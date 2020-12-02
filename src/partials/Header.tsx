import React, { ReactElement } from "react";
import MainNavigation from "./MainNavigation";

function Header(): ReactElement {
    return (
        <header>
            <div>
                <h1>Hello Adventurer</h1>
                <MainNavigation />
            </div>
        </header>
    );
}

export default Header;

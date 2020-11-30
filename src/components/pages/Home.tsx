import React, { ReactElement } from "react";
import logo from "../../statics/image/logo.svg";

function Home(): ReactElement {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Working hard on Version 1 of the Household Account Book</p>
            </header>
        </div>
    );
}

export default Home;

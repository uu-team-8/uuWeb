import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Gateway from "../components/Gateway/Gateway";

class Gateways extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container">
                    <Gateway />
                </div>
                <Footer />
            </>
        );
    }
}

export default Gateways;

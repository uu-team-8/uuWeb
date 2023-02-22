import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container-fluid row">
                    <h1>Body</h1>
                </div>
                <Footer />
            </>
        );
    }
}

export default Home;

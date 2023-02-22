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
                    <iframe
                        src="https://grafana.uu.vojtechpetrasek.com/d-solo/xRpNuj1Vk/uu-team-8?orgId=1&from=1677068325673&to=1677071925673&theme=dark&panelId=2"
                        width="450"
                        height="200"
                        frameBorder="0"
                    ></iframe>
                </div>
                <Footer />
            </>
        );
    }
}

export default Home;

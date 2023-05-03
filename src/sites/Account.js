import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AccountForm from "../components/Forms/AccountForm";

import "./page.css";

class Account extends React.Component {
  render() {
    return (
      <div
        className="gradient-custom"
        style={{ height: "100vh", weight: "100vw" }}>
        <NavBar />
        <AccountForm />
        <Footer />
      </div>
    );
  }
}

export default Account;

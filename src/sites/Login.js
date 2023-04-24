import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/Login/LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <LoginForm />
        <Footer />
      </>
    );
  }
}

export default LoginPage;

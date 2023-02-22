import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";
import UserForm from "../components/UserForm/UserForm";

class AddUser extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container-fluid row">
                    <UserForm />
                </div>
                <Footer />
            </>
        );
    }
}

export default AddUser;

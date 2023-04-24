import React from "react";

class Gateway extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gateways: [],
        };
    }
    componentDidMount() {
        this.getData();
    }

    getData = (data) => {
        console.log(data);
        fetch("https://api.uu.vojtechpetrasek.com/v1/gateway", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                this.setState({ gateways: data });
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Něco se pokazilo");
            });
    };

    showGateways = () => {
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Název</th>
                        <th scope="col">Majitel</th>
                        <th scope="col">Lokace</th>
                        <th scope="col">Viditelnost</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.gateways.map((_, index) => {
                        return (
                            <>
                                <tr>
                                    <th scope="row">
                                        {this.state.gateways[index]._id}
                                    </th>
                                    <th scope="row">
                                        {this.state.gateways[index].name}
                                    </th>
                                    <th scope="row">
                                        {this.state.gateways[index].owner}
                                    </th>
                                    <th scope="row">
                                        {this.state.gateways[index].location}
                                    </th>
                                    <th scope="row">
                                        {this.state.gateways[index].visibility}
                                    </th>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
        );
    };
    render() {
        return (
            <>
                <h1>Gateways</h1>
                {this.showGateways()}
            </>
        );
    }
}
export default Gateway;

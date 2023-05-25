import React from "react";

import AddGateway from "./AddGateway";

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

  showGateway = (id) => {
    console.log(id);
    window.location.href = `/gateway/${id}`;
  };

  showGateways = () => {
    return (
      <table class="table text-white">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Owner</th>
            <th scope="col">Location</th>
            <th scope="col">Apikey</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.gateways.map((_, index) => {
            return (
              <>
                <tr>
                  <th scope="row">{this.state.gateways[index]._id}</th>
                  <th scope="row">{this.state.gateways[index].name}</th>
                  <th scope="row">{this.state.gateways[index].owner}</th>
                  <th scope="row">{this.state.gateways[index].location}</th>
                  <th scope="row">{this.state.gateways[index].apikey}</th>
                  <th scope="row">Not active</th>
                  <th scope="row">
                    <button
                      type="button"
                      class="btn btn-success m-1"
                      onClick={() =>
                        this.showGateway(this.state.gateways[index]._id)
                      }>
                      Show
                    </button>
                    <button type="button" class="btn btn-warning m-1">
                      Edit
                    </button>
                    <button type="button" class="btn btn-danger m-1">
                      Delete
                    </button>
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
        <h1 className="text-white text-center pt-5">My gateways</h1>
        <button
          type="button"
          class="btn btn-success mt-3 mb-3"
          data-bs-toggle="modal"
          data-bs-target="#AddGateway">
          Add Gateway
        </button>

        <AddGateway />
        {this.showGateways()}
      </>
    );
  }
}
export default Gateway;

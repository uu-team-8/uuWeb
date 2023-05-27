import React from "react";

import AddGateway from "./AddGateway";
import EditGateway from "./EditGateway";

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

  editData = (data) => {
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

  delete = (data) => {
    console.log(data);
    const token = localStorage.getItem("token");
    fetch("https://api.uu.vojtechpetrasek.com/v4/gateway/delete/" + data, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("delete");
        console.log("Success:", data);
        this.getData();
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

  deleteGatewayModal = (gtw_id) => {
    console.log(gtw_id);
    return (
      <div
        class="modal fade"
        id={gtw_id}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content bg-dark">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Delete Gateway {gtw_id}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you sure you want to delete this gateway?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-label="Close">
                No
              </button>
              <button
                type="button"
                class="btn btn-danger m-1"
                data-bs-dismiss="modal"
                onClick={() => this.delete(gtw_id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
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
                    <button
                      type="button"
                      class="btn btn-warning m-1"
                      data-bs-toggle="modal"
                      data-bs-target="#EditGateway">
                      Edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger mt-3 mb-3"
                      data-bs-toggle="modal"
                      data-bs-target={"#" + this.state.gateways[index]._id}>
                      Delete
                      {/*onClick={() => this.delete(this.state.gateways[index]._id)}>*/}
                    </button>
                    {this.deleteGatewayModal(this.state.gateways[index]._id)}
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

        <EditGateway />
        <AddGateway />
        {this.showGateways()}
        {this.deleteGatewayModal()}
      </>
    );
  }
}
export default Gateway;

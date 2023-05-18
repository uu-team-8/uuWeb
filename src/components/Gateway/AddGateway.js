import React from "react";

class AddGateway extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gateway: {
        name: { value: "", valid: false, touched: false },
        location: { value: "", valid: false, touched: false },
        visibility: { value: false, valid: false, touched: false },
        apikey: { value: "", valid: false, touched: false },
        submitting: false,
      },
    };
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    let valid = false;
    if (id === "apikey") {
      if (value.length >= 32) {
        valid = true;
      } else {
        valid = false;
      }
      this.setState({
        gateway: {
          ...this.state.gateway,
          [id]: { value: value, valid: valid, touched: true },
        },
      });
    } else if (id === "visibility") {
      console.log(e.target.checked, value);
      if (e.target.checked === true) {
        valid = true;
      }
      this.setState({
        gateway: {
          ...this.state.gateway,
          [id]: { value: e.target.checked, valid: valid, touched: true },
        },
      });
    } else {
      if (value.length >= 3) {
        valid = true;
      } else {
        valid = false;
      }

      this.setState({
        gateway: {
          ...this.state.gateway,
          [id]: { value: value, valid: valid, touched: true },
        },
      });
    }
  };

  generateKey = () => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    var length = 32;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.setState({
      gateway: {
        ...this.state.gateway,
        apikey: { value: result, valid: true, touched: true },
      },
    });
  };

  registerGateway = (e) => {
    e.preventDefault();
    console.log("registering gateway");

    if (
      this.state.gateway.name.valid &&
      this.state.gateway.location.valid &&
      this.state.gateway.apikey.valid
    ) {
      this.setState({ submitting: true });

      const data = {
        name: this.state.gateway.name.value,
        location: this.state.gateway.location.value,
        visibility: this.state.gateway.visibility.value,
        apikey: this.state.gateway.apikey.value,
      };

      const token = localStorage.getItem("token");

      fetch("https://api.uu.vojtechpetrasek.com/v4/gateway/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
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
    } else {
      this.setState({
        gateway: {
          ...this.state.gateway,
          name: { ...this.state.gateway.name, touched: true },
          location: { ...this.state.gateway.location, touched: true },
          apikey: { ...this.state.gateway.apikey, touched: true },
        },
      });
    }
  };
  render() {
    return (
      <>
        <div
          class="modal fade model-xl"
          id="AddGateway"
          tabindex="-1"
          aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content bg-dark text-white">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add Gateway
                </h1>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>

              <div class="modal-body">
                <div className="form-outline form form-white mb-2 text-center">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={
                      "form-control form-control-lg" +
                      (this.state.gateway.name.touched
                        ? this.state.gateway.name.valid
                          ? " is-valid"
                          : " is-invalid"
                        : "")
                    }
                    placeholder="Enter gateway name"
                    onChange={this.handleChange}></input>

                  <div className="invalid-feedback">
                    {this.state.gateway.name.errMsg
                      ? this.state.gateway.name.errMsg
                      : "Name should have at least 3 characters."}
                  </div>
                  <div className="valid-feedback">Looks good.</div>
                </div>

                <div className="form-outline form-white mb-2 text-center">
                  <label className="form-label" htmlFor="location">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className={
                      "form-control form-control-lg" +
                      (this.state.gateway.location.touched
                        ? this.state.gateway.location.valid
                          ? " is-valid"
                          : " is-invalid"
                        : "")
                    }
                    placeholder="Enter gateway location"
                    onChange={this.handleChange}></input>

                  <div className="invalid-feedback">
                    {this.state.gateway.location.errMsg
                      ? this.state.gateway.location.errMsg
                      : "Location should have at least 3 characters."}
                  </div>
                  <div className="valid-feedback">Looks good.</div>
                </div>

                <div className="form-outline form-white mb-2 text-center">
                  <label className="form-label" htmlFor="apikey">
                    API Key
                  </label>
                  <div class="input-group has-validation mb-3">
                    <input
                      type="text"
                      id="apikey"
                      className={
                        "form-control form-control-lg" +
                        (this.state.gateway.apikey.touched
                          ? this.state.gateway.apikey.valid
                            ? " is-valid"
                            : " is-invalid"
                          : "")
                      }
                      placeholder="Enter an api key"
                      value={this.state.gateway.apikey.value}
                      onChange={this.handleChange}></input>
                    <button
                      className="btn btn-primary input-group-text px-2"
                      id="apikey"
                      onClick={this.generateKey}>
                      Generate
                    </button>
                    <div className="invalid-feedback">
                      {this.state.gateway.apikey.errMsg
                        ? this.state.gateway.apikey.errMsg
                        : "API key should have at least 32 characters."}
                    </div>
                  </div>
                </div>
                <div class="form-check form-switch">
                  <label class="form-check-label" for="visibility">
                    Visibility{" "}
                    {this.state.gateway.visibility.value ? "Public" : "Private"}
                  </label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="visibility"
                    checked={this.state.gateway.visibility.value}
                    onChange={this.handleChange}></input>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.registerGateway}>
                  Add Gateway
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AddGateway;

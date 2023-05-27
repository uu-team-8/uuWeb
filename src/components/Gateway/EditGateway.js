import React from "react";


class EditGateway extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          gateway: {
            name: { value: "", valid: false, touched: false },
            location: { value: "", valid: false, touched: false },
            visibility: { value: false, valid: false, touched: false },
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

  render() {
    return (
       <>
        <div
          class="modal fade model-xl"
          id="EditGateway"
          tabindex="-1"
          aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content bg-dark text-white">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Edit Gateway
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
                  /* onClick={} */>
                  Edit Gateway
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditGateway;

import React from "react";

class AddGateway extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gateways: [],
    };
  }
  render() {
    return (
      <>
        <div
          class="modal fade model-xl"
          id="AddGateway"
          tabindex="-1"
          aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
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
                <div class="d-flex justify-content-end">
                  <div class="row">
                    <div class="col-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        aria-label="Name"></input>
                    </div>
                    <div class="col-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Location"
                        aria-label="Location"></input>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
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

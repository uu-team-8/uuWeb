import React from "react";

class UserForm extends React.Component {
  render() {
    return (
      <>
        <div className=" col-sm-10">
          <div className="row h-25"></div>
          <div className="row">
            <div className="col-md"></div>
            <div className="col-md-8">
              <form>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputName">Jméno</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Karel"></input>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputSurname">Příjmení</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputSurname"
                      placeholder="Novák"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="karel@novak.cz"></input>
                </div>
                <div className="row">
                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail">Telefon</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="777 123 456"></input>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-4">
                    <label htmlFor="inputPosition">Pozice</label>
                    <select id="inputPosition" className="form-select">
                      <option selected>Admin</option>
                      <option>User</option>
                    </select>
                  </div>
                </div>
                <div className="form-group pt-3">
                  <button type="submit" className="btn btn-primary">
                    Přidat uživatele
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md"></div>
          </div>
        </div>
      </>
    );
  }
}

export default UserForm;

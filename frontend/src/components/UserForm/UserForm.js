import React from "react";

class UserForm extends React.Component {
    render() {
        return (
            <>
                <div class=" col-sm-10">
                    <div class="row h-25"></div>
                    <div class="row">
                        <div class="col-md"></div>
                        <div class="col-md-8">
                            <form>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="inputName">Jméno</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="inputName"
                                            placeholder="Karel"
                                        ></input>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputSurname">
                                            Příjmení
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="inputSurname"
                                            placeholder="Novák"
                                        ></input>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail">Email</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="inputEmail"
                                        placeholder="karel@novak.cz"
                                    ></input>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-4">
                                        <label for="inputEmail">Telefon</label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="inputEmail"
                                            placeholder="777 123 456"
                                        ></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-4">
                                        <label for="inputPosition">
                                            Pozice
                                        </label>
                                        <select
                                            id="inputPosition"
                                            class="form-select"
                                        >
                                            <option selected>Admin</option>
                                            <option>User</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group pt-3">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Přidat uživatele
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md"></div>
                    </div>
                </div>
            </>
        );
    }
}

export default UserForm;

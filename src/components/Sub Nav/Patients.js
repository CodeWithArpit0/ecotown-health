import { ImCross } from "../icons";

export default function Patients() {

    function closeModel(){
        let model = document.getElementById("model");
        model.style.display = "none";
    }
    function openModel(){
        let model = document.getElementById("model");
        model.style.display = "flex";
    }

    return (
        <section className="patients_section">
            <div className="patient_model" id="model">
                <div className="add_patient_container">
                    <div className="form_header">
                        <h1>Add New Patient</h1>
                        <button className="close_model_btn" onClick={closeModel}>
                            <ImCross />
                        </button>
                    </div>
                    <div className="form_container">
                        <form>
                            <div className="row">
                                <input type="text" placeholder="Patient Name" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="row">
                                <input type="text" placeholder="Phone" />
                                <input type="text" placeholder="Address" />
                            </div>
                            <div className="row">
                                <select>
                                    <option value="Gender">Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>   
                                <select>
                                    <option value="A+">A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                </select>   

                                </div>
                            <div className="row">
                                <input type="date" placeholder="Profile" />
                                <input type="text" placeholder="Password" />
                            </div>
                            <div className="row last_row">
                                <input type="file" id="patient_image" hidden/>
                                <label htmlFor="patient_image">Upload Profile</label>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="patients_list_container">
                <div className="section_header">
                    <h1>Available Patients</h1>
                    <button className="add_patient_btn" onClick={openModel}>Add New Patient</button>
                </div>

                <div className="patients_list">
                    <table className="patient_table">
                        <thead>
                            <tr className="table_header">
                                <th>Patients ID</th>
                                <th>Patient Name</th>
                                <th>Patient Phone</th>
                                <th>Due Balance</th>
                                <th>Options</th>
                            </tr>
                        </thead>

                        <tbody>
                            <TableRow />
                            <TableRow />
                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    );
}

function TableRow() {
    return (
        <tr>
            <td>123456</td>
            <td>ABCD patient</td>
            <td>7017339221</td>
            <td>0</td>
            <td className="patient_options_cell">
                <div className="patient_options">
                    <div className="btn_row">
                        <button>Info</button>
                        <button>Edit</button>
                        <button>History</button>
                    </div>

                    <div className="btn_row">
                        <button>Payment</button>
                        <button>delete</button>
                    </div>
                </div>
            </td>
        </tr>
    );
}
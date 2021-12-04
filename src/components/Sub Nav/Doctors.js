import { ImCross } from "../icons";

export default function Doctors() {

    function closeModel(){
        let model = document.getElementById("model");
        model.style.display = "none";
    }
    function openModel(){
        let model = document.getElementById("model");
        model.style.display = "flex";
    }

    return (
        <section className="doctors_section">
            <div className="doctor_model" id="model">
                <div className="add_doctor_container">
                    <div className="form_header">
                        <h1>Add New Doctor</h1>
                        <button className="close_model_btn" onClick={closeModel}>
                            <ImCross />
                        </button>
                    </div>
                    <div className="form_container">
                        <form>
                            <div className="row">
                                <input type="text" placeholder="Doctor Name" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="row">
                                <input type="text" placeholder="Phone" />
                                <input type="text" placeholder="Address" />
                            </div>
                            <div className="row">
                                <input type="text" placeholder="Profile" />
                                <input type="text" placeholder="Password" />
                            </div>
                            <div className="row last_row">
                                <input type="file" id="doctor_image" hidden/>
                                <label for="doctor_image">Upload Profile</label>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="doctors_list_container">
                <div className="section_header">
                    <h1>Available Doctors</h1>
                    <button className="add_doctor_btn" onClick={openModel}>Add New Doctor</button>
                </div>

                <div className="doctors_list">
                    <table className="doctor_table">
                        <thead>
                            <tr className="table_header">
                                <th>Doctor ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Profile</th>
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
            <td>1</td>
            <td>ABCD Doctor</td>
            <td>abcd@gamil.com</td>
            <td>1234567890</td>
            <td>Dentist</td>
            <td className="doctor_options_cell">
                <div className="doctor_options">
                    <div className="btn_row">
                        <button>Info</button>
                        <button>Edit</button>
                        <button>Appointments</button>
                    </div>

                    <div className="btn_row">
                        <button>Holiday</button>
                        <button>Time Schedule</button>
                        <button>delete</button>
                    </div>
                </div>
            </td>
        </tr>
    );
}
import { ImCross } from "../icons";

export default function PatientPayment() {
    function closePatientRegBtn() {
        let model = document.getElementById("patient_register_model");
        model.style.display = "none";
    }function openPatientRegBtn(){
        let model = document.getElementById("patient_register_model");
        model.style.display = "flex";
    }
    return (
        <section className="payment_section">
            <div className="patient_register_model" id="patient_register_model">
                <div className="main-model">
                    <div className="form_header">
                        <h1>Register Patient</h1>
                        <button className="patient_reg_model_close_btn" onClick={closePatientRegBtn}><ImCross /></button>
                    </div>
                    <div className="register_form_container">
                        <form>
                            <div className="form_container">
                                <div className="input_group">
                                    <input type="text" placeholder="Patient Name" />
                                    <input type="email" placeholder="Patient Email" />
                                </div>
                                <div className="input_group">
                                    <input type="text" placeholder="Address" />
                                    <input type="text" placeholder="Phone" />
                                </div>
                                <div className="input_group">
                                    <input type="text" placeholder="Password" />
                                    <input type="date" placeholder="Birth Date" />
                                </div>
                                <div className="input_group">
                                    <select>
                                        <option selected>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    <select>
                                        <option selected>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                    </select>
                                </div>
                                <div className="input_group">
                                    <select>
                                        <option value="Doctor">Doctor</option>
                                        <option>A</option>
                                        <option>B</option>
                                    </select>
                                    <input type="file" id="patient_register_image" hidden />
                                    <label htmlFor="patient_register_image">Upload Patient Image</label>
                                </div>
                                <div className="input_group last_row">
                                    <button className="register_patient_btn">Register Patient</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="payment_container">
                <div className="payment_header">
                    <h1>Patient Payments</h1>
                    <button className="register_btn" onClick={openPatientRegBtn}>Register Patient</button>
                </div>
                <div className="patient_payment_table">
                    <table>
                        <thead>
                            <tr className="table_header">
                                <th>Patient ID</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Due Balance</th>
                                <th>Options</th>
                            </tr>
                        </thead>

                        <tbody>
                            <PatientPaymentRow />
                            <PatientPaymentRow />
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function PatientPaymentRow() {
    return (
        <tr>
            <td>1</td>
            <td>Mr. Arpit Saxena</td>
            <td>+917017339221</td>
            <td>0</td>
            <td>
                <button className="patient_register_btn">Payment History</button>
            </td>
        </tr>
    );
}
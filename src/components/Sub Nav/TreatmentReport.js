
export default function TreatmentReport() {
    return (
        <section className="treatment_section">
            <div className="treatment_history">
                <div className="treatment_heading">
                    <h1>Treatment History</h1>
                </div>
                <div className="date_filter">
                    <form>
                        <div className="filter_box">
                            <div className="filter_fields">
                                <input type="date" className="filter_field" />
                                <h5>To</h5>
                                <input type="date" className="filter_field" />
                            </div>
                            <button type="submit" className="treatment_date_submit_btn">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="appointment_table">
                    <table>
                        <thead>
                            <tr className="table_header">
                                <th>Doctor ID</th>
                                <th>Doctor Name</th>
                                <th>Number Of Patient Treated</th>
                                <th>Number Of Patient Treated</th>
                            </tr>
                        </thead>

                        <tbody>
                           <TableRow/>
                           <TableRow/>
                           <TableRow/>
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
            <td>1234</td>
            <td>Arpit Saxena</td>
            <td>20</td>
            <td>
                <button className="details_btn">Details</button>
            </td>
        </tr>
    );
}
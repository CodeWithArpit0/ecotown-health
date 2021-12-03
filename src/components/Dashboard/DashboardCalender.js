import { useState } from "react";
import Calendar from "react-calendar";

export default function DashboardCalender() {
    const [value, onChange] = useState(new Date());
    let today = new Date().toLocaleDateString();
    return (
        <section className="calender_revenu_section">
            <div className="main_container">
                <Calendar onChange={onChange}
                    value={value} className="calender" />
                <div className="revenue_container">
                    <div className="date">
                        <p>{today}</p>
                    </div>
                    <div className="revenue">
                        <div className="income">
                            <p>Income : 0.00</p>
                        </div>
                        <div className="income">
                            <p>Expense : 0.00</p>
                        </div>
                        <div className="income">
                            <p>Appointment : 0</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
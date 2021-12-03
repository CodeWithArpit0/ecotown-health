import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Calender() {
    const [value, onChange] = useState(new Date());

    return (
        <section className="calender_section">
            <div className="calender_container">
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </div>

            <div className="add_appointment">
                <div className="appointment_list">
                    <h1> You don't have any appointment</h1>
                </div>
                <button className="campaign_add_btn">
                    <AiOutlinePlusCircle className="btn_icon" />
                    Add Appointment
                </button>
            </div>
        </section>
    );
}
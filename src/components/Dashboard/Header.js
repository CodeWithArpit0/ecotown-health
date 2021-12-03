import { NavLink } from "react-router-dom";
import {
    BsPerson,
    GiMedicines,
    FiUsers, ImLab, BiPlusMedical, BiNotepad,
    GiReceiveMoney, BsClipboardPlus,
} from "../icons";
import LineChart from "./LineChart";

export default function Header() {

    return (
        <header className="header">

            <section className="user_panel">
                <div className="cards_container">
                    <div className="card_group">
                        <Card icon={<BsPerson />} heading="doctors" cardTitle="Doctors" description="4 doctors are available" cardClass="card1" path="/doctors"/>
                        <Card icon={<GiMedicines />} heading="medicinie" cardTitle="Medicines" description="Checkout" cardClass="card2" path="/doctors"/>
                        <Card icon={<FiUsers />} heading="patients" cardTitle="Patients" description="Total Patients : 14" cardClass="card3" path="/doctors"/>
                        <Card icon={<ImLab />} heading="lab reports" cardTitle="Lab Reports" description="Total Patients : 14" cardClass="card4" path="/doctors"/>
                    </div>

                    <div className="card_group">
                        <Card icon={<BiPlusMedical />} heading="case history" cardTitle="Case History" description="0" cardClass="card1" path="/doctors"/>
                        <Card icon={<GiReceiveMoney />} heading="Payment" cardTitle="Payment Invoice" description="0" cardClass="card2" path="/doctors"/>
                        <Card icon={<BsClipboardPlus />} heading="Appointments" cardTitle="Appointments" description="0" cardClass="card3" path="/doctors"/>
                        <Card icon={<BiNotepad />} heading="Documents" cardTitle="Document" description="0" cardClass="card4" path="/doctors"/>
                    </div>
                </div>
            </section>

            {/*<LineChart/>*/}
            <LineChart/>
        </header>
    );
}

function Card({ icon, heading, cardTitle, description, cardClass, path }) {
    return (
        <NavLink to={path} className="card_link">
            <div className="card" title={cardTitle}>
                <div className={`card_icon ${cardClass}`}>
                    {icon}
                </div>

                <div className="card_options">
                    <h4>{heading}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </NavLink>
    );
}

import { NavLink } from "react-router-dom";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Campaigns() {
    return (
        <section className="campaigns_section">
            <div className="campaign_component">
                <div className="campaign_heading">
                    <div className="campaign_logo">
                        <BiBriefcaseAlt2 className="campaign_icon" />
                    </div>
                    <h1>add campaign</h1>
                </div>

                <div className="add_campaign">
                    <div className="add_campaign_btn">
                        <AiOutlinePlusCircle className="add_btn_icon" />
                        <h1> add campaign </h1>
                        <NavLink to="/campaign">
                            <button className="campaign_btn" title="Add campaign">add campaign</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
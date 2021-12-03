import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Campaign() {
    return (
        <section className="campaign_section">
            <div className="campaign_container">
                <div className="campaign_heading">
                    <AiOutlinePlusCircle className="campaign_heading_icon" />
                    <h1>Add Campaign</h1>
                </div>
                <form>
                    <div className="campaign_form">
                        <div className="field_group">
                            <Field placeholder="Campaign Title" type="text" />
                            <Field placeholder="Campaign SubTitle" type="text" />
                        </div>
                        <textarea placeholder="Campaign Description" className="campaign_desciption"></textarea>
                        <div className="field_group">
                            <Field placeholder="Deadline" type="date" />
                            <div className="campaign_image_upload">
                                <input type="file" id="campaign_image" hidden />
                                <label for="campaign_image" className="campaign_upload_btn">Upload Campaign Photo</label>
                            </div>
                        </div>
                        <textarea placeholder="Campaign Conditions" className="campaign_conditions"></textarea>
                        <div style={{ width: 100 + "%", textAlign: "end" }}>
                            <button type="submit">Create Campaign</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

function Field({ placeholder, type }) {
    return (
        <div className="campaign_field">
            <input type={type} placeholder={placeholder} />
        </div>
    );
}
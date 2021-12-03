import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { BiHomeSmile, BiMenu, BsCheck2All, RiStockLine, AiOutlinePlus, GiPayMoney, MdPayment, MdOutlinePayments, VscServerProcess, GiTakeMyMoney, RiUser6Fill, FaUserNurse, FaHandHoldingMedical, MdOutlineUpcoming, BsFileEarmarkMedical, MdOutlineHolidayVillage, FaUserShield, GiReceiveMoney, MdHistory, ImLab, GiMedicines, MdOutlineLocalPharmacy, AiOutlineSchedule, AiOutlineCodeSandbox, FaUsers, FiUsers, AiOutlineCalendar, BsFillCameraVideoFill, AiOutlineUser, AiOutlinePhone, BsPerson, BiNotepad } from "./icons";

function Header() {
    function toggleMenus(ID) {
        let menu = document.getElementById(ID);
        let menuClass = menu.classList[1];
        if (menuClass === "show") {
            menu.classList.remove("show");
            menu.classList.add("hide");
        }
        else if (menuClass === "hide") {
            menu.classList.remove("hide");
            menu.classList.add("show");
        }
    }
    return (
        <section className="navbar">

            {/* ****** Main Menu ****** */}
            <div className="main_nav">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h2>eco<span>town</span> health</h2>
                </div>

                <div className="navbar_options hide" id="main_menu">
                    <ul>
                        <HeaderOption navIcon={<BiHomeSmile className="nav_icon" />} title="Dashboard" path="/" activeClass="active_opiton" />
                        <HeaderOption navIcon={<AiOutlineCalendar className="nav_icon" />} title="Calender" path="/calender" />
                        <HeaderOption navIcon={<BsFillCameraVideoFill className="nav_icon" />} title="Media" path="/media" />
                        <HeaderOption navIcon={<AiOutlineUser className="nav_icon" />} title="Profile" path="/profile" />
                        <HeaderOption navIcon={<FaUsers className="nav_icon" />} title="About Us" path="/about" />
                        <HeaderOption navIcon={<AiOutlinePhone className="nav_icon" />} title="Contact Us" path="/contact" />
                    </ul>
                </div>
                <button className="toggle_menu_btn" title="Show Menu" onClick={()=>toggleMenus("main_menu")}><BiMenu /></button>
            </div>

            {/* ****** Sub Menu ****** */}
            <div className="sub_nav_container">
                <div className="sub_nav">
                    <button className="sub_menu_btn" onClick={()=>toggleMenus("sub_menu")}>Menu</button>
                    <ul className="nav_list hide" id="sub_menu">
                        <li className="nav_option">
                            <BsPerson className="label_icon" />
                            <label className="nav_label">Doctor</label>
                            <ul className="dropdown_list">
                                <li>
                                    <div className="dropdown">
                                        <NavOption navIcon={<BsPerson className="sub_nav_icon" />} title="Available Doctors" path="/doctors" />
                                        <NavOption navIcon={<MdHistory className="sub_nav_icon" />} title="Treatment History" path="/doctors/treatmentReport" />
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav_option">
                            <FiUsers className="label_icon" />
                            <label className="nav_label"> Patients</label>
                            <ul className="dropdown_list">
                                <li>
                                    <div className="dropdown">
                                        <NavOption navIcon={<BsPerson className="sub_nav_icon" />} title="Patient List" path="/patients" />
                                        <NavOption navIcon={<GiReceiveMoney className="sub_nav_icon" />} title="Payments" path="/patients/patient-payment" />
                                        <NavOption navIcon={<FaUserShield className="sub_nav_icon" />} title="Cash Manager" path="/doctors" />
                                        <NavOption navIcon={<BiNotepad className="sub_nav_icon" />} title="Documents" path="/doctors" />
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav_option">
                            <AiOutlineSchedule className="label_icon" />
                            <label className="nav_label">Schedule</label>
                            <ul className="dropdown_list">
                                <li>
                                    <div className="dropdown">
                                        <NavOption navIcon={<AiOutlineSchedule className="sub_nav_icon" />} title="All Schedule" path="/doctors" />
                                        <NavOption navIcon={<MdOutlineHolidayVillage className="sub_nav_icon" />} title="Holidays" path="/doctors" />
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav_option">
                            <BiNotepad className="label_icon" />
                            <label className="nav_label">Apppointment</label>
                            <ul className="dropdown_list">
                                <li>
                                    <div className="dropdown">
                                        <NavOption navIcon={<BsCheck2All className="sub_nav_icon" />} title="All" path="/doctors" />
                                        <NavOption navIcon={<MdOutlineHolidayVillage className="sub_nav_icon" />} title="Add" path="/doctors" />
                                        <NavOption navIcon={<AiOutlineSchedule className="sub_nav_icon" />} title="Todays" path="/doctors" />
                                        <NavOption navIcon={<MdOutlineUpcoming className="sub_nav_icon" />} title="Upcoming" path="/doctors" />
                                        <NavOption navIcon={<AiOutlineSchedule className="sub_nav_icon" />} title="Calender" path="/calender" />
                                        <NavOption navIcon={<FaHandHoldingMedical className="sub_nav_icon" />} title="Request" path="/doctors" />
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav_option">
                            <AiOutlineCodeSandbox className="label_icon" />
                            <label className="nav_label">Human Resources</label>
                            <ul className="dropdown_list">
                                <li>
                                    <div className="dropdown">
                                        <NavOption navIcon={<FaUserNurse className="sub_nav_icon" />} title="Nurse" path="/doctors" />
                                        <NavOption navIcon={<RiUser6Fill className="sub_nav_icon" />} title="Pharmacist" path="/doctors" />
                                        <NavOption navIcon={<RiUser6Fill className="sub_nav_icon" />} title="Laboratorist" path="/doctors" />
                                        <NavOption navIcon={<RiUser6Fill className="sub_nav_icon" />} title="Accountant" path="/doctors" />
                                        <NavOption navIcon={<RiUser6Fill className="sub_nav_icon" />} title="Raceptionist" path="/doctors" />
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav_option">
                            <AiOutlineCodeSandbox className="label_icon" />
                            <label className="nav_label">Financial Activitie</label>
                            <ul className="dropdown_list">
                                <li>
                                    <div className="dropdown">
                                        <NavOption navIcon={<GiReceiveMoney className="sub_nav_icon" />} title="Payments" path="/doctors" />
                                        <NavOption navIcon={<GiTakeMyMoney className="sub_nav_icon" />} title="Add Payment" path="/doctors" />
                                        <NavOption navIcon={<VscServerProcess className="sub_nav_icon" />} title="Payment Procedures" path="/doctors" />
                                        <NavOption navIcon={<GiPayMoney className="sub_nav_icon" />} title="Expense" path="/doctors" />
                                        <NavOption navIcon={<MdOutlinePayments className="sub_nav_icon" />} title="Add Expense" path="/doctors" />
                                        <NavOption navIcon={<MdPayment className="sub_nav_icon" />} title="Expense Categories" path="/doctors" />
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav_option">
                            <ImLab className="label_icon" />
                            <label className="nav_label">Lab Tests</label>
                            <ul className="dropdown_list">
                                <li>
                                    <div className="dropdown">
                                        <NavOption navIcon={<BiNotepad className="sub_nav_icon" />} title="Lab Reports" path="/doctors" />
                                        <NavOption navIcon={<AiOutlinePlus className="sub_nav_icon" />} title="Add Lab Report" path="/doctors" />
                                        <NavOption navIcon={<VscServerProcess className="sub_nav_icon" />} title="Template" path="/doctors" />
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav_option">
                            <GiMedicines className="label_icon" />
                            <label className="nav_label">Medicine</label>
                            <ul className="dropdown_list">
                                <li>
                                    <div className="dropdown">
                                        <NavOption navIcon={<BiNotepad className="sub_nav_icon" />} title="Medicine List" path="/doctors" />
                                        <NavOption navIcon={<AiOutlinePlus className="sub_nav_icon" />} title="Add Medicine" path="/doctors" />
                                        <NavOption navIcon={<MdPayment className="sub_nav_icon" />} title="Medicine Category" path="/doctors" />
                                        <NavOption navIcon={<AiOutlinePlus className="sub_nav_icon" />} title="Add Category" path="/doctors" />
                                        <NavOption navIcon={<RiStockLine className="sub_nav_icon" />} title="Medicine Stock Alert" path="/doctors" />
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav_option">
                            <MdOutlineLocalPharmacy className="label_icon" />
                            <label className="nav_label">Pharmacy</label>
                            <ul className="dropdown_list">
                                <li>
                                    <div className="dropdown">
                                        <NavOption navIcon={<AiOutlinePlus className="sub_nav_icon" />} title="Sales" path="/doctors" />
                                        <NavOption navIcon={<MdPayment className="sub_nav_icon" />} title="Add New Sale" path="/doctors" />
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav_option">
                            <BsFileEarmarkMedical className="label_icon" />
                            <label className="nav_label">Report</label>
                            <ul className="dropdown_list">
                                <li>
                                    <div className="dropdown">
                                        <NavOption navIcon={<BiNotepad className="sub_nav_icon" />} title="Financial Report" path="/doctors" />
                                        <NavOption navIcon={<BiNotepad className="sub_nav_icon" />} title="Usear Activity Report" path="/doctors" />
                                        <NavOption navIcon={<BiNotepad className="sub_nav_icon" />} title="Doctors Commission" path="/doctors" />
                                        <NavOption navIcon={<BiNotepad className="sub_nav_icon" />} title="Monthly Sales" path="/doctors" />
                                        <NavOption navIcon={<BiNotepad className="sub_nav_icon" />} title="Daily Sales" path="/doctors" />
                                        <NavOption navIcon={<BiNotepad className="sub_nav_icon" />} title="Monthly Expense" path="/doctors" />
                                        <NavOption navIcon={<BiNotepad className="sub_nav_icon" />} title="Daily Expense" path="/doctors" />
                                        <NavOption navIcon={<BiNotepad className="sub_nav_icon" />} title="Birth Reports" path="/doctors" />
                                        <NavOption navIcon={<BiNotepad className="sub_nav_icon" />} title="Operation Report" path="/doctors" />
                                        <NavOption navIcon={<BiNotepad className="sub_nav_icon" />} title="Expire Report" path="/doctors" />
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

function HeaderOption({ navIcon, title, path }) {
    return (
        <li>
            <NavLink to={path} className={`nav_link`}>
                {navIcon}
                <p>{title}</p>
            </NavLink>
        </li >
    );
}


function NavOption({ navIcon, title, path, activeClass }) {
    return (
        <NavLink to={path} className="sub_nav_link">
            {navIcon}
            <p>{title}</p>
        </NavLink>
    );
}

export default Header;
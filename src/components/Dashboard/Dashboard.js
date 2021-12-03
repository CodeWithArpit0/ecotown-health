import Campaigns from "./Campaigns";
import Header from "./Header";
import Calender from "./DashboardCalender";

export default function Home() {
    return (
        <>
            {/* User options */}
            <section className="home_section">
                <Header/>
                <Calender/>
                <Campaigns/>
            </section>
        </>
    );
}
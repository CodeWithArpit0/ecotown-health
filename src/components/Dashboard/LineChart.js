import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
export default function LineChart() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Income",
                data: [1],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgb(16, 192, 16)",
                borderWidth: 1,
            },
            {
                label: "Expense",
                data: [0],
                fill: true,
                borderColor: "#ff0000",
                borderWidth: 1,
            },
        ],
        options: {
            maintainAspectRatio: false,
        }
    };
    return (
        <section className="chart_section">
            <div className="chart">
                <Line data={data} />
            </div>
        </section>
    );
}
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Percentage of feature impact',
    },
  },
};

const labels = ['Disponsable income', 'Arrears', 'Last year arrears', 'Active EMIs', 'Loan duration years']
const values = [14.91, 10.67, 8.94, 4.78, 4.76]

export const data = {
  labels,
  datasets: [
    {
        data: values.map(value => value),
        borderColor: 'rgb(132, 99, 255)',
        backgroundColor: 'rgba(132, 99, 255, 0.5)'
    }
  ],
};

const FeatureChart = () => {
    return <Bar options={options} data={data} />;
}

export default FeatureChart;
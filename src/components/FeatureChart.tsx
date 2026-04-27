import React from 'react';
import { useTheme } from '../features/ThemeContext';
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
import { color } from 'chart.js/helpers';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const FeatureChart: React.FC = () => {
    const { theme } = useTheme();

    const options = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 0,
                borderRadius: 5
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                  color: theme === 'light' ? 'black' : 'white',
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    color: theme === 'light' ? 'rgb(75, 86, 102)' : 'white',
                },
                grid: {
                  color: '#66666630'
                }
            },
            x: {
                ticks: {
                    color: theme === 'light' ? 'rgb(75, 86, 102)' : 'white',
                },
                grid: {
                  color: '#66666630'
                }
            }
        }
      };

      const labels = [
          'Disponsable income',
          'Arrears',
          'Last year arrears',
          'Active EMIs',
          'Loan duration years',
          'Loan amount',
          'Working experience'
      ];

      const values = [
          14.91,
          10.67,
          8.94,
          4.78,
          4.76,
          4.63,
          4.62
      ];

      const data = {
          labels,
          datasets: [
            {
                label: '% of impact',
                data: values.map(value => value),
                borderColor: 'rgb(132, 99, 255)',
                backgroundColor: 'rgba(132, 99, 255, 0.5)'
            }
          ],
      };

    return <Bar options={options} data={data} />;
}

export default FeatureChart;
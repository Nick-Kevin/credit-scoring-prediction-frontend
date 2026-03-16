import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale } from "chart.js";

ChartJS.register(annotationPlugin, ArcElement, Tooltip, Legend, LinearScale);

const GaugeChart: React.FC = (): React.JSX.Element => {
    const [currentValue, setCurrentValue] = useState<number>(0);
    const VALUE: number = 45;

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentValue(VALUE);
        }, 100)
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <Doughnut
                data={{
                    datasets: [{
                        data: [currentValue, 100-currentValue],
                        backgroundColor: ['#3b82f6', 'rgb(234, 234, 234)'],
                        borderWidth: 0,
                        borderRadius: [
                            { outerStart: 23, innerStart: 23 },
                            { outerEnd: 23, innerEnd: 23 }
                        ],
                    }]
                }}
                options={{
                    aspectRatio: 2,
                    circumference: 180,
                    rotation: -90,
                    cutout: '80%',
                    animation: {
                        animateRotate: true,
                        animateScale: true,
                        duration: 3000,
                        easing: 'easeOutQuart',
                        delay: 15
                    },
                    scales: {
                        y: {
                            type: 'linear', // Explicitly set the type to 'linear'
                            min: 0,         // Optional: define the minimum value for the scale
                            max: 100,       // Optional: define the maximum value for the scale
                            beginAtZero: true, // Optional: force the scale to start at zero
                            display: false
                        },
                        // The 'x' axis uses a 'category' scale when labels are provided as strings (common for line/bar charts)
                        x: {
                            // For line charts where x-axis data is numeric or time-series, you might use 'linear' or 'time'
                            type: 'linear',
                            display: false
                        }
                    },
                    plugins: {
                        annotation: {
                            annotations: {
                                label: {
                                    type: 'label',
                                    content: ['Medium Risk'],
                                    font: { size: 20, family: 'system-ui, Avenir, Helvetica, Arial, sans-serif', weight: 'bolder' },
                                    color: '#3b82f6',
                                    backgroundColor: 'transparent',
                                    xScaleID: 'x',
                                    yScaleID: 'y',
                                    xValue: '50%',
                                    yValue: 10,
                                    display: true
                                }
                            }
                        }
                    }
                }}
            />
        </>
    );
};

export default GaugeChart;

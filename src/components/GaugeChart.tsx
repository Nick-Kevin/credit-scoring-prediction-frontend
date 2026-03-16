import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale } from "chart.js";

ChartJS.register(annotationPlugin, ArcElement, Tooltip, Legend, LinearScale);

type order = 'low' | 'medium' | 'high';

interface chartProps {
    result: order,
};

interface contentItems {
    color: string,
    content: string,
    value: number,
}

const GaugeChart: React.FC<chartProps> = ({ result }): React.JSX.Element => {
    const [contentItems, setContentItems] = useState<contentItems>({ color: '', content: '', value: 0});

    useEffect(() => {
        switch(result) {
            case 'low':
                setContentItems({ color: '#3dc076', content: 'Low Risk', value: 20});
                break;
            case 'medium':
                setContentItems({ color: '#3b82f6', content: 'Medium Risk', value: 50});
                break;
            case 'high':
                setContentItems({ color: '#ef4444', content: 'High Risk', value: 80});
                break;
        };
    }, [])

    return (
        <>
            <Doughnut
                data={{
                    datasets: [{
                        data: [contentItems.value, 100-contentItems.value],
                        backgroundColor: [contentItems.color, 'rgb(234, 234, 234)'],
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
                    hover: {
                        mode: undefined,
                    },
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
                        tooltip: {
                            enabled: false,
                        },
                        annotation: {
                            annotations: {
                                label: {
                                    type: 'label',
                                    content: [contentItems.content],
                                    font: { size: 20, family: 'system-ui, Avenir, Helvetica, Arial, sans-serif', weight: 'bolder' },
                                    color: contentItems.color,
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

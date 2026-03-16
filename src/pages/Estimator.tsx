import React, { useState, useEffect, type JSX} from "react";
import Form from "../components/Form";
import GaugeChart from "../components/GaugeChart";
import { BsCheck2Circle, BsArrowUpRightCircle } from "react-icons/bs";
import { GoXCircle } from "react-icons/go";

type result = 'low' | 'medium' | 'high';

interface predictionIndicator {
    content: 'Good' | 'Acceptable' | 'Risky',
    color: 'text-green-600' | 'text-blue-600' | 'text-red-600',
    backgroundColor: 'bg-green-50' | 'bg-blue-50' | 'bg-red-50',
    icon: JSX.Element,
}

const Estimator: React.FC = (): React.JSX.Element => {
    const [result, setResult] = useState<result>();
    const [indicator, setIndicator] = useState<predictionIndicator>();

    const handleSubmit = (): void => {
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 10)
        setResult('low');
    }

    useEffect(() => {
        switch(result) {
            case 'low':
                setIndicator({
                    content: 'Good',
                    color: 'text-green-600',
                    backgroundColor: 'bg-green-50',
                    icon: <BsCheck2Circle className="text-2xl" />
                });
                break;
            case 'medium':
                setIndicator({
                    content: 'Acceptable',
                    color: 'text-blue-600',
                    backgroundColor: 'bg-blue-50',
                    icon: <BsArrowUpRightCircle className="text-2xl" />
                });
                break;
            case 'high':
                setIndicator({
                    content: 'Risky',
                    color: 'text-red-600',
                    backgroundColor: 'bg-red-50',
                    icon: <GoXCircle className="text-2xl" />
                });
                break;
        };
    }, [result]);

    return (
        <>
            <section>
                <h1 className="mt-2 text-gray-900 dark:text-white text-2xl md:text-3xl">Credit Scoring Category Estimator</h1>
                <p className="mt-4 max-md:text-sm">Fill out the form and submit to let the machine learning model determine the loan eligibility</p>
            </section>
            <section className="mt-9 grid gap-5">
                <Form onSubmit={handleSubmit} />
                {/* Result */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-start shadow-lg">
                    <h2 className="text-gray-900 dark:text-white text-lg mb-3 text-center">Forecasted result</h2>
                    <div className="row-start-2 row-end-6 flex justify-center items-center">
                        {
                            result ?
                                (
                                    <div className={`dark:bg-black/50 w-full flex flex-col items-center rounded-lg py-6 ${indicator?.backgroundColor}`}>
                                        <div className="flex justify-between w-full px-32">
                                            <p>Predicted risk</p>
                                            <div className={`flex items-center gap-3 ${indicator?.color}`}>
                                                { indicator?.icon}
                                                <span>{ indicator?.content }</span>
                                            </div>
                                        </div>
                                        <div className="mx-80">
                                            <GaugeChart key={ JSON.stringify(result) } result={result} />
                                        </div>
                                    </div>
                                )
                            :
                                (
                                    <p className="text-center text-gray-400 lg:max-w-10/12 lg:mx-auto">
                                        Click on click after filling out the form to determine the risk category
                                    </p>
                                )
                        }   
                    </div>
                </div>
            </section>
        </>
    );
};

export default Estimator;

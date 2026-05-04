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
    const [result, setResult] = useState<result | null>(null);
    const [indicator, setIndicator] = useState<predictionIndicator>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = (riskLevel: number | null): void => {
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 10);

        switch(riskLevel) {
            case 0:
                setResult('low');
                break;
            case 1:
                setResult('medium');
                break;
            case 2:
                setResult('high');
                break;
            case null:
                setResult(null);
                break;
        };
        setIsLoading(false);
    };

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
                <Form onSubmit={handleSubmit} loading={() => setIsLoading(true)} />
                {/* Result */}
                <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden pt-3 xl:pt-6 text-start shadow-lg h-72 grid grid-rows-5">
                    <h2 className="row-start-1 row-end-2 text-gray-900 dark:text-white text-lg mb-3 text-center">Forecasted result</h2>
                    <div className="row-start-2 row-end-6 flex justify-center">
                        {
                            result ?
                                (
                                    <div className={`dark:bg-black/50 w-full aspect-square flex flex-col items-center rounded-t-[100%] xl:rounded-t-4xl py-6 ${indicator?.backgroundColor}`}>
                                        <div className="flex justify-between w-full px-5 md:px-16 xl:px-32">
                                            <p>Predicted risk</p>
                                            <div className={`flex items-center gap-3 ${indicator?.color}`}>
                                                { indicator?.icon}
                                                <span>{ indicator?.content }</span>
                                            </div>
                                        </div>
                                        <div className="xl:mx-80">
                                            <GaugeChart key={ JSON.stringify(result) } result={result} />
                                        </div>
                                    </div>
                                )
                            :
                                (
                                    <div className="flex items-center">
                                        <p className="text-center text-gray-400 lg:max-w-10/12 lg:mx-auto mb-10">
                                            {
                                                isLoading ?
                                                    "Loading.."
                                                :
                                                    "Click on click after filling out the form to determine the risk category"
                                            }
                                        </p>
                                    </div>
                                )
                        }   
                    </div>
                </div>
            </section>
        </>
    );
};

export default Estimator;

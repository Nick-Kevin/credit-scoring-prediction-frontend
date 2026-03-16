import React, { useState} from "react";
import Form from "../components/Form";
import GaugeChart from "../components/GaugeChart";
import { BsCheck2Circle } from "react-icons/bs";



const Estimator: React.FC = (): React.JSX.Element => {
    const [result, setResult] = useState<Boolean>(false);

    const handleSubmit = (): void => {
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 10)
        setResult(true);
    }

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
                                    <div className="bg-blue-50 dark:bg-black/50 w-full flex flex-col items-center rounded-lg py-6">
                                        <div className="flex justify-between w-full px-32">
                                            <p>Predicted risk</p>
                                            <div className="flex items-center gap-3 text-blue-600">
                                                <BsCheck2Circle className="text-2xl" />
                                                <span>Acceptable</span>
                                            </div>
                                        </div>
                                        <div className="mx-80">
                                            <GaugeChart key={ JSON.stringify(result) } />
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

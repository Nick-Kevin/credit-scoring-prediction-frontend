import React from "react";
import { LuBrain } from "react-icons/lu";
import { LuTarget } from "react-icons/lu";
import { LuChartBarDecreasing } from "react-icons/lu";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import FeatureChart from "../components/FeatureChart";

const Explanation: React.FC = () => {
    interface riskLevelItem {
        id: number,
        level: 'Low' | 'Medium' | 'High',
        label:  'Good' | 'Acceptable' | 'Risky',
        content: string,
        color: 'bg-green-600' | 'bg-blue-600' | 'bg-red-600'
    };

    const riskLevelItems: riskLevelItem[] = [
        {
            id: 0,
            level: "High",
            label: "Risky",
            content: "The loan is usually denied",
            color: "bg-red-600"
        },
        {
            id: 1,
            level: "Medium",
            label: "Acceptable",
            content: "Standard interest rate with restricted condition",
            color: "bg-blue-600"
        },
        {
            id: 2,
            level: "Low",
            label: "Good",
            content: "Better available rate",
            color: "bg-green-600"
        }
    ];

    return (
        <>
            <section className="flex flex-col items-center gap-5">
                <LuBrain className="text-5xl text-blue-600" />
                <h1 className="text-gray-900 dark:text-gray-50 text-3xl md:text-4xl">Data and AI model explanation</h1>
                <p className="md:max-w-10/12 xl:max-w-7/12 leading-tight md:leading-relaxed md:text-xl">
                    Get to know the evaluation pattern that estimates the loan risk
                </p>
            </section>
            <section className="mt-14 max-w-5xl mx-auto">
                <div className="explanation-card">
                    <div className="w-min p-2 xl:p-3 rounded-lg bg-blue-100 col-start-1 col-end-2">
                        <LuTarget className="text-blue-600 text-xl md:text-3xl" />
                    </div>
                    <h2 className="text-gray-900 dark:text-white xl:text-xl col-start-3 md:col-start-2 col-end-12">Overview</h2>
                    <p className="max-md:text-sm max-md:col-start-1 max-md:col-end-12 md:col-start-2 md:col-end-12 max-md:mt-5">
                        Our credit scoring AI model has been trained with a private dataset to perform a classification task which means
                        it predicts the potential risk level of a loan. The risk level can be low, medium, or high, depending on the data
                        submitted by users.
                        <span className="block mt-5">We have trained several machine learning models to forecast the avalability of loan application but the only best
                        performing model is selected to be deployment on this lateform.</span>
                    </p>
                </div>
                <div className="explanation-card">
                    <div className="w-min p-2 xl:p-3 rounded-lg bg-green-100 col-start-1 col-end-2">
                        <LuChartBarDecreasing className="text-green-600 text-xl md:text-3xl" />
                    </div>
                    <h2 className="text-gray-900 dark:text-white xl:text-xl col-start-3 md:col-start-2 col-end-12">
                        Feature impact
                    </h2>
                    <p className="max-md:col-start-1 max-md:col-end-12 md:col-start-2 md:col-end-12 max-md:mt-5 md:mb-5 max-md:text-sm">
                        Some features are more impactful than others. Check the 7 most impactful features on the visualization below.
                        <span className="block md:hidden text-black dark:text-white text-xs mt-3">Click on bars to see details.</span>
                    </p>
                    <div className="max-md:col-start-1 max-md:col-end-12 md:col-start-2 md:col-end-12 max-md:mt-5">
                        <FeatureChart />
                    </div>
                </div>
                <div className="explanation-card">
                    <div className="w-min p-2 xl:p-3 rounded-lg bg-yellow-100 col-start-1 col-end-2">
                        <AiOutlineExclamationCircle className="text-yellow-600 text-xl md:text-3xl" />
                    </div>
                    <h2 className="text-gray-900 dark:text-white xl:text-xl col-start-3 md:col-start-2 col-end-12">Risk classes interpretation</h2>
                    <div className="max-md:text-sm max-md:col-start-1 max-md:col-end-12 md:col-start-2 md:col-end-12 max-md:mt-5 flex flex-col gap-5">
                        {
                            riskLevelItems.map((risk) => (
                                <div key={risk.id} className="md:flex max-md:grid max-md:grid-cols-7 max-md:gap-x-3 md:gap-5 items-center">
                                    <div className={`${risk.color} md:w-32 py-2 rounded max-md:col-start-1 max-md:col-end-3`}>
                                        <p className="text-white text-center">{risk.level}</p>
                                    </div>
                                    <div className="max-md:col-start-3 max-md:col-end-8">
                                        <p className="text-black dark:text-white">{risk.label}</p>
                                        <p className="text-sm">{risk.content}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Explanation;

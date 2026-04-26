import React from "react";
import { LuBrain } from "react-icons/lu";
import { LuTarget } from "react-icons/lu";

const Explanation: React.FC = () => {
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
                <div className="grid grid-cols-11 md:max-lg:gap-x-12 relative z-0 p-6 xl:p-9 shadow-xl hover:shadow-2xl bg-white dark:bg-gray-900 text-start rounded-xl group transition-all ease-out cursor-pointer">
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
            </section>
        </>
    );
};

export default Explanation;

import React from "react";

const Estimator: React.FC = () => {
    return (
        <>
            <section>
                <h1 className="mt-2 text-gray-900 dark:text-white text-2xl md:text-3xl">Credit Scoring Category Estimator</h1>
                <p className="mt-4 max-md:text-sm">Fill out the form and submit to let the machine learning model determine the loan eligibility</p>
            </section>
            <section className="mt-9 grid lg:grid-cols-2 gap-5">
                {/* Form */}
                <form className="bg-white dark:bg-gray-900 rounded-xl p-6 text-start shadow-lg">
                    <h2 className="text-gray-900 dark:text-white text-lg mb-3">Required information</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex flex-col">
                            <label htmlFor="personal-items" className="text-sm mb-2">Total personal items</label>
                            <input name="personal-items" type="number" min="0" defaultValue={5} className="border border-gray-300 p-3.5 py-1.5 rounded-lg focus:outline focus:outline-blue-600" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="asset-quality" className="text-sm mb-2">Asset Quality</label>
                            <input name="asset-quality" type="number" min="0" defaultValue={1} className="border border-gray-300 p-3.5 py-1.5 rounded-lg focus:outline focus:outline-blue-600" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="arrear-score" className="text-sm mb-2">Arrears risk score</label>
                            <input name="arrear-score" type="number" step="0.1" min="0" defaultValue={1} className="border border-gray-300 p-3.5 py-1.5 rounded-lg focus:outline focus:outline-blue-600" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="loan-account" className="text-sm mb-2">Total loan-account</label>
                            <input name="loan-account" type="number" min="0" defaultValue={10} className="border border-gray-300 p-3.5 py-1.5 rounded-lg focus:outline focus:outline-blue-600" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="credit-diversity" className="text-sm mb-2">Credit diversity</label>
                            <input name="credit-diversity" type="number" min="0" defaultValue={8} className="border border-gray-300 p-3.5 py-1.5 rounded-lg focus:outline focus:outline-blue-600" />
                        </div>
                    </div>
                    <button type="submit" className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all mt-6 w-full py-2.5">
                        Predict the risk category
                    </button>
                </form>
                {/* Result */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-start shadow-lg grid grid-rows-5">
                    <h2 className="text-gray-900 dark:text-white text-lg mb-3 row-span-1">Forecasted result</h2>
                    <div className="row-start-2 row-end-6 flex items-center">
                        <p className="text-center text-gray-400 lg:max-w-10/12 lg:mx-auto">Click on click after filling out the form to determine the risk category</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Estimator;

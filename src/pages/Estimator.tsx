import React, { useState } from "react";
import Input from "../components/Input";

const Estimator: React.FC = (): React.JSX.Element => {
    const [persoItems, setPersoItems] = useState<number>(6)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        console.log("Total personal items: " + persoItems);
    };

    return (
        <>
            <section>
                <h1 className="mt-2 text-gray-900 dark:text-white text-2xl md:text-3xl">Credit Scoring Category Estimator</h1>
                <p className="mt-4 max-md:text-sm">Fill out the form and submit to let the machine learning model determine the loan eligibility</p>
            </section>
            <section className="mt-9 grid gap-5">
                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-xl p-6 text-start shadow-lg flex flex-col items-center">
                    <h2 className="text-gray-900 dark:text-white text-lg mb-3">Required information</h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
                        <Input id="personal-items" label="Total personal items" type="number" defaultValue={persoItems} min={0} onChange={(e) => setPersoItems(Number(e.target.value))} />
                        <Input id="asset-quality" label="Asset Quality" type="number" defaultValue={1} min={0} />
                        <Input id="arrear-score" label="Arrears risk score" type="number" defaultValue={1} min={0} step={0.1} />
                        <Input id="loan-account" label="Total loan-account" type="number" defaultValue={10} min={0} />
                        <Input id="credit-diversity" label="Credit diversity" type="number" defaultValue={8} min={0} />
                        <Input id="credit-prod-count" label="Credit product count" type="number" defaultValue={5} min={0} />
                        <Input id="credit-activity" label="Credit activity score" type="number" defaultValue={2} min={0} step={0.1} />
                        <Input id="age" label="Age" type="number" defaultValue={30} min={18} max={150} />
                        <Input id="edu-lvl" label="Education level" type="number" defaultValue={8} min={0} />
                        <Input id="loan-duration" label="Loan duration years" type="number" defaultValue={1} min={0} />
                        <Input id="loan-amount" label="Loan amount" type="number" defaultValue={5000} min={500} />
                        <Input id="exp" label="Working experience" type="number" defaultValue={2} min={0} step={0.1} />
                        <Input id="job-title" label="Current job title" type="number" defaultValue={1} min={0} max={10} />
                        <Input id="company-duration" label="Duration current company" type="number" defaultValue={2} min={0} step={0.1} />
                        <Input id="industry" label="Industry" type="number" defaultValue={1} min={0} />
                        <Input id="emp-secondary" label="Employment secondary type" type="number" defaultValue={2} min={0} />
                        <Input id="income" label="Disponsable income" type="number" defaultValue={2000} min={500} />
                        <Input id="marital-sts" label="Marital status" type="number" defaultValue={1} min={0} />
                        <Input id="write-offs" label="Write offs" type="number" defaultValue={8} min={0} />
                        <Input id="arrears" label="Arrears" type="number" defaultValue={5} min={0} />
                        <Input id="last-yrs-arr" label="Last year arrears" type="number" defaultValue={10} min={0} />
                        <Input id="credit-card-history-hire-purchase" label="Credit card history hire purchase" type="number" defaultValue={1} min={0} step={0.1} />
                        <Input id="credit-utilisation" label="Credit utilisation" type="number" defaultValue={2} min={0} />
                        <Input id="credit-cards-last-year" label="Credit cards last year" type="number" defaultValue={5} min={0} />
                        <Input id="hire-purchase-last-year" label="Hire purchase last year" type="number" defaultValue={2} min={0} />
                        <Input id="loans-last-year" label="Loans last year" type="number" defaultValue={5} min={0} />
                        <Input id="debt-ratio" label="Debt ratio" type="number" defaultValue={5} min={0} />
                        <Input id="active-emis" label="Active EMIs" type="number" defaultValue={8} min={0} step={0.1} />
                    </div>
                    <button type="submit" className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all mt-6 w-full lg:max-w-60 py-2.5">
                        Predict the risk category
                    </button>
                </form>
                {/* Result */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-start shadow-lg grid grid-rows-5">
                    <h2 className="text-gray-900 dark:text-white text-lg mb-3 row-span-1 text-center">Forecasted result</h2>
                    <div className="row-start-2 row-end-6 flex items-center">
                        <p className="text-center text-gray-400 lg:max-w-10/12 lg:mx-auto">Click on click after filling out the form to determine the risk category</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Estimator;

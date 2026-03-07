import React, { useState } from "react";
import Input from "../components/Input";

interface FormData {
    persoItems: number,
    assetQuality: number,
    arrearRiskScore: number,
    loanAccount: number,
    creditDiversity: number,
    productCount: number,
    activityScore: number,
    age: number,
    educationLevel: number,
    loanDuration: number,
    loanAmount: number,
    workingExperience: number,
    jobTitle: number,
    durationCompany: number,
    industry: number,
    secondaryType: number,
    income: number,
    maritalStatus: number,
    writesOff: number,
    arrears: number,
    lastArrears: number,
    cardHistory: number,
    creditUtilisation: number,
    creditLastYear: number,
    purchaseLastYear: number,
    loanLastYear: number,
    debtRatio: number,
    emis: number
}

const Estimator: React.FC = (): React.JSX.Element => {
    const [formData, setFormData] = useState<FormData>({
        persoItems: 6,
        assetQuality: 1,
        arrearRiskScore: 1,
        loanAccount: 10,
        creditDiversity: 8,
        productCount: 5,
        activityScore: 2,
        age: 30,
        educationLevel: 8,
        loanDuration: 1,
        loanAmount: 5000,
        workingExperience: 2,
        jobTitle: 1,
        durationCompany: 2,
        industry: 1,
        secondaryType: 2,
        income: 2000,
        maritalStatus: 1,
        writesOff: 8,
        arrears: 5,
        lastArrears: 10,
        cardHistory: 1,
        creditUtilisation: 2,
        creditLastYear: 2,
        purchaseLastYear: 2,
        loanLastYear: 1000,
        debtRatio: 5,
        emis: 5
    })
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(formData);
        // onSubmit(formData)
    };

    const updateField = (field: keyof FormData, value: number): void => {
        setFormData(prev => ({ ...prev, [field]: value }));
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
                        <Input id="personal-items" label="Total personal items" type="number" defaultValue={formData.persoItems} min={0} onChange={(e) => updateField('persoItems', Number(e.target.value))} />
                        <Input id="asset-quality" label="Asset Quality" type="number" defaultValue={formData.assetQuality} min={0} onChange={(e) => updateField('assetQuality', Number(e.target.value))} />
                        <Input id="arrear-score" label="Arrears risk score" type="number" defaultValue={formData.arrearRiskScore} min={0} step={0.1} onChange={(e) => updateField('arrearRiskScore', Number(e.target.value))} />
                        <Input id="loan-account" label="Total loan-account" type="number" defaultValue={formData.loanAccount} min={0} onChange={(e) => updateField('loanAccount', Number(e.target.value))} />
                        <Input id="credit-diversity" label="Credit diversity" type="number" defaultValue={formData.creditDiversity} min={0} onChange={(e) => updateField('creditDiversity', Number(e.target.value))} />
                        <Input id="credit-prod-count" label="Credit product count" type="number" defaultValue={formData.productCount} min={0} onChange={(e) => updateField('productCount', Number(e.target.value))} />
                        <Input id="credit-activity" label="Credit activity score" type="number" defaultValue={formData.activityScore} min={0} step={0.1} onChange={(e) => updateField('activityScore', Number(e.target.value))} />
                        <Input id="age" label="Age" type="number" defaultValue={formData.age} min={18} max={150} onChange={(e) => updateField('age', Number(e.target.value))} />
                        <Input id="edu-lvl" label="Education level" type="number" defaultValue={formData.educationLevel} min={0} onChange={(e) => updateField('educationLevel', Number(e.target.value))} />
                        <Input id="loan-duration" label="Loan duration years" type="number" defaultValue={formData.loanDuration} min={0} onChange={(e) => updateField('loanDuration', Number(e.target.value))} />
                        <Input id="loan-amount" label="Loan amount" type="number" defaultValue={formData.loanAmount} min={500} onChange={(e) => updateField('loanAmount', Number(e.target.value))} />
                        <Input id="exp" label="Working experience" type="number" defaultValue={formData.workingExperience} min={0} step={0.1} onChange={(e) => updateField('workingExperience', Number(e.target.value))} />
                        <Input id="job-title" label="Current job title" type="number" defaultValue={formData.jobTitle} min={0} max={10} onChange={(e) => updateField('jobTitle', Number(e.target.value))} />
                        <Input id="company-duration" label="Duration current company" type="number" defaultValue={formData.durationCompany} min={0} step={0.1} onChange={(e) => updateField('durationCompany', Number(e.target.value))} />
                        <Input id="industry" label="Industry" type="number" defaultValue={formData.industry} min={0} onChange={(e) => updateField('industry', Number(e.target.value))} />
                        <Input id="emp-secondary" label="Employment secondary type" type="number" defaultValue={formData.secondaryType} min={0} onChange={(e) => updateField('secondaryType', Number(e.target.value))} />
                        <Input id="income" label="Disponsable income" type="number" defaultValue={formData.income} min={500} onChange={(e) => updateField('income', Number(e.target.value))} />
                        <Input id="marital-sts" label="Marital status" type="number" defaultValue={formData.maritalStatus} min={0} onChange={(e) => updateField('maritalStatus', Number(e.target.value))} />
                        <Input id="write-offs" label="Write offs" type="number" defaultValue={formData.writesOff} min={0} onChange={(e) => updateField('writesOff', Number(e.target.value))} />
                        <Input id="arrears" label="Arrears" type="number" defaultValue={formData.arrears} min={0} onChange={(e) => updateField('arrears', Number(e.target.value))} />
                        <Input id="last-yrs-arr" label="Last year arrears" type="number" defaultValue={formData.lastArrears} min={0} onChange={(e) => updateField('lastArrears', Number(e.target.value))} />
                        <Input id="credit-card-history-hire-purchase" label="Credit card history hire purchase" type="number" defaultValue={formData.cardHistory} min={0} step={0.1} onChange={(e) => updateField('cardHistory', Number(e.target.value))} />
                        <Input id="credit-utilisation" label="Credit utilisation" type="number" defaultValue={formData.creditUtilisation} min={0} onChange={(e) => updateField('creditUtilisation', Number(e.target.value))} />
                        <Input id="credit-cards-last-year" label="Credit cards last year" type="number" defaultValue={formData.creditLastYear} min={0} onChange={(e) => updateField('creditLastYear', Number(e.target.value))} />
                        <Input id="hire-purchase-last-year" label="Hire purchase last year" type="number" defaultValue={formData.purchaseLastYear} min={0} onChange={(e) => updateField('purchaseLastYear', Number(e.target.value))} />
                        <Input id="loans-last-year" label="Loans last year" type="number" defaultValue={formData.loanLastYear} min={0} onChange={(e) => updateField('loanLastYear', Number(e.target.value))} />
                        <Input id="debt-ratio" label="Debt ratio" type="number" defaultValue={formData.debtRatio} min={0} onChange={(e) => updateField('debtRatio', Number(e.target.value))} />
                        <Input id="active-emis" label="Active EMIs" type="number" defaultValue={formData.emis} min={0} step={0.1} onChange={(e) => updateField('emis', Number(e.target.value))} />
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

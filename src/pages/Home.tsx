import React from "react";
import { useNavigate } from "react-router-dom";
import { LuBrain } from "react-icons/lu";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineShield } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";
import { HiOutlineCalculator } from "react-icons/hi2";
import { GoBook } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

const Home: React.FC = () => {
    interface FeatureItem {
        id: number,
        iconContainerClass?: string,
        icon: React.JSX.Element,
        title: string,
        content: string
    }

    interface NavItem extends FeatureItem {
        path: string,
    }

    const featureItems: FeatureItem[] = [
        {
            id: 1,
            iconContainerClass: "bg-blue-100",
            icon: <HiMiniArrowTrendingUp className="text-blue-600 text-2xl" />,
            title: "Predictive evaluation",
            content: "The risk category is evaluated based on trained machine learining algorithm"
        },
        {
            id: 2,
            iconContainerClass: "bg-green-100",
            icon: <MdOutlineShield className="text-green-600 text-2xl" />,
            title: "High accuracy",
            content: "The algorithm is carefully selected among different choices to predict for a maximum accuracy"
        },
        {
            id: 3,
            iconContainerClass: "bg-blue-100",
            icon: <IoFlashOutline className="text-blue-600 text-2xl" />,
            title:"Quick Result",
            content: "The result is available for just a few seconds"
        }
    ];

    const navItems: NavItem[] = [
        {
            id: 1,
            icon: <HiOutlineCalculator className="text-blue-600 text-3xl" />,
            title: "Predict a category",
            content: "Use our algorithm to forecast the credit category that may be a low, medium or high risk",
            path: "/estimator"
        },
        {
            id: 2,
            icon: <GoBook className="text-blue-600 text-3xl" />,
            title: "Understand the model",
            content: "Find out the details about the techniques we have used to desing and implement the machine learning model from data preprocessing to model evaluation",
            path:"/model-explanation"
        },
    ];

    const navigate = useNavigate();

    const handleNavItemClick = (link: string): void => {
        navigate(link);
    };

    return (
        <>
            <section className="flex flex-col items-center gap-5">
                <LuBrain className="text-5xl text-blue-600" />
                <h1 className="text-gray-900 dark:text-gray-50 text-4xl md:text-5xl">Credit Scoring AI</h1>
                <p className="md:max-w-10/12 xl:max-w-7/12 leading-tight md:leading-relaxed text-lg md:text-xl">Plateform using machine learning model to forecast or evaluate credit risk based on multivariate data</p>
            </section>
            <section className="mt-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
                    {
                        featureItems.map((feature) => (
                            <div key={feature.id} className="p-5 xl:p-6 shadow-xl bg-white dark:bg-gray-900 text-start rounded-xl">
                                <div className={`w-min mb-4 p-2 xl:p-3 rounded-lg ${feature.iconContainerClass}`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-gray-900 dark:text-gray-50 xl:text-xl mb-2">{feature.title}</h3>
                                <p className="max-lg:text-xs">{feature.content}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="grid lg:grid-cols-2 gap-5 mt-12">
                    {
                        navItems.map((nav) => (
                            <button
                                key={nav.id}
                                className="relative z-0 p-6 xl:p-9 shadow-xl hover:shadow-2xl bg-white dark:bg-gray-900 text-start rounded-xl group flex flex-col transition-all ease-out cursor-pointer"
                                onClick={ () => handleNavItemClick(nav.path) }
                            >
                                <div className="w-min mb-4 p-2 xl:p-3 rounded-lg bg-blue-100">
                                    {nav.icon}
                                </div>
                                <FaArrowRightLong className="absolute top-9 right-10 group-hover:right-9 text-gray-300 group-hover:text-blue-600 transition-all ease-out" />
                                <h2 className="text-gray-900 dark:text-gray-50 xl:text-2xl mb-2">{nav.title}</h2>
                                <p className="max-md:text-sm xl:text-lg">{nav.content}</p>
                            </button>
                        ))
                    }
                </div>
                <div className="mt-12 p-5 xl:p-6 bg-white/70 dark:bg-gray-900 text-start rounded-xl">
                    <h3 className="text-gray-900 dark:text-gray-50 xl:text-xl mb-2">About this demo</h3>
                    <p className="max-lg:text-xs leading-relaxed">This is a demo of a supervised machine learning project for credit scoring prediction made by two MSc Artificial Intelligence and Machine Learning students. A classification task was used to make the model predict among low, medium, and high risk. Most data preprocessing techniques were applied to a private dataset to train and evaluate several machine learning models. The best-performing model is used in this demo.</p>
                </div>
            </section>
        </>
    );
};

export default Home;

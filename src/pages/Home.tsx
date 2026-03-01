import React from "react";
import { LuBrain } from "react-icons/lu";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineShield } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";

const Home: React.FC = () => {
    interface FeatureItem {
        id: number,
        iconContainerClass: string,
        icon: React.JSX.Element,
        title: string,
        content: string
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

    return (
        <>
            <section className="flex flex-col items-center gap-5">
                <LuBrain className="text-5xl text-blue-600" />
                <h1 className="text-gray-900 dark:text-gray-50 text-4xl md:text-5xl">Credit Scoring AI</h1>
                <p className="md:max-w-9/12 xl:max-w-7/12 leading-tight md:leading-relaxed text-lg md:text-xl">Plateform using machine learning model to forecast or evaluate credit risk based on multivariate data</p>
            </section>
            <section className="mt-16">
                <div className="grid gap-5">
                    {
                        featureItems.map((feature) => (
                            <div key={feature.id} className="p-5 shadow-xl bg-white dark:bg-blue-950 text-start rounded-xl">
                                <div className={`w-min mb-4 p-2 rounded-lg ${feature.iconContainerClass}`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-sm">{feature.content}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default Home;

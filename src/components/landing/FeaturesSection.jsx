import React from 'react';
import { BarChart, DollarSign, MessageCircle, ShieldCheck } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            title: "Multi-Platform Analytics",
            description: "View Instagram, YouTube, TikTok, and LinkedIn metrics in one unified profile. Understand true reach and engagement.",
            icon: <BarChart className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
        },
        {
            title: "Budget-First Filtering",
            description: "Find influencers that fit your budget before wasting time. Filter by price range for posts, stories, and reels.",
            icon: <DollarSign className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2626"
        },
        {
            title: "Direct Communication",
            description: "Built-in messaging, file sharing, and deal management. No more lost emails or DMs.",
            icon: <MessageCircle className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=2370"
        },
        {
            title: "Verified Profiles",
            description: "Authentic metrics, no fake followers, real engagement data. We verify every influencer on our platform.",
            icon: <ShieldCheck className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2370"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bebas tracking-wide font-bold text-deep-black mb-4">
                        Everything You Need to Scale
                    </h2>
                    <p className="text-medium-gray max-w-2xl mx-auto">
                        Powerful tools designed for modern influencer marketing teams.
                    </p>
                </div>

                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-orange mb-6 shadow-lg shadow-orange-200">
                                    {feature.icon}
                                </div>
                                <h3 className="text-3xl font-bebas tracking-wide font-bold text-deep-black mb-6">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    {feature.description}
                                </p>
                                <ul className="space-y-3">
                                    {['Real-time data', 'Exportable reports', 'Team collaboration'].map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <div className="w-2 h-2 rounded-full bg-primary-orange mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                                    <div className="absolute inset-0 bg-deep-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { Network, Users, ArrowRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative bg-white overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-orange to-transparent" />
                <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-primary-orange text-sm font-medium mb-8 animate-fade-in">
                    <Network className="w-4 h-4" />
                    <span>The #1 Influencer Collaboration Platform</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bebas tracking-wide font-bold text-deep-black mb-8 leading-tight max-w-5xl mx-auto">
                    Find Your Perfect <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-orange-600">
                        Influencer Match
                    </span>
                </h1>

                <p className="text-xl text-medium-gray max-w-2xl mx-auto mb-12 leading-relaxed">
                    Connect with verified influencers across platforms. Filter by location, budget, and niche. Start collaborating in minutes with intelligent matching.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/signup">
                        <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-orange-200">
                            Get Started
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link to="/discover">
                        <Button variant="white" size="lg" className="w-full sm:w-auto">
                            <Users className="mr-2 w-5 h-5" />
                            Browse Influencers
                        </Button>
                    </Link>
                </div>

                {/* Stats Bar */}
                <div className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {[
                        { label: 'Influencers', value: '5,000+' },
                        { label: 'Campaigns', value: '10k+' },
                        { label: 'Countries', value: '50+' },
                        { label: 'Engagement', value: 'High' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-bold text-deep-black mb-1 font-mono">{stat.value}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

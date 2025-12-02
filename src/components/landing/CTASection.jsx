import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CTASection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-deep-black rounded-3xl overflow-hidden relative">
                    {/* Abstract Background */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-50" />

                    <div className="grid md:grid-cols-2 gap-0 relative z-10">
                        <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-gray-800">
                            <h3 className="text-3xl font-bebas tracking-wide font-bold text-white mb-6">
                                Looking for Influencers?
                            </h3>
                            <ul className="space-y-4 mb-8 text-gray-400">
                                <li className="flex items-center">✓ Access 5,000+ verified profiles</li>
                                <li className="flex items-center">✓ Secure payment protection</li>
                                <li className="flex items-center">✓ Detailed performance analytics</li>
                            </ul>
                            <Link to="/signup?type=brand">
                                <Button className="w-full md:w-auto">
                                    Sign Up as Brand
                                </Button>
                            </Link>
                        </div>

                        <div className="p-12 md:p-16 bg-gray-900/50">
                            <h3 className="text-3xl font-bebas tracking-wide font-bold text-white mb-6">
                                Are You an Influencer?
                            </h3>
                            <ul className="space-y-4 mb-8 text-gray-400">
                                <li className="flex items-center">✓ Connect with premium brands</li>
                                <li className="flex items-center">✓ Guaranteed payments</li>
                                <li className="flex items-center">✓ Professional media kit</li>
                            </ul>
                            <Link to="/signup?type=influencer">
                                <Button variant="white" className="w-full md:w-auto">
                                    Join as Influencer
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

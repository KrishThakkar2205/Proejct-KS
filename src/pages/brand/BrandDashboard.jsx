import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { TrendingUp, Users, MessageSquare, Heart, ArrowRight } from 'lucide-react';

const BrandDashboard = () => {
    const stats = [
        { label: 'Active Deals', value: '12', trend: '+2', icon: <TrendingUp className="text-white" />, color: 'bg-blue-500' },
        { label: 'Total Spent', value: '$45.2k', trend: '+12%', icon: <Users className="text-white" />, color: 'bg-green-500' },
        { label: 'Unread Messages', value: '5', trend: '', icon: <MessageSquare className="text-white" />, color: 'bg-primary-orange' },
        { label: 'Saved Influencers', value: '28', trend: '+4', icon: <Heart className="text-white" />, color: 'bg-purple-500' },
    ];

    const activeDeals = [
        { id: 1, influencer: 'Sarah Jenkins', campaign: 'Summer Collection Launch', status: 'In Progress', deadline: '2025-11-25', progress: 60 },
        { id: 2, influencer: 'TechReview Pro', campaign: 'Gadget Unboxing', status: 'Pending Approval', deadline: '2025-11-28', progress: 30 },
        { id: 3, influencer: 'Fitness Mike', campaign: 'Protein Shake Promo', status: 'Completed', deadline: '2025-11-20', progress: 100 },
    ];

    return (
        <div className="space-y-8">
            {/* Header - Mobile Only */}
            <div className="md:hidden">
                <h1 className="text-3xl font-bebas tracking-wide text-deep-black">Dashboard</h1>
                <p className="text-gray-600 text-sm mt-1">Overview of your brand's performance and activities</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                            <h3 className="text-3xl font-bebas tracking-wide text-deep-black">{stat.value}</h3>
                            {stat.trend && (
                                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-2 inline-block">
                                    {stat.trend} this month
                                </span>
                            )}
                        </div>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${stat.color}`}>
                            {stat.icon}
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Active Deals */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bebas tracking-wide font-bold text-deep-black">Active Deals</h2>
                        <Link to="/brand/deals">
                            <Button variant="ghost" size="sm">View All</Button>
                        </Link>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 font-medium text-gray-500">Influencer</th>
                                        <th className="px-6 py-4 font-medium text-gray-500">Campaign</th>
                                        <th className="px-6 py-4 font-medium text-gray-500">Status</th>
                                        <th className="px-6 py-4 font-medium text-gray-500">Deadline</th>
                                        <th className="px-6 py-4 font-medium text-gray-500">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {activeDeals.map((deal) => (
                                        <tr key={deal.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-deep-black">{deal.influencer}</td>
                                            <td className="px-6 py-4 text-gray-600">{deal.campaign}</td>
                                            <td className="px-6 py-4">
                                                <Badge variant={deal.status === 'Completed' ? 'success' : deal.status === 'In Progress' ? 'info' : 'warning'}>
                                                    {deal.status}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{deal.deadline}</td>
                                            <td className="px-6 py-4">
                                                <Button variant="ghost" size="sm" className="!p-0">Details</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Recommended Influencers */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bebas tracking-wide font-bold text-deep-black">Recommended</h2>
                        <Button variant="ghost" size="sm">View All</Button>
                    </div>

                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="p-4 flex items-center gap-4 hover:border-primary-orange transition-colors cursor-pointer group">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-lg font-bebas tracking-wide text-deep-black truncate group-hover:text-primary-orange transition-colors">Fashionista Jane</h4>
                                    <p className="text-xs text-gray-500 truncate">Fashion & Lifestyle • 1.2M</p>
                                </div>
                                <Button variant="secondary" size="sm" className="!px-2 !py-1">
                                    <ArrowRight size={16} />
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandDashboard;

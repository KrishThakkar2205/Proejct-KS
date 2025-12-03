import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { TrendingUp, Calendar as CalendarIcon, MessageSquare, Users, Instagram, Facebook, Youtube } from 'lucide-react';
import { MOCK_INFLUENCER_DATA } from '../../data/mockData';

const InfluencerDashboard = () => {
    const [selectedPlatform, setSelectedPlatform] = useState('instagram');
    const { profile, socialMedia, bookings, messages } = MOCK_INFLUENCER_DATA;

    const stats = [
        { label: 'Total Bookings', value: bookings.filter(b => b.status === 'confirmed').length, trend: '+2 this month', icon: <Users className="text-white" />, color: 'bg-primary-orange' },
        { label: 'Upcoming Shoots', value: bookings.filter(b => b.status === 'confirmed' && new Date(b.shootDate) > new Date()).length, trend: '', icon: <CalendarIcon className="text-white" />, color: 'bg-blue-500' },
        { label: 'Profile Views', value: '1.2k', trend: '+15% this week', icon: <TrendingUp className="text-white" />, color: 'bg-green-500' },
    ];

    const platformData = socialMedia[selectedPlatform];

    const platformIcons = {
        instagram: <Instagram size={20} />,
        facebook: <Facebook size={20} />,
        youtube: <Youtube size={20} />
    };

    const upcomingBookings = bookings
        .filter(b => b.status === 'confirmed' && new Date(b.shootDate) > new Date())
        .sort((a, b) => new Date(a.shootDate) - new Date(b.shootDate))
        .slice(0, 5);

    const recentMessages = messages.slice(0, 3);

    return (
        <div className="space-y-8">
            {/* Header - Mobile Only */}
            <div className="md:hidden">
                <h1 className="text-3xl font-bebas tracking-wide text-deep-black">Dashboard</h1>
                <p className="text-gray-600 text-sm mt-1">Welcome back, {profile.name}!</p>
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
                                    {stat.trend}
                                </span>
                            )}
                        </div>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${stat.color}`}>
                            {stat.icon}
                        </div>
                    </Card>
                ))}
            </div>

            {/* Social Media Metrics */}
            <Card className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                    <h2 className="text-xl font-bebas tracking-wide font-bold text-deep-black">Social Media Metrics</h2>
                    <div className="text-xs text-gray-500">
                        Last synced: {new Date(platformData.lastSync).toLocaleString()}
                    </div>
                </div>

                {/* Platform Selector */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {['instagram', 'facebook', 'youtube'].map((platform) => (
                        <button
                            key={platform}
                            onClick={() => setSelectedPlatform(platform)}
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${selectedPlatform === platform
                                ? 'bg-primary-orange text-white shadow-md'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {platformIcons[platform]}
                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Metrics Display */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                        <p className="text-xs text-primary-orange font-medium mb-1">
                            {selectedPlatform === 'youtube' ? 'Subscribers' : 'Followers'}
                        </p>
                        <p className="text-2xl font-bebas tracking-wide text-deep-black">
                            {(platformData.followers || platformData.subscribers)?.toLocaleString()}
                        </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                        <p className="text-xs text-blue-600 font-medium mb-1">Engagement Rate</p>
                        <p className="text-2xl font-bebas tracking-wide text-deep-black">{platformData.engagementRate}%</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                        <p className="text-xs text-green-600 font-medium mb-1">
                            {selectedPlatform === 'youtube' ? 'Avg Views' : 'Avg Likes'}
                        </p>
                        <p className="text-2xl font-bebas tracking-wide text-deep-black">
                            {(platformData.avgViews || platformData.avgLikes)?.toLocaleString()}
                        </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                        <p className="text-xs text-orange-600 font-medium mb-1">
                            {selectedPlatform === 'youtube' ? 'Avg Likes' : 'Avg Comments'}
                        </p>
                        <p className="text-2xl font-bebas tracking-wide text-deep-black">
                            {(platformData.avgLikes || platformData.avgComments)?.toLocaleString()}
                        </p>
                    </div>
                </div>

                {/* Top Performing Content */}
                <div className="mt-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Top Performing Content</h3>
                    <div className="space-y-2">
                        {(platformData.recentPosts || platformData.recentVideos)
                            ?.sort((a, b) => {
                                // Sort by engagement: likes for posts/videos, views for YouTube
                                if (selectedPlatform === 'youtube') {
                                    return (b.views || 0) - (a.views || 0);
                                }
                                return (b.likes || 0) - (a.likes || 0);
                            })
                            .map((post, index) => {
                                // Calculate engagement rate for this post
                                const engagement = selectedPlatform === 'youtube'
                                    ? ((post.likes + post.comments) / post.views * 100).toFixed(2)
                                    : ((post.likes + post.comments) / platformData.followers * 100).toFixed(2);

                                return (
                                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg gap-2 border border-orange-200">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-8 h-8 bg-primary-orange text-white rounded-full font-bold text-sm">
                                                #{index + 1}
                                            </div>
                                            <div>
                                                <span className="text-sm font-medium text-gray-800">
                                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                </span>
                                                <p className="text-xs text-gray-600">Engagement: {engagement}%</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 text-sm">
                                            {post.views && <span className="text-gray-700 font-medium">👁️ {post.views.toLocaleString()}</span>}
                                            <span className="text-gray-700 font-medium">❤️ {post.likes.toLocaleString()}</span>
                                            <span className="text-gray-700 font-medium">💬 {post.comments}</span>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </Card>


        </div>
    );
};

export default InfluencerDashboard;

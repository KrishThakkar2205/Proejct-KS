import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { Search, Calendar, DollarSign, Instagram, Youtube, Facebook, FileText, Clock, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';

const ActiveDeals = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'pending', 'in-progress', 'review'

    // Mock data for active deals
    const [deals, setDeals] = useState([
        {
            id: 1,
            influencerName: "Sarah Jenkins",
            influencerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
            platforms: ["instagram", "youtube"],
            bookingDate: "2025-11-15",
            shootDate: "2025-11-30",
            price: "$1,500",
            dealId: "DEAL-2025-001",
            status: "in-progress"
        },
        {
            id: 2,
            influencerName: "TechReview Pro",
            influencerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
            platforms: ["youtube"],
            bookingDate: "TBD",
            shootDate: "TBD",
            price: "$3,200",
            dealId: "DEAL-2025-002",
            status: "pending"
        },
        {
            id: 3,
            influencerName: "Beauty By Maya",
            influencerImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
            platforms: ["instagram", "youtube"],
            bookingDate: "2025-11-10",
            shootDate: "2025-11-25",
            price: "$2,800",
            dealId: "DEAL-2025-003",
            status: "review"
        },
        {
            id: 4,
            influencerName: "Fitness Mike",
            influencerImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200",
            platforms: ["instagram", "facebook"],
            bookingDate: "2025-11-12",
            shootDate: "2025-11-28",
            price: "$900",
            dealId: "DEAL-2025-004",
            status: "in-progress"
        },
        {
            id: 5,
            influencerName: "Elena Cooks",
            influencerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
            platforms: ["instagram", "youtube", "facebook"],
            bookingDate: "TBD",
            shootDate: "TBD",
            price: "$2,100",
            dealId: "DEAL-2025-005",
            status: "pending"
        }
    ]);

    const getPlatformIcon = (platform) => {
        switch (platform) {
            case 'instagram':
                return <Instagram size={16} className="text-pink-600" />;
            case 'youtube':
                return <Youtube size={16} className="text-red-600" />;
            case 'facebook':
                return <Facebook size={16} className="text-blue-600" />;
            default:
                return null;
        }
    };

    const formatDate = (dateString) => {
        if (dateString === 'TBD') return 'TBD';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const getStatusBadge = (status) => {
        const statusConfig = {
            pending: { label: 'Negotiating', color: 'bg-yellow-100 text-yellow-700', icon: <MessageSquare size={14} /> },
            'in-progress': { label: 'Booked', color: 'bg-blue-100 text-blue-700', icon: <Calendar size={14} /> },
            review: { label: 'Shoot Done', color: 'bg-purple-100 text-purple-700', icon: <CheckCircle size={14} /> }
        };
        return statusConfig[status] || statusConfig.pending;
    };

    // Calculate stats
    const totalActiveDeals = deals.length;
    const totalValue = deals.reduce((total, deal) => {
        const price = parseFloat(deal.price.replace(/[$,]/g, ''));
        return total + price;
    }, 0);
    const pendingDeals = deals.filter(deal => deal.status === 'pending').length;
    const inProgressDeals = deals.filter(deal => deal.status === 'in-progress').length;

    // Filter deals
    const filteredDeals = deals.filter(deal => {
        // Search filter
        const matchesSearch = deal.influencerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            deal.dealId.toLowerCase().includes(searchQuery.toLowerCase());

        // Status filter
        if (statusFilter === 'all') {
            return matchesSearch;
        }
        return matchesSearch && deal.status === statusFilter;
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDeal, setSelectedDeal] = useState(null);
    const [newStatus, setNewStatus] = useState('');

    const handleOpenModal = (deal) => {
        setSelectedDeal(deal);
        setNewStatus(deal.status);
        setIsModalOpen(true);
    };

    const handleSaveStatus = () => {
        if (selectedDeal) {
            setDeals(deals.map(deal =>
                deal.id === selectedDeal.id ? { ...deal, status: newStatus } : deal
            ));
            setIsModalOpen(false);
            setSelectedDeal(null);
        }
    };

    return (
        <div className="space-y-6 relative">
            {/* Header - Mobile Only */}
            <div className="md:hidden">
                <h1 className="text-3xl font-bebas tracking-wide text-deep-black">Active Deals</h1>
                <p className="text-gray-600 text-sm mt-1">Track and manage your ongoing collaborations</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Total Active</p>
                            <p className="text-2xl font-bold text-deep-black mt-1">{totalActiveDeals}</p>
                        </div>
                        <div className="p-3 bg-orange-100 rounded-lg">
                            <FileText size={24} className="text-primary-orange" />
                        </div>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Total Value</p>
                            <p className="text-2xl font-bold text-deep-black mt-1">${totalValue.toLocaleString()}</p>
                        </div>
                        <div className="p-3 bg-green-100 rounded-lg">
                            <DollarSign size={24} className="text-success-green" />
                        </div>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Negotiating</p>
                            <p className="text-2xl font-bold text-deep-black mt-1">{pendingDeals}</p>
                        </div>
                        <div className="p-3 bg-yellow-100 rounded-lg">
                            <MessageSquare size={24} className="text-yellow-600" />
                        </div>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Booked</p>
                            <p className="text-2xl font-bold text-deep-black mt-1">{inProgressDeals}</p>
                        </div>
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <Calendar size={24} className="text-blue-600" />
                        </div>
                    </div>
                </Card>
            </div>

            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Status Filter Buttons */}
                <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg flex-wrap">
                    <button
                        onClick={() => setStatusFilter('all')}
                        className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${statusFilter === 'all'
                            ? 'bg-white text-primary-orange shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setStatusFilter('pending')}
                        className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${statusFilter === 'pending'
                            ? 'bg-white text-primary-orange shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        Negotiating
                    </button>
                    <button
                        onClick={() => setStatusFilter('in-progress')}
                        className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${statusFilter === 'in-progress'
                            ? 'bg-white text-primary-orange shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        Booked
                    </button>
                    <button
                        onClick={() => setStatusFilter('review')}
                        className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${statusFilter === 'review'
                            ? 'bg-white text-primary-orange shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        Shoot Done
                    </button>
                </div>

                {/* Search */}
                <div className="relative flex-1 sm:flex-none sm:w-64">
                    <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search deals..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-orange outline-none"
                    />
                </div>
            </div>

            {/* Deals Table - Desktop */}
            <Card className="overflow-hidden hidden md:block">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[180px] whitespace-nowrap">Influencer</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px] whitespace-nowrap">Platform</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[130px] whitespace-nowrap">Booking Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[130px] whitespace-nowrap">Shoot Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] whitespace-nowrap">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px] whitespace-nowrap">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[130px] whitespace-nowrap">Deal ID</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredDeals.map((deal) => {
                                const statusInfo = getStatusBadge(deal.status);
                                return (
                                    <tr key={deal.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <img
                                                    src={deal.influencerImage}
                                                    alt={deal.influencerName}
                                                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                                                />
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-deep-black">{deal.influencerName}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                {deal.platforms.map((platform, index) => (
                                                    <div
                                                        key={index}
                                                        className={`p-2 rounded-full ${platform === 'instagram' ? 'bg-pink-100' :
                                                            platform === 'youtube' ? 'bg-red-100' :
                                                                'bg-blue-100'
                                                            }`}
                                                        title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                                                    >
                                                        {getPlatformIcon(platform)}
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {formatDate(deal.bookingDate)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {formatDate(deal.shootDate)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm font-semibold text-success-green">{deal.price}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
                                                {statusInfo.icon}
                                                {statusInfo.label}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm font-mono text-gray-700">{deal.dealId}</span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {filteredDeals.length === 0 && (
                    <div className="text-center py-12">
                        <FileText size={48} className="mx-auto text-gray-300 mb-3" />
                        <p className="text-gray-500">No active deals found matching your search.</p>
                    </div>
                )}
            </Card>

            {/* Deals Cards - Mobile */}
            <div className="md:hidden space-y-4">
                {filteredDeals.map((deal) => {
                    const statusInfo = getStatusBadge(deal.status);
                    return (
                        <Card key={deal.id} className="p-4">
                            <div className="space-y-3">
                                {/* Header with influencer info */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={deal.influencerImage}
                                            alt={deal.influencerName}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                        />
                                        <div>
                                            <p className="font-medium text-deep-black">{deal.influencerName}</p>
                                            <p className="text-xs text-gray-500">{deal.dealId}</p>
                                        </div>
                                    </div>
                                    <span className="text-lg font-bold text-success-green">{deal.price}</span>
                                </div>

                                {/* Status Badge */}
                                <div>
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
                                        {statusInfo.icon}
                                        {statusInfo.label}
                                    </span>
                                </div>

                                {/* Platforms */}
                                <div className="flex items-center gap-2">
                                    {deal.platforms.map((platform, index) => (
                                        <div
                                            key={index}
                                            className={`p-2 rounded-full ${platform === 'instagram' ? 'bg-pink-100' :
                                                platform === 'youtube' ? 'bg-red-100' :
                                                    'bg-blue-100'
                                                }`}
                                            title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                                        >
                                            {getPlatformIcon(platform)}
                                        </div>
                                    ))}
                                </div>

                                {/* Dates Grid */}
                                <div className="grid grid-cols-2 gap-2 py-3 border-t border-gray-100">
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Booking</p>
                                        <p className="text-sm font-medium text-gray-700">{formatDate(deal.bookingDate)}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Shoot</p>
                                        <p className="text-sm font-medium text-gray-700">{formatDate(deal.shootDate)}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    );
                })}

                {filteredDeals.length === 0 && (
                    <div className="text-center py-12">
                        <FileText size={48} className="mx-auto text-gray-300 mb-3" />
                        <p className="text-gray-500">No active deals found matching your search.</p>
                    </div>
                )}
            </div>

            {/* Status Update Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="text-xl font-bold text-deep-black">Update Deal Status</h3>
                            <p className="text-sm text-gray-500 mt-1">Change the current status for {selectedDeal?.dealId}</p>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Select New Status</label>
                                <div className="grid gap-3">
                                    <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${newStatus === 'pending' ? 'border-primary-orange bg-orange-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                        <input
                                            type="radio"
                                            name="status"
                                            value="pending"
                                            checked={newStatus === 'pending'}
                                            onChange={(e) => setNewStatus(e.target.value)}
                                            className="text-primary-orange focus:ring-primary-orange"
                                        />
                                        <div className="ml-3">
                                            <span className="block text-sm font-medium text-gray-900">Negotiating</span>
                                            <span className="block text-xs text-gray-500">Still in chat, not booked</span>
                                        </div>
                                    </label>

                                    <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${newStatus === 'in-progress' ? 'border-primary-orange bg-orange-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                        <input
                                            type="radio"
                                            name="status"
                                            value="in-progress"
                                            checked={newStatus === 'in-progress'}
                                            onChange={(e) => setNewStatus(e.target.value)}
                                            className="text-primary-orange focus:ring-primary-orange"
                                        />
                                        <div className="ml-3">
                                            <span className="block text-sm font-medium text-gray-900">Booked</span>
                                            <span className="block text-xs text-gray-500">Booked but shoot not done yet</span>
                                        </div>
                                    </label>

                                    <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${newStatus === 'review' ? 'border-primary-orange bg-orange-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                        <input
                                            type="radio"
                                            name="status"
                                            value="review"
                                            checked={newStatus === 'review'}
                                            onChange={(e) => setNewStatus(e.target.value)}
                                            className="text-primary-orange focus:ring-primary-orange"
                                        />
                                        <div className="ml-3">
                                            <span className="block text-sm font-medium text-gray-900">Shoot Done</span>
                                            <span className="block text-xs text-gray-500">Shoot completed</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            <Button
                                variant="outline"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleSaveStatus}
                                className="bg-primary-orange hover:bg-orange-600 text-white border-none"
                            >
                                Update Status
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActiveDeals;

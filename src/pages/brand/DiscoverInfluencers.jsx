import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Input from '../../components/ui/Input';
import { Search, Filter, MapPin, Instagram, Youtube, Facebook, Heart, CheckCircle, X, ChevronDown } from 'lucide-react';

const DiscoverInfluencers = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isDropdownClosing, setIsDropdownClosing] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        location: '',
        minBudget: 0,
        maxBudget: 5000,
        platforms: {
            instagram: false,
            youtube: false,
            facebook: false,
        },
        niche: ''
    });

    const [appliedFilters, setAppliedFilters] = useState({
        location: '',
        minBudget: 0,
        maxBudget: 5000,
        platforms: {
            instagram: false,
            youtube: false,
            facebook: false,
        },
        niche: ''
    });

    const resultsRef = useRef(null);

    const handleCloseModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsFilterOpen(false);
            setIsClosing(false);
        }, 250); // Match exit animation duration
    };

    const handleApplyFilters = () => {
        setAppliedFilters(filters);
        handleCloseModal();
        // Scroll to results on mobile/small screens
        if (window.innerWidth < 768) {
            setTimeout(() => {
                resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 350); // Adjusted for modal close animation
        }
    };

    const handlePlatformChange = (platform) => {
        setFilters(prev => ({
            ...prev,
            platforms: {
                ...prev.platforms,
                [platform.toLowerCase()]: !prev.platforms[platform.toLowerCase()]
            }
        }));
    };

    // Mock Data
    const influencers = [
        {
            id: 1,
            name: "Sarah Jenkins",
            handle: "@sarahstyle",
            niche: "Fashion & Lifestyle",
            location: "New York, USA",
            followers: "1.2M",
            engagement: "4.8%",
            price: "$500 - $2k",
            verified: true,
            platforms: ['instagram', 'youtube'],
            platformStats: {
                instagram: { followers: "850k", engagement: "5.2%" },
                youtube: { followers: "350k", engagement: "3.5%" }
            },
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 2,
            name: "TechReview Pro",
            handle: "@techpro_official",
            niche: "Technology",
            location: "San Francisco, USA",
            followers: "850k",
            engagement: "6.2%",
            price: "$2k - $5k",
            verified: true,
            platforms: ['youtube', 'facebook'],
            platformStats: {
                youtube: { followers: "600k", engagement: "7.1%" },
                facebook: { followers: "250k", engagement: "4.5%" }
            },
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 3,
            name: "Fitness Mike",
            handle: "@mikefit",
            niche: "Health & Fitness",
            location: "London, UK",
            followers: "500k",
            engagement: "5.5%",
            price: "$300 - $1k",
            verified: false,
            platforms: ['instagram', 'facebook'],
            platformStats: {
                instagram: { followers: "200k", engagement: "4.2%" },
                facebook: { followers: "300k", engagement: "6.8%" }
            },
            image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 4,
            name: "Elena Cooks",
            handle: "@elenakitchen",
            niche: "Food & Dining",
            location: "Paris, France",
            followers: "2.1M",
            engagement: "3.9%",
            price: "$1k - $3k",
            verified: true,
            platforms: ['instagram', 'youtube', 'facebook'],
            platformStats: {
                instagram: { followers: "1.5M", engagement: "3.5%" },
                youtube: { followers: "400k", engagement: "4.1%" },
                facebook: { followers: "200k", engagement: "5.5%" }
            },
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 5,
            name: "Beauty By Maya",
            handle: "@mayabeauty",
            niche: "Beauty",
            location: "Los Angeles, USA",
            followers: "3.5M",
            engagement: "5.8%",
            price: "$3k - $8k",
            verified: true,
            platforms: ['instagram', 'youtube'],
            platformStats: {
                instagram: { followers: "2.8M", engagement: "6.2%" },
                youtube: { followers: "700k", engagement: "4.5%" }
            },
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 6,
            name: "Travel With Alex",
            handle: "@alexwanders",
            niche: "Travel",
            location: "Dubai, UAE",
            followers: "1.8M",
            engagement: "4.2%",
            price: "$1.5k - $4k",
            verified: true,
            platforms: ['instagram', 'youtube', 'facebook'],
            platformStats: {
                instagram: { followers: "1.2M", engagement: "4.8%" },
                youtube: { followers: "500k", engagement: "3.5%" },
                facebook: { followers: "100k", engagement: "3.2%" }
            },
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 7,
            name: "Gaming Guru",
            handle: "@gameguru",
            niche: "Gaming",
            location: "Tokyo, Japan",
            followers: "2.5M",
            engagement: "7.5%",
            price: "$2k - $6k",
            verified: true,
            platforms: ['youtube', 'facebook'],
            platformStats: {
                youtube: { followers: "2M", engagement: "8.2%" },
                facebook: { followers: "500k", engagement: "5.8%" }
            },
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 8,
            name: "Sophia Style",
            handle: "@sophiafashion",
            niche: "Fashion & Lifestyle",
            location: "Milan, Italy",
            followers: "950k",
            engagement: "6.1%",
            price: "$800 - $2.5k",
            verified: true,
            platforms: ['instagram'],
            platformStats: {
                instagram: { followers: "950k", engagement: "6.1%" }
            },
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 9,
            name: "Chef Marcus",
            handle: "@chefmarcus",
            niche: "Food & Dining",
            location: "Barcelona, Spain",
            followers: "680k",
            engagement: "5.2%",
            price: "$400 - $1.2k",
            verified: false,
            platforms: ['instagram', 'facebook'],
            platformStats: {
                instagram: { followers: "450k", engagement: "5.8%" },
                facebook: { followers: "230k", engagement: "4.2%" }
            },
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 10,
            name: "Yoga With Lisa",
            handle: "@lisayoga",
            niche: "Health & Fitness",
            location: "Sydney, Australia",
            followers: "420k",
            engagement: "6.8%",
            price: "$250 - $800",
            verified: false,
            platforms: ['instagram', 'youtube'],
            platformStats: {
                instagram: { followers: "280k", engagement: "7.2%" },
                youtube: { followers: "140k", engagement: "5.8%" }
            },
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 11,
            name: "Tech Insights",
            handle: "@techinsights",
            niche: "Technology",
            location: "Berlin, Germany",
            followers: "1.1M",
            engagement: "5.9%",
            price: "$1.2k - $3.5k",
            verified: true,
            platforms: ['youtube', 'facebook'],
            platformStats: {
                youtube: { followers: "800k", engagement: "6.5%" },
                facebook: { followers: "300k", engagement: "4.8%" }
            },
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 12,
            name: "Makeup By Zara",
            handle: "@zaramakeup",
            niche: "Beauty",
            location: "Mumbai, India",
            followers: "1.6M",
            engagement: "7.2%",
            price: "$600 - $2k",
            verified: true,
            platforms: ['instagram', 'youtube', 'facebook'],
            platformStats: {
                instagram: { followers: "1.2M", engagement: "7.8%" },
                youtube: { followers: "350k", engagement: "6.2%" },
                facebook: { followers: "50k", engagement: "5.5%" }
            },
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200"
        },
    ];

    const getDisplayStats = (influencer) => {
        // Check if any specific platform filter is active
        const activePlatform = Object.keys(filters.platforms).find(p => filters.platforms[p]);

        if (activePlatform && influencer.platformStats && influencer.platformStats[activePlatform]) {
            return {
                followers: influencer.platformStats[activePlatform].followers,
                engagement: influencer.platformStats[activePlatform].engagement,
                label: activePlatform // To optionally show which platform stats are shown
            };
        }

        // Default to aggregated stats
        return {
            followers: influencer.followers,
            engagement: influencer.engagement,
            label: null
        };
    };

    // Filter Logic
    const filteredInfluencers = influencers.filter(influencer => {
        // Search Filter (Name only)
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matchesSearch = influencer.name.toLowerCase().includes(query);
            if (!matchesSearch) return false;
        }

        // Location Filter
        if (appliedFilters.location && !influencer.location.toLowerCase().includes(appliedFilters.location.toLowerCase())) {
            return false;
        }

        // Niche Filter
        if (appliedFilters.niche && !influencer.niche.toLowerCase().includes(appliedFilters.niche.toLowerCase())) {
            return false;
        }

        // Platform Filter
        const selectedPlatforms = Object.keys(appliedFilters.platforms).filter(p => appliedFilters.platforms[p]);
        if (selectedPlatforms.length > 0) {
            const hasSelectedPlatform = selectedPlatforms.some(p => influencer.platforms.includes(p));
            if (!hasSelectedPlatform) return false;
        }

        return true;
    });

    // Handle Niche Change directly (acts as "Category")
    const handleNicheChange = (e) => {
        const newNiche = e.target.value;
        setFilters(prev => ({ ...prev, niche: newNiche }));
        setAppliedFilters(prev => ({ ...prev, niche: newNiche })); // Apply immediately for Category
    };

    const handleCloseDropdown = () => {
        setIsDropdownClosing(true);
        setTimeout(() => {
            setIsCategoryOpen(false);
            setIsDropdownClosing(false);
        }, 200); // Match animation duration
    };

    return (
        <div className="flex flex-col h-[calc(100vh-8rem)]">
            {/* Header - Mobile Only */}
            <div className="md:hidden mb-4">
                <h1 className="text-3xl font-bebas tracking-wide text-deep-black">Discover</h1>
                <p className="text-gray-600 text-sm mt-1">Find and connect with influencers for your brand</p>
            </div>

            {/* Top Controls Bar */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Search & Category */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto flex-1">
                    <div className="relative w-full sm:w-64">
                        <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search influencers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-orange outline-none"
                        />
                    </div>

                    {/* Category (Niche) Selection - Custom Dropdown */}
                    <div className="relative w-full sm:w-48">
                        <button
                            type="button"
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-orange outline-none cursor-pointer bg-white flex items-center justify-between hover:border-gray-300 transition-colors"
                        >
                            <span className={filters.niche ? 'text-deep-black' : 'text-gray-500'}>
                                {filters.niche ? filters.niche.charAt(0).toUpperCase() + filters.niche.slice(1) : 'All Categories'}
                            </span>
                            <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isCategoryOpen && (
                            <>
                                {/* Backdrop to close dropdown */}
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={handleCloseDropdown}
                                />

                                {/* Dropdown Menu */}
                                <div className={`absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-20 ${isDropdownClosing ? 'animate-slide-up' : 'animate-slide-down'}`}>
                                    {[
                                        { value: '', label: 'All Categories' },
                                        { value: 'fashion', label: 'Fashion' },
                                        { value: 'tech', label: 'Technology' },
                                        { value: 'beauty', label: 'Beauty' },
                                        { value: 'food', label: 'Food' }
                                    ].map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => {
                                                handleNicheChange({ target: { value: option.value } });
                                                handleCloseDropdown();
                                            }}
                                            className={`w-full px-3 py-2.5 text-left text-sm hover:bg-orange-50 transition-colors ${filters.niche === option.value ? 'bg-orange-50 text-primary-orange font-medium' : 'text-gray-700'
                                                }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Filter Button & Sort */}
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                    <Button
                        className="flex items-center gap-2"
                        onClick={() => setIsFilterOpen(true)}
                    >
                        <Filter size={18} />
                        Filters
                    </Button>

                    <div className="text-gray-600 text-sm whitespace-nowrap">
                        Showing <span className="font-bold text-deep-black">{filteredInfluencers.length}</span> results
                    </div>
                </div>
            </div >

            {/* Filter Modal */}
            {
                isFilterOpen && (
                    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm ${isClosing ? 'animate-backdrop-exit' : 'animate-backdrop'}`}>
                        <div className={`bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl ${isClosing ? 'animate-popup-exit' : 'animate-popup'}`}>
                            <div className="p-6 space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bebas tracking-wide text-deep-black">Filter Influencers</h3>
                                    <button onClick={handleCloseModal} className="text-gray-400 hover:text-deep-black transition-colors">
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Location</label>
                                    <div className="relative">
                                        <MapPin size={16} className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Country or City"
                                            className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-orange focus:ring-1 focus:ring-primary-orange outline-none"
                                            value={filters.location}
                                            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Budget */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Budget Range</label>
                                    <div className="flex items-center gap-2">
                                        <input type="number" placeholder="Min" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm" />
                                        <span className="text-gray-400">-</span>
                                        <input type="number" placeholder="Max" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm" />
                                    </div>
                                </div>

                                {/* Platforms */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Platform</label>
                                    <div className="space-y-2">
                                        {['Instagram', 'YouTube', 'Facebook'].map((platform) => (
                                            <label key={platform} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                                <input
                                                    type="checkbox"
                                                    className="rounded border-gray-300 text-primary-orange focus:ring-primary-orange w-4 h-4"
                                                    checked={filters.platforms[platform.toLowerCase()] || false}
                                                    onChange={() => handlePlatformChange(platform)}
                                                />
                                                {platform}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-4 border-t border-gray-100">
                                    <Button
                                        variant="ghost"
                                        className="flex-1"
                                        onClick={() => {
                                            const resetFilters = {
                                                location: '',
                                                minBudget: 0,
                                                maxBudget: 5000,
                                                platforms: { instagram: false, youtube: false, facebook: false },
                                                niche: ''
                                            };
                                            setFilters(resetFilters);
                                            setAppliedFilters(resetFilters);
                                            handleCloseModal();
                                        }}
                                    >
                                        Clear All
                                    </Button>
                                    <Button className="flex-1" onClick={handleApplyFilters}>Apply Filters</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Main Content Grid */}
            <div className="flex-1 min-w-0">
                <div ref={resultsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 overflow-y-auto pr-2 pb-4 h-full">
                    {filteredInfluencers.map((influencer) => {
                        const stats = getDisplayStats(influencer);
                        return (
                            <Card key={influencer.id} className="p-0 h-auto group hover:border-primary-orange transition-all duration-300">
                                <div className="p-6 flex flex-col items-center text-center relative h-full">
                                    <button className="absolute top-4 right-4 text-gray-400 hover:text-primary-orange hover:bg-orange-50 rounded-full p-2 transition-colors">
                                        <Heart size={20} />
                                    </button>

                                    <div className="relative mb-4">
                                        <img
                                            src={influencer.image}
                                            alt={influencer.name}
                                            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform"
                                        />
                                        {influencer.verified && (
                                            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm">
                                                <CheckCircle size={18} className="text-success-green fill-white" />
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-6 w-full">
                                        <h3 className="font-bebas tracking-wide text-2xl text-deep-black mb-1">{influencer.name}</h3>
                                        <p className="text-sm text-gray-500 mb-3 font-medium">{influencer.niche}</p>
                                        <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
                                            <MapPin size={12} />
                                            {influencer.location}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-y border-gray-100 w-full">
                                        <div className="text-center">
                                            <div className="font-bold text-deep-black text-lg">{stats.followers}</div>
                                            <div className="text-[10px] text-gray-400 uppercase tracking-wider">
                                                {stats.label ? `${stats.label} Followers` : 'Followers'}
                                            </div>
                                        </div>
                                        <div className="text-center border-l border-gray-100">
                                            <div className="font-bold text-success-green text-lg">{stats.engagement}</div>
                                            <div className="text-[10px] text-gray-400 uppercase tracking-wider">Eng. Rate</div>
                                        </div>
                                        <div className="text-center border-l border-gray-100">
                                            <div className="font-bold text-deep-black text-sm mt-1">{influencer.price}</div>
                                            <div className="text-[10px] text-gray-400 uppercase tracking-wider">Price</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        {(!stats.label || stats.label === 'instagram') && influencer.platforms.includes('instagram') && <div className={`p-2 rounded-full transition-colors ${stats.label === 'instagram' ? 'bg-pink-100 text-pink-600 ring-2 ring-pink-200' : 'bg-pink-50 text-pink-600 hover:bg-pink-100'}`}><Instagram size={16} /></div>}
                                        {(!stats.label || stats.label === 'youtube') && influencer.platforms.includes('youtube') && <div className={`p-2 rounded-full transition-colors ${stats.label === 'youtube' ? 'bg-red-100 text-red-600 ring-2 ring-red-200' : 'bg-red-50 text-red-600 hover:bg-red-100'}`}><Youtube size={16} /></div>}
                                        {(!stats.label || stats.label === 'facebook') && influencer.platforms.includes('facebook') && <div className={`p-2 rounded-full transition-colors ${stats.label === 'facebook' ? 'bg-blue-100 text-blue-600 ring-2 ring-blue-200' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}><Facebook size={16} /></div>}
                                    </div>

                                    <Link
                                        to={`/brand/influencer/${influencer.id}`}
                                        state={{ activePlatform: stats.label }}
                                        className="block w-full mt-auto"
                                    >
                                        <Button variant="secondary" className="w-full">View Profile</Button>
                                    </Link>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div >
    );
};

export default DiscoverInfluencers;

// Mock authentication data for testing
// In production, this would come from backend API

export const MOCK_USERS = {
    // Brand user
    'brand@test.com': {
        password: 'brand123',
        role: 'brand',
        name: 'Acme Brand',
        redirectTo: '/brand'
    },

    // Influencer user
    'influencer@test.com': {
        password: 'influencer123',
        role: 'influencer',
        name: 'Sarah Jenkins',
        redirectTo: '/influencer'
    },

    // Admin user
    'admin@test.com': {
        password: 'admin123',
        role: 'admin',
        name: 'Admin User',
        redirectTo: '/admin'
    }
};

// Mock influencer data
export const MOCK_INFLUENCER_DATA = {
    profile: {
        name: 'Sarah Jenkins',
        email: 'influencer@test.com',
        bio: 'Fashion & Lifestyle content creator passionate about sustainable fashion and mindful living.',
        location: 'Los Angeles, CA',
        profilePhoto: null,
        categories: ['Fashion', 'Lifestyle', 'Sustainability'],
        budgetRange: { min: 500, max: 5000 },
        availability: true,
        joinedDate: '2024-01-15'
    },

    socialMedia: {
        instagram: {
            connected: true,
            username: '@sarahjenkins',
            followers: 125000,
            engagementRate: 4.2,
            avgLikes: 5250,
            avgComments: 180,
            lastSync: '2025-11-30T10:30:00',
            recentPosts: [
                { views: 45000, likes: 6200, comments: 210, date: '2025-11-28' },
                { views: 38000, likes: 5800, comments: 165, date: '2025-11-26' },
                { views: 32000, likes: 4900, comments: 155, date: '2025-11-24' }
            ]
        },
        facebook: {
            connected: true,
            username: 'Sarah Jenkins',
            followers: 45000,
            engagementRate: 3.1,
            avgLikes: 1395,
            avgComments: 45,
            lastSync: '2025-11-30T10:30:00',
            recentPosts: [
                { likes: 1500, comments: 52, date: '2025-11-27' },
                { likes: 1200, comments: 38, date: '2025-11-25' }
            ]
        },
        youtube: {
            connected: true,
            username: 'Sarah Jenkins Vlogs',
            subscribers: 89000,
            engagementRate: 5.8,
            avgViews: 15000,
            avgLikes: 870,
            lastSync: '2025-11-30T10:30:00',
            recentVideos: [
                { views: 18500, likes: 1050, comments: 120, date: '2025-11-26' },
                { views: 12000, likes: 680, comments: 85, date: '2025-11-20' }
            ]
        }
    },

    bookings: [
        // Today's bookings (Dec 1, 2025)
        {
            id: 1,
            brandName: 'EcoWear Fashion',
            brandLogo: null,
            campaign: 'Sustainable Summer Collection',
            shootDate: '2025-12-01',
            shootTime: '10:00 AM - 11:30 AM',
            location: 'Studio A, Downtown LA',
            status: 'confirmed',
            notes: 'Bring 3 outfit changes',
            createdDate: '2025-11-20'
        },
        {
            id: 2,
            brandName: 'GreenBeauty Co',
            brandLogo: null,
            campaign: 'Natural Skincare Launch',
            shootDate: '2025-12-01',
            shootTime: '1:00 PM - 2:30 PM',
            location: 'Outdoor - Venice Beach',
            status: 'confirmed',
            notes: 'Golden hour shoot',
            createdDate: '2025-11-22'
        },
        {
            id: 3,
            brandName: 'UrbanStyle Co',
            brandLogo: null,
            campaign: 'Street Fashion Winter',
            shootDate: '2025-12-01',
            shootTime: '3:30 PM - 5:00 PM',
            location: 'Downtown LA Streets',
            status: 'completed',
            notes: 'Casual street style',
            createdDate: '2025-11-23'
        },

        // Dec 2, 2025
        {
            id: 4,
            brandName: 'LuxeAccessories',
            brandLogo: null,
            campaign: 'Holiday Jewelry Line',
            shootDate: '2025-12-02',
            shootTime: '9:00 AM - 10:30 AM',
            location: 'Studio B, Beverly Hills',
            status: 'confirmed',
            notes: 'Evening wear required',
            createdDate: '2025-11-24'
        },
        {
            id: 5,
            brandName: 'FitLife Nutrition',
            brandLogo: null,
            campaign: 'Protein Shake Promo',
            shootDate: '2025-12-02',
            shootTime: '2:00 PM - 3:00 PM',
            location: 'Gym - Santa Monica',
            status: 'confirmed',
            notes: 'Workout attire required',
            createdDate: '2025-11-10'
        },

        // Dec 3, 2025
        {
            id: 6,
            brandName: 'TechGear Pro',
            brandLogo: null,
            campaign: 'Smart Watch Launch',
            shootDate: '2025-12-03',
            shootTime: '11:00 AM - 12:30 PM',
            location: 'Tech Hub, Silicon Beach',
            status: 'confirmed',
            notes: 'Athletic wear, outdoor setting',
            createdDate: '2025-11-15'
        },
        {
            id: 7,
            brandName: 'Organic Eats',
            brandLogo: null,
            campaign: 'Farm to Table Campaign',
            shootDate: '2025-12-03',
            shootTime: '4:00 PM - 5:30 PM',
            location: 'Local Farmers Market',
            status: 'pending',
            notes: 'Bring reusable bags',
            createdDate: '2025-11-25'
        },

        // Dec 4, 2025
        {
            id: 8,
            brandName: 'Wanderlust Travel',
            brandLogo: null,
            campaign: 'Adventure Gear Collection',
            shootDate: '2025-12-04',
            shootTime: '8:00 AM - 10:00 AM',
            location: 'Malibu Beach',
            status: 'confirmed',
            notes: 'Sunrise shoot, bring hiking boots',
            createdDate: '2025-11-26'
        },
        {
            id: 9,
            brandName: 'Zen Wellness',
            brandLogo: null,
            campaign: 'Yoga Apparel Line',
            shootDate: '2025-12-04',
            shootTime: '3:00 PM - 4:30 PM',
            location: 'Yoga Studio, West Hollywood',
            status: 'confirmed',
            notes: 'Bring yoga mat',
            createdDate: '2025-11-27'
        },

        // Past booking
        {
            id: 10,
            brandName: 'Vintage Vibes',
            brandLogo: null,
            campaign: 'Retro Fashion Revival',
            shootDate: '2025-11-28',
            shootTime: '12:00 PM - 2:00 PM',
            location: 'Downtown Vintage District',
            status: 'completed',
            notes: '70s inspired outfits',
            createdDate: '2025-11-18'
        },
        {
            id: 6,
            brandName: 'TechGear Pro',
            brandLogo: null,
            campaign: 'Gadget Unboxing Series',
            shootDate: '2025-12-12',
            shootTime: '11:00 AM - 12:30 PM',
            location: 'Home Studio',
            status: 'confirmed',
            notes: 'Equipment will be shipped',
            createdDate: '2025-11-28'
        },
        {
            id: 7,
            brandName: 'Wellness Hub',
            brandLogo: null,
            campaign: 'Yoga Lifestyle Brand',
            shootDate: '2025-12-12',
            shootTime: '2:00 PM - 3:30 PM',
            location: 'Yoga Studio, Santa Monica',
            status: 'confirmed',
            notes: 'Yoga mat provided',
            createdDate: '2025-11-25'
        },
        {
            id: 8,
            brandName: 'Gourmet Eats',
            brandLogo: null,
            campaign: 'Healthy Meal Prep',
            shootDate: '2025-12-12',
            shootTime: '5:00 PM - 6:30 PM',
            location: 'Kitchen Studio',
            status: 'confirmed',
            notes: 'Food styling session',
            createdDate: '2025-11-26'
        },
        {
            id: 9,
            brandName: 'TravelGear Co',
            brandLogo: null,
            campaign: 'Adventure Backpack Launch',
            shootDate: '2025-12-20',
            shootTime: '9:00 AM - 10:30 AM',
            location: 'Outdoor - Griffith Park',
            status: 'pending',
            notes: 'Hiking outfit required',
            createdDate: '2025-11-27'
        },
        {
            id: 10,
            brandName: 'PetLove Brands',
            brandLogo: null,
            campaign: 'Pet Accessories Line',
            shootDate: '2025-12-20',
            shootTime: '12:00 PM - 1:30 PM',
            location: 'Dog Park, West Hollywood',
            status: 'pending',
            notes: 'Bring your pet if possible',
            createdDate: '2025-11-28'
        }
    ],

    messages: [
        {
            id: 1,
            brandName: 'EcoWear Fashion',
            brandLogo: null,
            lastMessage: 'Looking forward to the shoot next week!',
            timestamp: '2025-11-29T15:30:00',
            unread: true
        },
        {
            id: 2,
            brandName: 'GreenBeauty Co',
            brandLogo: null,
            lastMessage: 'Can we reschedule to 3 PM instead?',
            timestamp: '2025-11-29T10:15:00',
            unread: true
        },
        {
            id: 3,
            brandName: 'FitLife Nutrition',
            brandLogo: null,
            lastMessage: 'Great work on the campaign! Here are the final edits.',
            timestamp: '2025-11-28T14:20:00',
            unread: false
        }
    ],

    calendar: {
        // Dates marked as unavailable
        unavailableDates: ['2025-12-01', '2025-12-15', '2025-12-25'],
        // Booked dates (from bookings)
        bookedDates: ['2025-12-05', '2025-12-12', '2025-12-20']
    }
};

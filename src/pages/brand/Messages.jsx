import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import { Search, Send, MoreVertical, Phone, Video, Paperclip, Smile, ArrowLeft, Instagram, Youtube, Facebook, MessageSquare } from 'lucide-react';

const Messages = () => {
    const [selectedConversation, setSelectedConversation] = useState(1);
    const [messageInput, setMessageInput] = useState('');
    const [showMobileChat, setShowMobileChat] = useState(false);

    // Disable page scrolling when Messages component is mounted
    useEffect(() => {
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.style.overflow = 'hidden';
        }

        return () => {
            if (mainElement) {
                mainElement.style.overflow = '';
            }
        };
    }, []);

    // Mock conversations data
    const conversations = [
        {
            id: 1,
            influencerName: "Sarah Jenkins",
            influencerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
            lastMessage: "Sounds great! I'll send you the draft by tomorrow.",
            timestamp: "2 min ago",
            unread: 2,
            online: true,
            platform: "instagram"
        },
        {
            id: 2,
            influencerName: "TechReview Pro",
            influencerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
            lastMessage: "Let me check my schedule and get back to you.",
            timestamp: "1 hour ago",
            unread: 0,
            online: true,
            platform: "youtube"
        },
        {
            id: 3,
            influencerName: "Beauty By Maya",
            influencerImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
            lastMessage: "Perfect! Looking forward to working with you.",
            timestamp: "3 hours ago",
            unread: 0,
            online: false,
            platform: "instagram"
        },
        {
            id: 4,
            influencerName: "Fitness Mike",
            influencerImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200",
            lastMessage: "Can we discuss the deliverables?",
            timestamp: "Yesterday",
            unread: 1,
            online: false,
            platform: "facebook"
        },
        {
            id: 5,
            influencerName: "Elena Cooks",
            influencerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
            lastMessage: "Thank you for reaching out!",
            timestamp: "2 days ago",
            unread: 0,
            online: false,
            platform: "youtube"
        }
    ];

    // Mock messages data
    const messagesData = {
        1: [
            { id: 1, sender: 'them', text: "Hi! Thanks for reaching out. I'd love to collaborate with your brand!", timestamp: "10:30 AM" },
            { id: 2, sender: 'me', text: "Great! We're excited to work with you. Can we schedule a call to discuss the details?", timestamp: "10:32 AM" },
            { id: 3, sender: 'them', text: "Absolutely! I'm available tomorrow afternoon. What time works for you?", timestamp: "10:35 AM" },
            { id: 4, sender: 'me', text: "How about 2 PM? I'll send you a calendar invite.", timestamp: "10:37 AM" },
            { id: 5, sender: 'them', text: "Sounds great! I'll send you the draft by tomorrow.", timestamp: "Just now" }
        ],
        2: [
            { id: 1, sender: 'them', text: "Hello! I received your collaboration proposal.", timestamp: "Yesterday" },
            { id: 2, sender: 'me', text: "Hi! Yes, we think you'd be a great fit for our tech product launch.", timestamp: "Yesterday" },
            { id: 3, sender: 'them', text: "Let me check my schedule and get back to you.", timestamp: "1 hour ago" }
        ],
        3: [
            { id: 1, sender: 'me', text: "Hi Maya! We love your beauty content and would like to collaborate.", timestamp: "2 days ago" },
            { id: 2, sender: 'them', text: "Thank you so much! I'd be interested. What did you have in mind?", timestamp: "2 days ago" },
            { id: 3, sender: 'me', text: "We're launching a new skincare line and think you'd be perfect to showcase it.", timestamp: "2 days ago" },
            { id: 4, sender: 'them', text: "Perfect! Looking forward to working with you.", timestamp: "3 hours ago" }
        ],
        4: [
            { id: 1, sender: 'them', text: "Hi! Thanks for the opportunity.", timestamp: "Yesterday" },
            { id: 2, sender: 'me', text: "We're excited! Let's discuss the campaign details.", timestamp: "Yesterday" },
            { id: 3, sender: 'them', text: "Can we discuss the deliverables?", timestamp: "Yesterday" }
        ],
        5: [
            { id: 1, sender: 'them', text: "Thank you for reaching out!", timestamp: "2 days ago" }
        ]
    };

    const getPlatformIcon = (platform) => {
        switch (platform) {
            case 'instagram':
                return <Instagram size={14} className="text-pink-600" />;
            case 'youtube':
                return <Youtube size={14} className="text-red-600" />;
            case 'facebook':
                return <Facebook size={14} className="text-blue-600" />;
            default:
                return null;
        }
    };

    const currentConversation = conversations.find(c => c.id === selectedConversation);
    const currentMessages = messagesData[selectedConversation] || [];

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            console.log('Sending message:', messageInput);
            setMessageInput('');
        }
    };

    const handleSelectConversation = (id) => {
        setSelectedConversation(id);
        setShowMobileChat(true);
    };

    const handleBackToList = () => {
        setShowMobileChat(false);
    };

    return (
        <>
            {/* Mobile Layout */}
            <div className="md:hidden fixed inset-0 top-16 flex flex-col bg-white z-30">
                {/* Header */}
                <div className="px-6 py-3 border-b border-gray-200 flex-shrink-0 bg-white">
                    <h1 className="text-3xl font-bebas tracking-wide text-deep-black">Messages</h1>
                    <p className="text-gray-600 text-sm mt-1">Chat with influencers and manage your collaborations</p>
                </div>

                {/* Chat Container */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Conversations List */}
                    <div className={`w-full flex flex-col bg-white ${showMobileChat ? 'hidden' : 'flex'}`}>
                        <div className="p-4 border-b border-gray-200 flex-shrink-0">
                            <div className="relative">
                                <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search conversations..."
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-orange outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            {conversations.map((conversation) => (
                                <div
                                    key={conversation.id}
                                    onClick={() => handleSelectConversation(conversation.id)}
                                    className={`p-4 border-b border-gray-100 cursor-pointer transition-colors active:bg-gray-100 ${selectedConversation === conversation.id ? 'bg-orange-50 border-l-4 border-l-primary-orange' : ''}`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="relative">
                                            <img
                                                src={conversation.influencerImage}
                                                alt={conversation.influencerName}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            {conversation.online && (
                                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-green rounded-full border-2 border-white"></div>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center gap-1.5">
                                                    <h3 className="font-medium text-deep-black text-sm truncate">
                                                        {conversation.influencerName}
                                                    </h3>
                                                    {getPlatformIcon(conversation.platform)}
                                                </div>
                                                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                                                    {conversation.timestamp}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm text-gray-600 truncate">
                                                    {conversation.lastMessage}
                                                </p>
                                                {conversation.unread > 0 && (
                                                    <span className="ml-2 bg-primary-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                                                        {conversation.unread}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chat Area - Mobile */}
                    <div className={`w-full flex flex-col ${showMobileChat ? 'flex' : 'hidden'}`}>
                        {currentConversation && (
                            <>
                                <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white flex-shrink-0">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={handleBackToList}
                                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        >
                                            <ArrowLeft size={20} />
                                        </button>
                                        <div className="relative">
                                            <img
                                                src={currentConversation.influencerImage}
                                                alt={currentConversation.influencerName}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            {currentConversation.online && (
                                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-green rounded-full border-2 border-white"></div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-medium text-deep-black">
                                                    {currentConversation.influencerName}
                                                </h3>
                                                {getPlatformIcon(currentConversation.platform)}
                                            </div>
                                            <p className="text-xs text-gray-500">
                                                {currentConversation.online ? 'Online' : 'Offline'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                            <Phone size={20} className="text-gray-600" />
                                        </button>
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                            <Video size={20} className="text-gray-600" />
                                        </button>
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                            <MoreVertical size={20} className="text-gray-600" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                                    {currentMessages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`max-w-[70%] ${message.sender === 'me' ? 'order-2' : 'order-1'}`}>
                                                <div
                                                    className={`rounded-2xl px-4 py-2 ${message.sender === 'me'
                                                        ? 'bg-primary-orange text-white rounded-br-none'
                                                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                                                        }`}
                                                >
                                                    <p className="text-sm">{message.text}</p>
                                                </div>
                                                <p className={`text-xs text-gray-500 mt-1 ${message.sender === 'me' ? 'text-right' : 'text-left'}`}>
                                                    {message.timestamp}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
                                    <div className="flex items-end gap-2">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors mb-1">
                                            <Paperclip size={20} className="text-gray-600" />
                                        </button>
                                        <div className="flex-1 relative">
                                            <textarea
                                                value={messageInput}
                                                onChange={(e) => setMessageInput(e.target.value)}
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter' && !e.shiftKey) {
                                                        e.preventDefault();
                                                        handleSendMessage();
                                                    }
                                                }}
                                                placeholder="Type a message..."
                                                rows="1"
                                                className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-200 text-sm focus:border-primary-orange outline-none resize-none"
                                                style={{ minHeight: '40px', maxHeight: '120px' }}
                                            />
                                            <button className="absolute right-2 bottom-2 p-1 hover:bg-gray-100 rounded-lg transition-colors">
                                                <Smile size={18} className="text-gray-600" />
                                            </button>
                                        </div>
                                        <Button
                                            onClick={handleSendMessage}
                                            disabled={!messageInput.trim()}
                                            className="bg-primary-orange hover:bg-orange-600 text-white border-none px-4 py-2 mb-1"
                                        >
                                            <Send size={18} />
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex fixed top-16 left-64 right-0 bottom-0 overflow-hidden bg-white">
                {/* Conversations List */}
                <div className="w-80 border-r border-gray-200 flex flex-col bg-white">
                    <div className="p-4 border-b border-gray-200">
                        <div className="relative">
                            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search conversations..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-orange outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {conversations.map((conversation) => (
                            <div
                                key={conversation.id}
                                onClick={() => setSelectedConversation(conversation.id)}
                                className={`p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 ${selectedConversation === conversation.id ? 'bg-orange-50 border-l-4 border-l-primary-orange' : ''}`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="relative">
                                        <img
                                            src={conversation.influencerImage}
                                            alt={conversation.influencerName}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        {conversation.online && (
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-green rounded-full border-2 border-white"></div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-1.5">
                                                <h3 className="font-medium text-deep-black text-sm truncate">
                                                    {conversation.influencerName}
                                                </h3>
                                                {getPlatformIcon(conversation.platform)}
                                            </div>
                                            <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                                                {conversation.timestamp}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-gray-600 truncate">
                                                {conversation.lastMessage}
                                            </p>
                                            {conversation.unread > 0 && (
                                                <span className="ml-2 bg-primary-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                                                    {conversation.unread}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Area - Desktop */}
                <div className="flex-1 flex flex-col">
                    {currentConversation ? (
                        <>
                            <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <img
                                            src={currentConversation.influencerImage}
                                            alt={currentConversation.influencerName}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        {currentConversation.online && (
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-green rounded-full border-2 border-white"></div>
                                        )}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-medium text-deep-black">
                                                {currentConversation.influencerName}
                                            </h3>
                                            {getPlatformIcon(currentConversation.platform)}
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            {currentConversation.online ? 'Online' : 'Offline'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                        <Phone size={20} className="text-gray-600" />
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                        <Video size={20} className="text-gray-600" />
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                        <MoreVertical size={20} className="text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                                {currentMessages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`max-w-[70%] ${message.sender === 'me' ? 'order-2' : 'order-1'}`}>
                                            <div
                                                className={`rounded-2xl px-4 py-2 ${message.sender === 'me'
                                                    ? 'bg-primary-orange text-white rounded-br-none'
                                                    : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                                                    }`}
                                            >
                                                <p className="text-sm">{message.text}</p>
                                            </div>
                                            <p className={`text-xs text-gray-500 mt-1 ${message.sender === 'me' ? 'text-right' : 'text-left'}`}>
                                                {message.timestamp}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 border-t border-gray-200 bg-white">
                                <div className="flex items-end gap-2">
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors mb-1">
                                        <Paperclip size={20} className="text-gray-600" />
                                    </button>
                                    <div className="flex-1 relative">
                                        <textarea
                                            value={messageInput}
                                            onChange={(e) => setMessageInput(e.target.value)}
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault();
                                                    handleSendMessage();
                                                }
                                            }}
                                            placeholder="Type a message..."
                                            rows="1"
                                            className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-200 text-sm focus:border-primary-orange outline-none resize-none"
                                            style={{ minHeight: '40px', maxHeight: '120px' }}
                                        />
                                        <button className="absolute right-2 bottom-2 p-1 hover:bg-gray-100 rounded-lg transition-colors">
                                            <Smile size={18} className="text-gray-600" />
                                        </button>
                                    </div>
                                    <Button
                                        onClick={handleSendMessage}
                                        disabled={!messageInput.trim()}
                                        className="bg-primary-orange hover:bg-orange-600 text-white border-none px-4 py-2 mb-1"
                                    >
                                        <Send size={18} />
                                    </Button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center bg-gray-50">
                            <div className="text-center">
                                <MessageSquare size={64} className="mx-auto text-gray-300 mb-4" />
                                <h3 className="text-xl font-medium text-gray-600 mb-2">No conversation selected</h3>
                                <p className="text-gray-500">Choose a conversation from the list to start messaging</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Messages;

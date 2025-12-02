import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { MOCK_INFLUENCER_DATA } from '../../data/mockData';

const ShootingCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const { bookings, calendar } = MOCK_INFLUENCER_DATA;

    // Calendar logic
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDayOfWeek = firstDayOfMonth.getDay();

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const previousMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
        setSelectedDate(null);
    };

    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
        setSelectedDate(null);
    };

    const formatDate = (date) => {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

    const isBooked = (day) => {
        const dateStr = formatDate(new Date(year, month, day));
        return bookings.some(b => b.shootDate === dateStr);
    };

    const isUnavailable = (day) => {
        const dateStr = formatDate(new Date(year, month, day));
        return calendar.unavailableDates.includes(dateStr);
    };

    const getBookingsForDate = (day) => {
        const dateStr = formatDate(new Date(year, month, day));
        return bookings.filter(b => b.shootDate === dateStr);
    };

    const getBookingCountForDate = (day) => {
        return getBookingsForDate(day).length;
    };

    const isPast = (day) => {
        const date = new Date(year, month, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const isFull = (day) => {
        return getBookingCountForDate(day) >= 4; // Max 4 bookings per day
    };

    // Generate calendar days
    const calendarDays = [];

    // Empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
        calendarDays.push(null);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(day);
    }

    const [selectedDate, setSelectedDate] = useState(new Date().getDate());
    const selectedBookings = selectedDate ? getBookingsForDate(selectedDate) : [];



    return (
        <div className="space-y-8">
            {/* Header - Mobile Only */}
            <div className="md:hidden">
                <h1 className="text-3xl font-bebas tracking-wide text-deep-black">Calendar</h1>
                <p className="text-gray-600 text-sm mt-1">Manage your shooting schedule</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Calendar */}
                <div className="lg:col-span-2">
                    <Card className="p-6">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bebas tracking-wide text-deep-black">
                                {monthNames[month]} {year}
                            </h2>
                            <div className="flex gap-2">
                                <Button variant="white" size="sm" onClick={previousMonth}>
                                    <ChevronLeft size={16} />
                                </Button>
                                <Button variant="white" size="sm" onClick={nextMonth}>
                                    <ChevronRight size={16} />
                                </Button>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap gap-4 mb-4 text-xs">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-primary-orange rounded"></div>
                                <span className="text-gray-600">Booked</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-red-500 rounded"></div>
                                <span className="text-gray-600">Full (4/4)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                                <span className="text-gray-600">Unavailable</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded"></div>
                                <span className="text-gray-600">Available</span>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1 sm:gap-2">
                            {/* Day names */}
                            {dayNames.map(day => (
                                <div key={day} className="text-center text-[10px] sm:text-xs font-semibold text-gray-500 py-2">
                                    {day}
                                </div>
                            ))}

                            {/* Calendar days */}
                            {calendarDays.map((day, index) => {
                                if (day === null) {
                                    return <div key={`empty-${index}`} className="aspect-square"></div>;
                                }

                                const booked = isBooked(day);
                                const unavailable = isUnavailable(day);
                                const past = isPast(day);
                                const bookingCount = getBookingCountForDate(day);
                                const full = isFull(day);

                                let bgColor = 'bg-white hover:bg-gray-50';
                                if (booked) {
                                    if (full) {
                                        bgColor = 'bg-red-500 text-white hover:bg-red-600'; // Full day (4/4)
                                    } else {
                                        bgColor = 'bg-primary-orange text-white hover:bg-orange-600'; // Has bookings
                                    }
                                } else if (unavailable) {
                                    bgColor = 'bg-gray-300 text-gray-600';
                                } else if (!past) {
                                    bgColor = 'bg-green-50 border-2 border-green-500 hover:bg-green-100';
                                }

                                if (past && !booked) bgColor = 'bg-gray-50 text-gray-400';

                                return (
                                    <button
                                        key={day}
                                        onClick={() => setSelectedDate(day)}
                                        className={`aspect-square p-1 sm:p-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${bgColor} ${selectedDate === day ? 'ring-2 ring-primary-orange ring-offset-2' : ''
                                            }`}
                                    >
                                        <div className="flex flex-col items-center justify-center h-full relative">
                                            <span>{day}</span>
                                            {bookingCount > 0 && (
                                                <span className="text-[8px] sm:text-[10px] mt-0.5 sm:mt-1 font-bold leading-tight">
                                                    {bookingCount}/4
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Selected Date Info */}
                    {selectedDate && (
                        <Card className="p-4">
                            <h3 className="font-semibold text-deep-black mb-3">
                                {monthNames[month]} {selectedDate}, {year}
                            </h3>
                            {selectedBookings.length > 0 ? (
                                <div className="space-y-4 max-h-96 overflow-y-auto">
                                    <p className="text-xs text-gray-500 mb-2">
                                        {selectedBookings.length} booking{selectedBookings.length > 1 ? 's' : ''} on this day
                                    </p>
                                    {selectedBookings.map((booking, idx) => (
                                        <div key={booking.id} className={`pb-4 ${idx < selectedBookings.length - 1 ? 'border-b border-gray-200' : ''}`}>
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-xs text-primary-orange font-semibold">Booking #{idx + 1}</p>
                                                <Badge variant={booking.status === 'confirmed' ? 'success' : 'warning'}>
                                                    {booking.status}
                                                </Badge>
                                            </div>
                                            <div className="space-y-2">
                                                <div>
                                                    <p className="text-xs text-gray-500">Brand</p>
                                                    <p className="font-medium text-deep-black text-sm">{booking.brandName}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Campaign</p>
                                                    <p className="text-sm text-gray-700">{booking.campaign}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Time</p>
                                                    <p className="text-sm text-gray-700">{booking.shootTime}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Location</p>
                                                    <p className="text-sm text-gray-700">{booking.location}</p>
                                                </div>
                                                {booking.notes && (
                                                    <div>
                                                        <p className="text-xs text-gray-500">Notes</p>
                                                        <p className="text-sm text-gray-700">{booking.notes}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-gray-500">No bookings for this date</p>
                            )}
                        </Card>
                    )}


                </div>
            </div>
        </div>
    );
};

export default ShootingCalendar;

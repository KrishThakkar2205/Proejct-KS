import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import { Github, Linkedin } from 'lucide-react';
import { MOCK_USERS } from '../../data/mockData';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(''); // Clear error on input change
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if user exists in mock data
        const user = MOCK_USERS[formData.email];

        if (!user) {
            setError('Invalid email or password');
            return;
        }

        if (user.password !== formData.password) {
            setError('Invalid email or password');
            return;
        }

        // Store user info in localStorage for session management
        localStorage.setItem('currentUser', JSON.stringify({
            email: formData.email,
            name: user.name,
            role: user.role
        }));

        // Navigate to appropriate dashboard
        navigate(user.redirectTo);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-warm-cream/50">
            <Card className="max-w-md w-full space-y-8 p-8 sm:p-10">
                <div className="text-center">
                    <h2 className="text-3xl font-bebas tracking-wide font-bold text-deep-black">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Sign in to access your dashboard
                    </p>
                    {/* Test credentials hint */}
                    <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-left">
                        <p className="font-semibold text-blue-900 mb-1">Test Credentials:</p>
                        <p className="text-blue-700">Brand: brand@test.com / brand123</p>
                        <p className="text-blue-700">Influencer: influencer@test.com / influencer123</p>
                        <p className="text-blue-700">Admin: admin@test.com / admin123</p>
                    </div>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                        <Input
                            label="Email address"
                            type="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <div>
                            <Input
                                label="Password"
                                type="password"
                                name="password"
                                required
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <div className="flex justify-end mt-1">
                                <Link to="/forgot-password" className="text-sm font-medium text-primary-orange hover:text-orange-600">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Button type="submit" className="w-full shadow-lg shadow-orange-100">
                        Log In
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <Button variant="white" type="button" className="w-full">
                            <span className="sr-only">Sign in with Google</span>
                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                            </svg>
                        </Button>
                        <Button variant="white" type="button" className="w-full">
                            <span className="sr-only">Sign in with LinkedIn</span>
                            <Linkedin className="h-5 w-5 text-[#0077b5]" />
                        </Button>
                    </div>
                </form>

                <div className="text-center text-sm">
                    <span className="text-gray-600">Don't have an account? </span>
                    <Link to="/signup" className="font-medium text-primary-orange hover:text-orange-600">
                        Sign Up
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;

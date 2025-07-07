'use client';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
export default function SubscriptionSection() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const handleSubscribe = () => {
        if (email.trim()) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };
    return (
        <section className="bg-indigo-300 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                {}
                <div className="lg:w-xl text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated</h2>
                    <p className="text-gray-600">
                        Subscribe to get the latest offers, updates, and new arrivals straight to your inbox.
                    </p>
                </div>
                {}
                <div className="flex flex-col sm:flex-row items-center gap-4 lg:w-1/2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded border border-gray-300 w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-amber-50"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        onClick={handleSubscribe}
                        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 flex items-center gap-2 transition whitespace-nowrap"
                    >
                        Subscribe <SendIcon fontSize="small" />
                    </button>
                </div>
            </div>
            {}
            {subscribed && (
                <p className="mt-4 text-center text-green-600 font-medium">Subscribed successfully!</p>
            )}
        </section>
    );
}

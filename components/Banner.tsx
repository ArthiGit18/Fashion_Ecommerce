'use client';
import { useEffect, useState } from 'react';

const slides = [
    {
        title: 'Brand new clothes',
        description: 'Discover the latest fashion styles at unbeatable prices.',
        image: './images/1.jpg'
    },
    {
        title: 'Summer Collection',
        description: 'Explore cool and comfy outfits for this summer.',
        image: '/images/2.jpg'
    },
    {
        title: 'Accessories & More',
        description: 'Complete your look with trending bags & accessories.',
        image: '/images/5.jpg'
    }
];

export default function Banner() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 4000); // Slide every 4 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="w-full h-full bg-black/40 flex items-center justify-center">
                        <div className="text-center text-white max-w-2xl px-4">
                            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                            <p className="text-lg mb-6">{slide.description}</p>
                            <button className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
                                Explore More
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

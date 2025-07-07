'use client';
import { useState } from 'react';
import NavBar from './NavBar';
import NavSub from './NavSub';
import Footer from './Footer';
export default function ProfileDetails() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        phone: '',
        altPhone: '',
        countryCode: '+91',
        address1: '',
        address2: '',
        state: '',
        city: '',
        pincode: '',
        landmark: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
    };
    return (
        <>
            <NavBar />
            <NavSub />
            <div className="w-full max-w-3xl mx-auto px-4 py-10">

                <h2 className="text-2xl font-bold mb-6">Profile Details</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="border p-2 rounded w-full" />
                        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="border p-2 rounded w-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="border p-2 rounded w-full" />
                        <input type="text" name="countryCode" placeholder="Country Code" value={formData.countryCode} onChange={handleChange} className="border p-2 rounded w-full" />
                        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border p-2 rounded w-full" />
                    </div>
                    <input type="tel" name="altPhone" placeholder="Alternate Mobile Number" value={formData.altPhone} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input type="text" name="address1" placeholder="Address Line 1" value={formData.address1} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input type="text" name="address2" placeholder="Address Line 2" value={formData.address2} onChange={handleChange} className="border p-2 rounded w-full" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="border p-2 rounded w-full" />
                        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border p-2 rounded w-full" />
                    </div>
                    <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className="border p-2 rounded w-full" />
                    <input type="text" name="landmark" placeholder="Nearby Landmark" value={formData.landmark} onChange={handleChange} className="border p-2 rounded w-full" />
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
                        Submit
                    </button>
                </form>

            </div>
            <Footer />
        </>
    );
}

"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import styles from "../components/Components.module.css"

export default function PageContact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        bedrooms: "",
        additionalBedrooms: "",
        swimmingPool: "",
        locationPreference: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div>
            <Header />
            <div className={styles.contactmainpage}>
                <h1>Do you need specialized help to make your biggest dream come true? Leave your contact</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Your name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="bedrooms">How many bedrooms would be ideal for you?</label>
                        <input 
                            type="number" 
                            id="bedrooms" 
                            name="bedrooms" 
                            value={formData.bedrooms} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="additionalBedrooms">And additional bedrooms?</label>
                        <input 
                            type="number" 
                            id="additionalBedrooms" 
                            name="additionalBedrooms" 
                            value={formData.additionalBedrooms} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="swimmingPool">Does each of your dreams have a swimming pool?</label>
                        <input 
                            type="text" 
                            id="swimmingPool" 
                            name="swimmingPool" 
                            value={formData.swimmingPool} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="locationPreference">Do you prefer to live near the sea or in a quieter, more cozy place?</label>
                        <input 
                            type="text" 
                            id="locationPreference" 
                            name="locationPreference" 
                            value={formData.locationPreference} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

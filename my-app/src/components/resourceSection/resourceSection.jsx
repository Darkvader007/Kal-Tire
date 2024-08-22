// src/components/ResourcesSection.js
import React from 'react';
import '../resourceSection/resourceSection.css';
import img0 from '../../Assets/photo_2024-08-22_22-15-25.jpg';
import img1 from '../../Assets/photo_2024-08-22_22-15-34.jpg';
import img2 from '../../Assets/photo_2024-08-22_22-15-27.jpg';
import img3 from '../../Assets/photo_2024-08-22_22-15-31.jpg';
import img4 from '../../Assets/photo_2024-08-22_22-15-36.jpg';

const resources = [
{
    category: 'Services',
    title: '6 signs you may need new brakes',
    imageUrl: img0,
},
{
    category: 'Maintenance',
    title: 'How Can Potholes Damage Your Tire?',
    imageUrl: img1,
},
{
    category: 'Tires',
    title: 'Are Your Tires Worn Out?',
    imageUrl: img2,
},
{
    category: 'Services',
    title: '6 signs you may need new brakes',
    imageUrl: img3,
},
{
    category: 'Services',
    title: '6 signs you may need new brakes',
    imageUrl: img4,
},
];

const ResourcesSection = () => {
return (
    <div className="resources-section">
        <h2>RESOURCES</h2>
        <p>Tips and tricks to keep you rolling</p>
        <div className="resource-grid">
            {resources.map((resource, index) => (
        <div
            key={index}
            className="resource-card"
            style={{ backgroundImage: `url(${resource.imageUrl})` }}
            >
            <div className="resource-info">
                <span className="category">{resource.category}</span>
                <div className="title">{resource.title}</div>
            </div>
            </div>
            ))}
        </div>
    </div>
    );
};

export default ResourcesSection;

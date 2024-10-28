import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartComponent = () => {
    const studentData = [
        { name: 'Alice', Math: 85, Physics: 90, Chemistry: 78 },
        { name: 'Bob', Math: 88, Physics: 75, Chemistry: 82 },
        { name: 'Charlie', Math: 95, Physics: 88, Chemistry: 91 },
        { name: 'David', Math: 76, Physics: 72, Chemistry: 79 },
        { name: 'Emma', Math: 83, Physics: 85, Chemistry: 80 }
    ];

    return (

        <div className='w-10/12 mx-auto'>
            <h2>Student Marks by Subject</h2>
            <BarChart
                width={1130}
                height={400}
                data={studentData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

                {/* Each Bar represents marks for each subject */}
                <Bar dataKey="Math" fill="#8884d8" />
                <Bar dataKey="Physics" fill="#82ca9d" />
                <Bar dataKey="Chemistry" fill="#ffc658" />
            </BarChart>
        </div>
    );
};

export default BarChartComponent;

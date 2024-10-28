import React from 'react';
import PropTypes from 'prop-types';
import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, name: 'Alice', subject: 'Math', mark: 85 },
        { id: 2, name: 'Alice', subject: 'Physics', mark: 90 },
        { id: 3, name: 'Alice', subject: 'Chemistry', mark: 78 },
        { id: 4, name: 'Bob', subject: 'Math', mark: 88 },
        { id: 5, name: 'Bob', subject: 'Physics', mark: 75 },
        { id: 6, name: 'Bob', subject: 'Chemistry', mark: 82 },
        { id: 7, name: 'Charlie', subject: 'Math', mark: 95 },
        { id: 8, name: 'Charlie', subject: 'Physics', mark: 88 },
        { id: 9, name: 'Charlie', subject: 'Chemistry', mark: 91 },
        { id: 10, name: 'David', subject: 'Math', mark: 76 },
        { id: 11, name: 'David', subject: 'Physics', mark: 72 },
        { id: 12, name: 'David', subject: 'Chemistry', mark: 79 },
        { id: 13, name: 'Emma', subject: 'Math', mark: 83 },
        { id: 14, name: 'Emma', subject: 'Physics', mark: 85 },
        { id: 15, name: 'Emma', subject: 'Chemistry', mark: 80 }
    ];

    return (
        <div className='w-10/12 mx-auto'>
            <LChart width={1130} height={400} data={studentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="mark" stroke="#8884d8" />

            </LChart>
        </div>
    );
};

LineChart.propTypes = {};

export default LineChart;

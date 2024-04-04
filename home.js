import React, { useState, useEffect } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Home() {
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./data.json');
                const data = await response.json();
                setStudentData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to ensure effect runs only once on component mount

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>STUDENT DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>SUBJECT</h3>
                    </div>
                
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>SEMESTER</h3>
                    </div>
                    
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>GRADE</h3>
                    </div>
                
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={studentData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="register_number" />
                        <YAxis dataKey="credits" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="credits" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={studentData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="register_number" />
                        <YAxis dataKey="credits" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="credits" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}

export default Home;

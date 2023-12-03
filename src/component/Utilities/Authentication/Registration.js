import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const Navigation = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/register', formData);
            if (response.data.message === 'Registration successful') {
                Navigation('/login');
              } 
              else {
                console.error('Registration failed:', response.data.error);
              }
        } catch (error) {
            console.error('Registration error:', error.message);
        }
    };


    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded-md bg-gray-600">
            <h2 className="text-2xl font-bold mb-4">Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                    Register
                </button>
            </form>
            <Link className='text-blue-600 ' to="/login" >SignIn</Link>
        </div>
    );
};

export default RegistrationForm;

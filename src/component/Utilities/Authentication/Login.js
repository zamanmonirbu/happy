import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/login', formData);
            const { token } = response.data;
            if(token){
                localStorage.setItem('token', token);
                navigate('/');
            }else{
                navigate('/login')
            }
            
        } catch (error) {
            console.error('Login error:', error.message);
        }
    };
    

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded-md bg-gray-600">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin}>
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
                    Login
                </button>
            </form>
            <Link className='text-blue-600 ' to="/register" >SignUp</Link>

        </div>
    );
};

export default LoginForm;

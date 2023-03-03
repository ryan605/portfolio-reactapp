import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Signup() {
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const res = await fetch('http://localhost:4545/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await res.json();
            localStorage.setItem('token', data.token);
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </label>
            <br />
            <button type="submit">Signup</button>
        </form>
    );
}

export default Signup

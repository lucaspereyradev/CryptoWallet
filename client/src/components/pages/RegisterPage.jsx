import React, { useState } from 'react';
import AppWrap from '../Wrapper/AppWrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
    const url = 'http://localhost:5050/users/';
    const [name, setName] = useState(null);
    const [lastname, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [message, setMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            var bodyFormData = {
                first_name: name,
                last_name: lastname,
                email: email,
                password: password,
            };

            const resp = await axios.post(url, bodyFormData);

            setMessage('User created successfully!');

            setTimeout(() => {
                window.location.href = '/login';
            }, 2000);
        } catch (error) {
            setErrorMessage('Please check your informations.');
            setTimeout(() => {
                setErrorMessage(null);
            }, 7000);
        }
    };

    return (
        <div className="flex h-full flex-col items-center justify-center">
            {errorMessage && (
                <div className="mx-auto mb-2">
                    <h2 className="rounded-lg bg-red-500 px-4 py-1 text-white">{errorMessage}</h2>
                </div>
            )}
            {message && (
                <div className="mx-auto mb-2">
                    <h2 className="rounded-lg bg-green-500 px-4 py-1 text-white">{message}</h2>
                </div>
            )}
            <div className="h-[34rem] w-[12rem] rounded-lg px-4 py-8 shadow-md dark:bg-neutral-700/30 500:w-[20rem] sm:w-[25rem] sm:px-8 xl:w-[30rem]">
                <h2 className="text-center">Register</h2>
                <form className="mt-4 flex flex-col sm:mt-8" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="text-sm">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="my-2 rounded-md bg-neutral-100 px-4 py-2 focus:outline-none dark:bg-neutral-500/50"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="name" className="text-sm">
                        Lastname
                    </label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="my-2 rounded-md bg-neutral-100 px-4 py-2 focus:outline-none dark:bg-neutral-500/50"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <label htmlFor="email" className="text-sm">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="my-2 rounded-md bg-neutral-100 px-4 py-2 focus:outline-none dark:bg-neutral-500/50"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password" className="text-sm">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="my-2 rounded-md bg-neutral-100 px-4 py-2 focus:outline-none dark:bg-neutral-500/50"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="mt-4 rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80 sm:mt-8"
                    >
                        Create account
                    </button>
                    <p className="mt-8 text-sm text-neutral-700/70 dark:text-neutral-200/70">
                        If you have an account, you can{' '}
                        <Link to="/login" className="font-bold text-secondary">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default AppWrap(RegisterPage);

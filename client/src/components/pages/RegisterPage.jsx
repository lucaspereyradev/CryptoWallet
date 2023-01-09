import React from 'react';
import AppWrap from '../Wrapper/AppWrap';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <div className="h-[29rem] w-[12rem] rounded-lg px-4 py-8 shadow-md dark:bg-neutral-700/30 500:w-[20rem] sm:w-[25rem] sm:px-8 xl:w-[30rem]">
                <h2 className="text-center">Register</h2>
                <form className="mt-6 flex flex-col sm:mt-8">
                    <label htmlFor="name" className="text-sm">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="my-2 rounded-md bg-neutral-100 px-4 py-2 focus:outline-none dark:bg-neutral-500/50"
                    />
                    <label htmlFor="email" className="text-sm">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="my-2 rounded-md bg-neutral-100 px-4 py-2 focus:outline-none dark:bg-neutral-500/50"
                    />
                    <label htmlFor="password" className="text-sm">
                        Passoword
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="my-2 rounded-md bg-neutral-100 px-4 py-2 focus:outline-none dark:bg-neutral-500/50"
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

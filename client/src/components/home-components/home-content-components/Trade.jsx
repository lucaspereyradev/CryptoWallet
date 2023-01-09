import React from 'react';
import { Link } from 'react-router-dom';
import TradeComponent from './TradeComponent';

const Trade = ({ user }) => {
    return (
        <div className="relative hidden h-96 w-full flex-col items-center gap-4 overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-700/30 xl:flex">
            {user ? (
                <TradeComponent />
            ) : (
                <>
                    <TradeComponent />
                    <div className="absolute flex h-full w-full flex-col items-center justify-center gap-y-4">
                        <h2 className="text-xl">To buy or sell you need</h2>
                        <Link
                            to="/login"
                            className="rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80"
                        >
                            Sign up
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Trade;

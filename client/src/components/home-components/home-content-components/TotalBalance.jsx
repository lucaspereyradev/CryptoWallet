import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TradeComponent from './TradeComponent';
import axios from 'axios';
import { useState } from 'react';

const TotalBalance = ({ user }) => {
    const [userBalance, setUserBalance] = useState(null);

    useEffect(() => {
        if (user) {
            async function UserData() {
                const data = await axios.get(`http://localhost:5050/users/${user.id}`);
                setUserBalance(data.data.data[0].balance);
            }
            UserData();
        }
    }, []);

    console.log(userBalance);
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1">
            {user ? (
                <>
                    <div>
                        <div className="relative hidden h-80 w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-700/30 md:flex">
                            <div className="absolute bottom-44 h-24 w-24 rounded-[50%] border-4 border-solid border-primary 1xsm:bottom-40 1xsm:h-32 1xsm:w-32"></div>
                            <h4 className="mx-auto mt-24 text-sm 1xsm:mt-32 1xsm:text-lg 2xl:text-xl">
                                Total Balance
                            </h4>
                            <h4 className="mx-auto text-lg font-bold 1xsm:text-2xl 2xl:text-2xl">
                                ${userBalance}
                            </h4>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <div className="relative flex h-80 w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-700/30">
                            <div className="h-full w-full blur-[4px]"></div>
                            <div className="absolute flex h-full w-full flex-col items-center justify-center gap-y-4">
                                <h2 className="text-xl">To see your resume</h2>
                                <Link
                                    to="/login"
                                    className="rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className="relative flex h-80 w-full flex-col items-center gap-4 overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-700/30 md:flex xl:hidden">
                {user ? (
                    <>
                        <TradeComponent />
                    </>
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
        </div>
    );
};

export default TotalBalance;

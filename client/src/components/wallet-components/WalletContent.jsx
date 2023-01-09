import React, { useState, useContext, useEffect } from 'react';
import UserCoinsRow from './userCoinsRow.jsx/UserCoinsRow';
import { User } from '../../App';
import axios from 'axios';

const WalletContent = () => {
    const user = useContext(User);

    const [userBalanceWallet, setUserBalanceWallet] = useState(null);
    const [userCoins, setUserCoins] = useState([]);

    useEffect(() => {
        if (user) {
            async function UserData() {
                const data = await axios.get(`http://localhost:5050/users/${user.id}`);
                setUserBalanceWallet(data.data.data[0].balance);
            }
            UserData();
        }
    }, []);

    useEffect(() => {
        if (user) {
            async function UserCoinsData() {
                const data = await axios.get(`http://localhost:5050/users/${user.id}`);
                setUserCoins([JSON.parse(data.data.data[0].user_coins)]);
            }
            UserCoinsData();
        }
    }, []);

    console.log(userCoins);
    const tableTitles = ['Coin', 'Balance', ''];

    return (
        <div className="mt-4 flex max-h-[90vh] flex-col gap-4">
            <div className="flex h-[8rem] w-full flex-col items-center justify-center gap-4 rounded-lg bg-neutral-100 dark:bg-neutral-700/30 sm:flex-row sm:justify-between sm:px-8 2xl:px-14">
                <div className="h-full">
                    <h1 className="mt-8 text-lg">Balance</h1>
                    <span className="text-2xl font-bold">${userBalanceWallet}</span>
                </div>
            </div>
            <div className="h-[35rem] w-full rounded-lg">
                <div className="flex w-full items-center justify-between">
                    <div className="hidden w-full pr-[10rem] md:flex lg:pr-[20rem] xl:pr-[30rem] 2xl:pr-[40rem] 3xl:pr-[50rem]">
                        <h3 className="w-full text-lg">Here are your coins!</h3>
                    </div>
                    <div className="mx-auto mt-2 flex w-full items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="absolute ml-4 flex h-5 w-5 min-w-[1.25rem]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full rounded-lg bg-neutral-100 py-3 pr-4 pl-12 focus:outline-none dark:bg-neutral-700/80"
                        />
                    </div>
                </div>
                <div className="mt-4 w-full">
                    <div className="relative overflow-x-auto rounded-lg">
                        <table className="w-full table-fixed text-sm text-gray-500 dark:text-gray-400">
                            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-[#0b0e11] dark:text-white">
                                <tr>
                                    {tableTitles.map((titles, index) => {
                                        return (
                                            <td className="py-3 px-6" key={index}>
                                                {titles}
                                            </td>
                                        );
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {userCoins ? (
                                    userCoins.map((coin) => {
                                        return <UserCoinsRow userCoins={coin} bought={coin} />;
                                    })
                                ) : (
                                    <tr className="text-center">
                                        <td colSpan={3} className="py-8 pl-6">
                                            You don't have coins.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletContent;

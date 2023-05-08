import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CoinRow } from '../';

const CoinsContent = () => {
    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(1);
    let coinsFiltered = [];

    async function CoinsAxios() {
        const config = {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        };

        const res = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`,
            config
        );
        setCoins(res.data);
    }

    useEffect(() => {
        CoinsAxios();
    }, [page]);

    // if (search) {
    //     coinsFiltered = coins.filter((e) => {
    //         e.name.toLowerCase().includes(search);
    //     });
    // }

    const tableTitles = ['Coin', 'Price', 'Price Change', '24h Volume'];

    const handleNextPage = () => {
        if (page < 13) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="mt-4 max-h-[80vh]">
            <div className="relative overflow-x-auto ">
                <table className="w-full  rounded-lg text-sm text-gray-500 dark:text-gray-400">
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
                        {/* {!coinsFiltered
                            ? coins.map((coin, index) => {
                                  return <CoinRow coin={coin} key={index} index={index + 1} />;
                              })
                            : coinsFiltered.map((coin, index) => {
                                  return <CoinRow coin={coin} key={index} index={index + 1} />;
                              })} */}
                        {coins.map((coin, index) => {
                            return <CoinRow coin={coin} key={index} index={index + 1} />;
                        })}
                    </tbody>
                </table>
            </div>
            <div className="mt-6 flex items-center justify-center gap-8">
                {page > 1 && (
                    <button
                        onClick={handlePreviousPage}
                        className="rounded-md bg-primary px-1.5 py-1.5 text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                            />
                        </svg>
                    </button>
                )}
                <span>{page}</span>
                {page < 13 && (
                    <button
                        onClick={handleNextPage}
                        className="rounded-md bg-primary px-1.5 py-1.5 text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default CoinsContent;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoinRow from '../coins/CoinRow';

function HomeTableCoins() {
    const [topThreeCoins, setThreeCoins] = useState([]);
    const [topTenCoins, setTenCoins] = useState([]);

    const urlTopThreeCoins =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false';
    const urlTopTenCoins =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false';

    async function threeCoinsAxios() {
        const res = await axios.get(urlTopThreeCoins);
        setThreeCoins(res.data);
    }
    async function tenCoinsAxios() {
        const res = await axios.get(urlTopTenCoins);
        setTenCoins(res.data);
    }

    useEffect(() => {
        threeCoinsAxios();
        tenCoinsAxios();
    }, []);

    const tableTitles = ['Coin', 'Price', 'Price Change', '24h Volume'];
    return (
        <div className="relative max-h-screen overflow-x-auto sm:rounded-lg xl:-top-40">
            <table className="w-full text-sm text-gray-500 dark:text-gray-400">
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
                <tbody className="xl:hidden">
                    {topThreeCoins.map((coin, index) => {
                        return <CoinRow coin={coin} key={index} index={index + 1} />;
                    })}
                </tbody>
                <tbody className="max-xl:hidden">
                    {topTenCoins.map((coin, index) => {
                        return <CoinRow coin={coin} key={index} index={index + 1} />;
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default HomeTableCoins;

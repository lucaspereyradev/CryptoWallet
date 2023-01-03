import React from 'react';

const CoinRow = ({ coin }) => {
    return (
        <tr className="bg-white border-b dark:bg-neutral-800/20 dark:border-gray-700 text-black/90 dark:text-white">
            <td className="py-4 pl-6 flex items-center gap-3">
                <img className="min-w-[25px] max-w-[30px]" src={coin.image} alt={coin.name} />
                <span className="uppercase font-bold  dark:text-white">{coin.symbol}</span>
                <span className="text-[#707a8a] dark:text-[848e9c]">{coin.name}</span>
            </td>
            <td className="py-4 px-6">${coin.current_price}</td>
            <td
                className={
                    coin.price_change_percentage_24h > 0
                        ? 'text-green-500 dark:text-green-400 py-3 px-6'
                        : 'text-red-500 py-3 px-6'
                }
            >
                {coin.price_change_percentage_24h > 0 ? (
                    <>+{coin.price_change_percentage_24h}</>
                ) : (
                    <>{coin.price_change_percentage_24h}</>
                )}
                %
            </td>
            <td className="py-4 px-6">{coin.total_volume}M</td>
        </tr>
    );
};

export default CoinRow;

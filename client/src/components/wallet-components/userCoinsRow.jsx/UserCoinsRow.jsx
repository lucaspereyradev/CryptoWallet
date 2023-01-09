import React from 'react';

const UserCoinsRow = ({ userCoins }) => {
    return (
        <tr className="border-b bg-white text-black/90 dark:border-gray-700 dark:bg-neutral-800/20 dark:text-white">
            <td className="flex items-center gap-3 py-4 pl-6">
                <img
                    className="min-w-[25px] max-w-[30px]"
                    src={userCoins.image}
                    alt={userCoins.name}
                />
                <span className="font-bold uppercase  dark:text-white">{userCoins.symbol}</span>
                <span className="text-[#707a8a] dark:text-[848e9c]">{userCoins.name}</span>
            </td>
            <td className="py-3 px-6">{userCoins.amount}</td>
            <td className="py-3 px-6">
                <button>Buy</button>
                <button>Sell</button>
            </td>
        </tr>
    );
};

export default UserCoinsRow;

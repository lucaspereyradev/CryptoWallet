import React, { useState } from 'react';

const Trade = () => {
    const [coinSelect, setCoinSelect] = useState('');

    return (
        <div className="relative hidden h-96 w-full flex-col items-center gap-4 overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-700/30 xl:flex">
            <div className="mt-4 flex w-full justify-between gap-1 px-1.5">
                <button className="w-[9rem] min-w-[5rem] rounded-full border bg-black py-2 text-sm font-bold text-white dark:bg-white dark:text-black">
                    Buy
                </button>
                <button className="w-[9rem] min-w-[5rem] rounded-full border py-2 text-sm font-bold">
                    Sell
                </button>
                <button className="w-[11rem] min-w-[8rem] rounded-full border py-2 text-sm font-bold">
                    Exchange
                </button>
            </div>
            <div className="flex w-full flex-col gap-6 px-[0.75rem]">
                <div className="flex flex-col gap-2">
                    <label>Coin</label>
                    <select
                        className="rounded-lg py-2 px-4 focus:outline-none dark:bg-black"
                        name="coin"
                        value={coinSelect}
                        id="selectCoin"
                        onChange={(e) => setCoinSelect(e.target.value)}
                    >
                        <option value="bitcoin">Bitcoin</option>
                        <option value="ethereum">Ethereum</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        className="rounded-lg py-2 px-4 focus:outline-none dark:bg-black"
                    />
                </div>
            </div>
            <div className="mt-5 flex w-full justify-between px-[0.75rem]">
                <h2 className="text-neutral-500 dark:text-neutral-400">Total:</h2>
                <h2 className="font-bold text-neutral-900 dark:text-white">$1342</h2>
            </div>
            <div className="w-full px-[0.75rem] text-white">
                <button className="w-full rounded-lg bg-black py-2 font-bold transition-colors hover:bg-black/90">
                    Buy <span className="capitalize">{coinSelect}</span>
                </button>
            </div>
        </div>
    );
};

export default Trade;

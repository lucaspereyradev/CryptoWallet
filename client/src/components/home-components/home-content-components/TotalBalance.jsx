import React, { useState } from 'react';

const TotalBalance = () => {
    const [coinSelect, setCoinSelect] = useState('');

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1">
            <div className="relative flex h-80 w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-700/30">
                <div className="absolute bottom-44 h-24 w-24 rounded-[50%] border-4 border-solid border-primary 1xsm:bottom-40 1xsm:h-32 1xsm:w-32"></div>
                <h4 className="mx-auto mt-24 text-sm 1xsm:mt-32 1xsm:text-lg 2xl:text-xl">
                    Total Balance
                </h4>
                <h4 className="mx-auto text-lg font-bold 1xsm:text-2xl 2xl:text-2xl">$2000</h4>
            </div>

            <div className="relative hidden h-80 w-full flex-col items-center gap-4 overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-700/30 md:flex xl:hidden">
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
                <div className="flex w-full flex-col gap-1 px-[0.75rem]">
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
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        className="rounded-lg py-2 px-4 focus:outline-none dark:bg-black"
                    />
                </div>
                <div className="flex w-full justify-between px-[0.75rem]">
                    <h2 className="text-neutral-500 dark:text-neutral-400">Total:</h2>
                    <h2 className="font-bold text-neutral-900 dark:text-white">$1342</h2>
                </div>
                <div className="w-full px-[0.75rem] text-white">
                    <button className="w-full rounded-lg bg-black py-2 font-bold transition-colors hover:bg-black/90">
                        Buy <span className="capitalize">{coinSelect}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TotalBalance;

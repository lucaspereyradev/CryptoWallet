import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const TradeComponent = () => {
    const url =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const [coins, setCoins] = useState([]);

    const [btnBuyIsActive, setBtnBuyIsActive] = useState(true);
    const [btnSellIsActive, setBtnSellIsActive] = useState(false);

    useEffect(() => {
        async function Coins() {
            const coins = await axios.get(url);
            setCoins(coins.data);
        }
        Coins();
    }, []);

    return (
        <>
            <div className="mt-4 flex w-full justify-around gap-1 overflow-x-auto px-1.5">
                <button
                    onClick={() => {
                        setBtnBuyIsActive(true);
                        setBtnSellIsActive(false);
                    }}
                    className={`w-[45%] rounded-full ${
                        btnBuyIsActive
                            ? 'bg-tertiary text-black'
                            : 'border text-black dark:text-white'
                    } py-2 text-sm font-bold`}
                >
                    Buy
                </button>
                <button
                    onClick={() => {
                        setBtnBuyIsActive(false);
                        setBtnSellIsActive(true);
                    }}
                    className={`w-[45%] rounded-full ${
                        btnSellIsActive
                            ? 'bg-tertiary text-black'
                            : 'border text-black dark:text-white'
                    } py-2 text-sm font-bold`}
                >
                    Sell
                </button>
            </div>
            {btnBuyIsActive && (
                <>
                    <div className="flex w-full flex-col gap-6 px-[0.75rem] max-xl:gap-1">
                        <div className="flex flex-col gap-2">
                            <label>Coin</label>
                            <Select
                                classNames="rounded-lg py-2 px-4 focus:outline-none dark:bg-black"
                                name="coin"
                                id="selectCoin"
                                defaultValue={{ label: 'Select a coin to buy...', value: '' }}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="number"
                                className="rounded-lg py-2 px-4 focus:outline-none dark:bg-black"
                            />
                        </div>
                    </div>
                    <div className="mt-5 flex w-full justify-between px-[0.75rem] max-xl:mt-0">
                        <h2 className="text-neutral-500 dark:text-neutral-400">Total:</h2>
                        <h2 className="font-bold uppercase text-neutral-900 dark:text-white"></h2>
                    </div>
                    <div className="w-full px-[0.75rem] text-white">
                        <button className="w-full rounded-lg bg-primary py-2 font-bold transition-colors hover:bg-primary/90">
                            Buy <span className="capitalize"></span>
                        </button>
                    </div>
                </>
            )}

            {btnSellIsActive && (
                <>
                    <div className="flex w-full flex-col gap-6 px-[0.75rem] max-xl:gap-1">
                        <div className="flex flex-col gap-2">
                            <label>Coin</label>
                            <Select
                                classNames="rounded-lg py-2 px-4 focus:outline-none dark:bg-black"
                                name="coin"
                                id="selectCoin"
                                defaultValue={{ label: 'Select a coin to sell...', value: '' }}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="number"
                                className="rounded-lg py-2 px-4 focus:outline-none dark:bg-black"
                            />
                        </div>
                    </div>
                    <div className="mt-5 flex w-full justify-between px-[0.75rem] max-xl:mt-0">
                        <h2 className="text-neutral-500 dark:text-neutral-400">Total:</h2>
                        <h2 className="font-bold uppercase text-neutral-900 dark:text-white"></h2>
                    </div>
                    <div className="w-full px-[0.75rem] text-white">
                        <button className="w-full rounded-lg bg-primary py-2 font-bold transition-colors hover:bg-primary/90">
                            Sell <span className="capitalize">{coinSelectToSell.name}</span>
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default TradeComponent;

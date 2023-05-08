import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { User } from '../../../App';

const TradeComponent = () => {
    const user = useContext(User);

    const url =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const [coins, setCoins] = useState([]);
    const [coinSelectToBuy, setCoinSelectToBuy] = useState([]);
    const [coinSelectToSell, setCoinSelectToSell] = useState([]);
    const [userCoins, setUserCoins] = useState(null);

    const [amount, setAmount] = useState(0);
    const [userBalanceDB, setUserBalanceDB] = useState(null);
    const [cantBought, setCantBought] = useState(null);
    const [cantSelled, setCantSelled] = useState(null);

    const [btnBuyIsActive, setBtnBuyIsActive] = useState(true);
    const [btnSellIsActive, setBtnSellIsActive] = useState(false);

    useEffect(() => {
        async function Coins() {
            const coins = await axios.get(url);
            setCoins(coins.data);
        }
        Coins();
    }, []);

    useEffect(() => {
        async function UserData() {
            const data = await axios.get(`http://localhost:5050/users/${user.id}`);
            setUserBalanceDB(data.data.data[0].balance);
        }
        UserData();
    }, []);

    useEffect(() => {
        async function UserCoinsData() {
            const data = await axios.get(`http://localhost:5050/users/${user.id}`);
            setUserCoins([JSON.parse(data.data.data[0].user_coins)]);
        }
        UserCoinsData();
    }, []);

    const handleSelectChangeToBuy = (event) => {
        setCoinSelectToBuy(event.value);
    };

    const handleSelectChangeToSell = (event) => {
        setCoinSelectToSell(event.value);
    };

    useEffect(() => {
        setCantBought((amount / coinSelectToBuy.current_price).toFixed(4));
    }, [amount, coinSelectToBuy]);

    useEffect(() => {
        setCantSelled((amount * coinSelectToSell.current_price).toFixed(4));
    }, [amount, coinSelectToSell]);

    async function handleSubmitBuy() {
        const send = await axios.put(`http://localhost:5050/users/${user.id}`, {
            balance: userBalanceDB - amount,
            user_coins: coinSelectToBuy,
        });
        alert('Crypto bought successfully! Check your wallet!');
    }

    async function handleSubmitSell() {
        const send = await axios.put(`http://localhost:5050/users/${user.id}`, {
            balance: userBalanceDB + amount,
            user_coins: coinSelectToSell,
        });
    }

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
                                options={coins.map((coin) => ({ label: coin.name, value: coin }))}
                                onChange={handleSelectChangeToBuy}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="number"
                                className="rounded-lg py-2 px-4 focus:outline-none dark:bg-black"
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="mt-5 flex w-full justify-between px-[0.75rem] max-xl:mt-0">
                        <h2 className="text-neutral-500 dark:text-neutral-400">Total:</h2>
                        <h2 className="font-bold uppercase text-neutral-900 dark:text-white">
                            <span>{cantBought}</span> {coinSelectToBuy.symbol}
                        </h2>
                    </div>
                    <div className="w-full px-[0.75rem] text-white" onClick={handleSubmitBuy}>
                        <button className="w-full rounded-lg bg-primary py-2 font-bold transition-colors hover:bg-primary/90">
                            Buy <span className="capitalize">{coinSelectToBuy.name}</span>
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
                                options={
                                    userCoins === null
                                        ? { label: "You don't have coins to sell." }
                                        : userCoins.map((coin) => ({
                                              label: coin.name,
                                              value: coin,
                                          }))
                                }
                                onChange={handleSelectChangeToSell}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="number"
                                className="rounded-lg py-2 px-4 focus:outline-none dark:bg-black"
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="mt-5 flex w-full justify-between px-[0.75rem] max-xl:mt-0">
                        <h2 className="text-neutral-500 dark:text-neutral-400">Total:</h2>
                        <h2 className="font-bold uppercase text-neutral-900 dark:text-white">
                            <span>{cantSelled}</span> {coinSelectToSell.symbol}
                        </h2>
                    </div>
                    <div className="w-full px-[0.75rem] text-white" onClick={handleSubmitSell}>
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

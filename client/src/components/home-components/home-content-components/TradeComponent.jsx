import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { User } from '../../../App';
import TotalBalance from './TotalBalance';

const TradeComponent = () => {
    const user = useContext(User);

    const url =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const [coinSelect, setCoinSelect] = useState([]);
    const [coins, setCoins] = useState([]);
    const [userBalanceDB, setUserBalanceDB] = useState(null);
    const [amount, setAmount] = useState(0);
    const [cantBought, setCantBought] = useState(null);

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

    console.log(userBalanceDB);
    const handleSelectChange = (event) => {
        setCoinSelect(event.value);
    };

    useEffect(() => {
        setCantBought((amount / coinSelect.current_price).toFixed(4));
    }, [amount, coinSelect]);

    async function handleSubmit() {
        const send = await axios.put(`http://localhost:5050/users/${user.id}`, {
            balance: userBalanceDB - amount,
            user_coins: coinSelect,
        });
        console.log(send);
    }

    return (
        <>
            <div className="mt-4 flex w-full justify-between gap-1 overflow-x-auto px-1.5">
                <button className="w-[9rem] min-w-[5rem] rounded-full bg-tertiary py-2 text-sm font-bold text-black dark:text-black">
                    Buy
                </button>
                <button className="w-[9rem] min-w-[5rem] rounded-full border py-2 text-sm font-bold">
                    Sell
                </button>
                <button className="w-[11rem] min-w-[8rem] rounded-full border py-2 text-sm font-bold">
                    Exchange
                </button>
            </div>
            <div className="flex w-full flex-col gap-6 px-[0.75rem] max-xl:gap-1">
                <div className="flex flex-col gap-2">
                    <label>Coin</label>
                    <Select
                        classNames="rounded-lg py-2 px-4 focus:outline-none dark:bg-black"
                        name="coin"
                        id="selectCoin"
                        defaultValue={{ label: 'Select a coin...', value: '' }}
                        options={coins.map((coin) => ({ label: coin.name, value: coin }))}
                        onChange={handleSelectChange}
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
                    <span>{cantBought}</span> {coinSelect.symbol}
                </h2>
            </div>
            <div className="w-full px-[0.75rem] text-white" onClick={handleSubmit}>
                <button className="w-full rounded-lg bg-primary py-2 font-bold transition-colors hover:bg-primary/90">
                    Buy <span className="capitalize">{coinSelect.name}</span>
                </button>
            </div>
        </>
    );
};

export default TradeComponent;

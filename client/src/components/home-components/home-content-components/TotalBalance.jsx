import TradeComponent from './TradeComponent';

const TotalBalance = () => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1">
            <div>
                <div className="relative hidden h-80 w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-700/30 md:flex">
                    <div className="absolute bottom-44 h-24 w-24 rounded-[50%] border-4 border-solid border-primary object-cover 1xsm:bottom-40 1xsm:h-32 1xsm:w-32">
                        <img src="avatar.png" className="h-full w-full" alt="" />
                    </div>
                    <h4 className="mx-auto mt-24 text-sm 1xsm:mt-32 1xsm:text-lg 2xl:text-xl">
                        Total Balance
                    </h4>
                    <h4 className="mx-auto text-lg font-bold 1xsm:text-2xl 2xl:text-2xl">
                        $200.000 USD
                    </h4>
                </div>
            </div>

            <div className="relative flex h-80 w-full flex-col items-center gap-4 overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-700/30 md:flex xl:hidden">
                <TradeComponent />
            </div>
        </div>
    );
};

export default TotalBalance;

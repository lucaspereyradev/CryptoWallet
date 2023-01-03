import React from 'react';

const Banner = () => {
    return (
        <div className="relative flex h-32 w-full items-center justify-center overflow-hidden rounded-md bg-black dark:bg-primary md:h-40">
            <h1 className="text-md mx-4 py-5 px-2 text-left text-white 1xsm:text-xl sm:text-2xl">
                CryptoWallet has arrived, the exchange that feels better.
            </h1>

            <img
                className="absolute left-10 bottom-9 z-10 h-16 w-16 rounded-[50%] opacity-10 1xsm:left-20 1xsm:h-20 1xsm:w-20 md:bottom-10 md:left-10 md:h-36 md:w-36"
                src="/logo-responsive.png"
                alt="logo"
            />
            <img
                className="absolute left-36 -bottom-5 z-10 h-16 w-16 rounded-[50%] opacity-10 1xsm:-bottom-9 1xsm:left-52 1xsm:h-20 1xsm:w-20 md:-bottom-20 md:h-36 md:w-36"
                src="/logo-responsive.png"
                alt="logo"
            />
            <img
                className="absolute bottom-16 left-64 z-10 h-16 w-16 rounded-[50%] opacity-10 1xsm:bottom-16 1xsm:left-80 1xsm:flex 1xsm:h-20 1xsm:w-20 md:left-96 md:h-36 md:w-36"
                src="/logo-responsive.png"
                alt="logo"
            />
            <img
                className="absolute bottom-2 left-[40rem] z-10 h-36 w-36 rounded-[50%] opacity-10"
                src="/logo-responsive.png"
                alt="logo"
            />
            <img
                className="absolute -bottom-12 left-[57rem] z-10 h-36 w-36 rounded-[50%] opacity-10"
                src="/logo-responsive.png"
                alt="logo"
            />
        </div>
    );
};

export default Banner;

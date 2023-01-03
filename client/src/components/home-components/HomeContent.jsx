import React from 'react';
import Banner from './home-content-components/Banner';
import TotalBalance from './home-content-components/TotalBalance';
import HomeTableCoins from './home-content-components/HomeTableCoins';
import Trade from './home-content-components/Trade';

const HomeContent = () => {
    return (
        <div className="mt-4 grid max-h-80 grid-cols-1 gap-4 xl:grid-cols-[800px,_1fr] 2xl:grid-cols-[1200px,_1fr]">
            <Banner />
            <TotalBalance />
            <HomeTableCoins />
            <Trade />
        </div>
    );
};

export default HomeContent;

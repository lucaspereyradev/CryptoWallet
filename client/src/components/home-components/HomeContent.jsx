import React, { useContext } from 'react';
import { User } from '../../App';

import Banner from './home-content-components/Banner';
import TotalBalance from './home-content-components/TotalBalance';
import HomeTableCoins from './home-content-components/HomeTableCoins';
import Trade from './home-content-components/Trade';

const HomeContent = () => {
    const user = useContext(User);

    return (
        <div className="mt-4 grid max-h-80 grid-cols-1 gap-4 xl:grid-cols-[800px,_1fr] 2xl:grid-cols-[1200px,_1fr]">
            <Banner />
            <TotalBalance user={user} />
            <HomeTableCoins />
            <Trade user={user} />
        </div>
    );
};

export default HomeContent;

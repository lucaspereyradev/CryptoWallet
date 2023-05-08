import React from 'react';
import { Header, CoinsContent, AppWrap } from '../components';

const CoinsPage = () => {
    return (
        <>
            <Header title="Coins" />
            <CoinsContent />
        </>
    );
};

export default AppWrap(CoinsPage);

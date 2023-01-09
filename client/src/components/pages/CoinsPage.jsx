import React from 'react';
import AppWrap from '../Wrapper/AppWrap';
import CoinsContent from '../coins-components/CoinsContent';
import Header from '../essential-components/Header';

const CoinsPage = () => {
    return (
        <>
            <Header title="Coins" />
            <CoinsContent />
        </>
    );
};

export default AppWrap(CoinsPage);

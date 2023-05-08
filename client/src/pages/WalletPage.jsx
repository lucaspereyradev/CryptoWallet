import React from 'react';
import Header from '../components/essential-components/Header';
import WalletContent from '../components/wallet-components/WalletContent';
import AppWrap from '../components/Wrapper/AppWrap';

const WalletPage = () => {
    return (
        <>
            <Header title="Wallet" />
            <WalletContent />
        </>
    );
};

export default AppWrap(WalletPage);

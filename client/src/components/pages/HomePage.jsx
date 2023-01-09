import HomeContent from '../home-components/HomeContent';
import HomeTableCoins from '../home-components/home-content-components/HomeTableCoins';
import AppWrap from '../Wrapper/AppWrap';
import Header from '../essential-components/Header';

function HomePage() {
    return (
        <>
            <Header title="Overview" />
            <HomeContent />
        </>
    );
}

export default AppWrap(HomePage);

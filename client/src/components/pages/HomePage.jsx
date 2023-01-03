import HomeContent from '../home-components/HomeContent';
import HomeHeader from '../home-components/HomeHeader';
import HomeTableCoins from '../home-components/home-content-components/HomeTableCoins';

function HomePage() {
    return (
        <div className="float-right h-screen w-[83%] px-4 lg:w-[86%] lg:px-10">
            <HomeHeader />
            <HomeContent />
        </div>
    );
}

export default HomePage;

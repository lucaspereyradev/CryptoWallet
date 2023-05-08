import { Header, HomeContent } from '../components';
import { AppWrap } from '../components';

function HomePage() {
    return (
        <>
            <Header title="Overview" />
            <HomeContent />
        </>
    );
}

export default AppWrap(HomePage);

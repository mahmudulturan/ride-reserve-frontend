import { FC } from 'react';
import Banner from './components/Banner/Banner';

const HomePage: FC = () => {
    return (
        <div style={{ height: "calc(100vh - 84px)" }}>
            <Banner />
        </div>
    );
};

export default HomePage;
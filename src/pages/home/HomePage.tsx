import { FC } from 'react';
import Banner from './components/Banner/Banner';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection/WhyChooseUsSection';
// import FeaturedCars from './components/FeaturedCars/FeaturedCars';

const HomePage: FC = () => {
    return (
        <div style={{ minHeight: "calc(100vh - 84px)" }}>
            <Banner />
            {/* <FeaturedCars /> */}
            <WhyChooseUsSection />
            <TestimonialsSection />
        </div>
    );
};

export default HomePage;
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Logo: FC = () => {
    return (
        <Link to={'/'}>
            <h3 className='uppercase font-bold text-2xl md:text-3xl'><span className='text-primaryColorLight dark:text-primaryColor'>Ride</span> Reserve</h3>
        </Link>
    );
};

export default Logo;
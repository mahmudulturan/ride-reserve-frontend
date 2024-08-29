import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { Button } from '../../button';
const navlinks = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
];
const Navbar: FC = () => {

    return (
        <div className='sticky backdrop-blur-xl z-50 bg-black/60'>
            <div className='wrapper py-6 flex items-center justify-between'>
                <div>
                    <Link to={'/'}>
                        <h3 className='uppercase font-bold text-3xl'><span className='text-primaryColor'>Ride</span> Reserve</h3>
                    </Link>
                </div>
                <div className='flex items-center gap-6'>
                    {
                        navlinks.map((link, index) => (
                            <NavLink key={index}
                                className={({ isActive }) => isActive ? styles.active : styles.default} to={link.path}>
                                {link.name}
                            </NavLink>
                        ))
                    }
                    <Link to={'/login'}>
                        <Button variant={"secondary"}>Login</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
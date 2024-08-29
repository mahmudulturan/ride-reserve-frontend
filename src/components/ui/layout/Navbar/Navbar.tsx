import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
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
        <div className='wrapper py-6 flex items-center justify-between sticky bg-black/70'>
            <div>
                <h3 className='uppercase font-bold text-3xl'><span className='text-primaryColor'>Ride</span> Reserve</h3>
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
            </div>
        </div>
    );
};

export default Navbar;
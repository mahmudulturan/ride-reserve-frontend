import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { Button } from '@/components/ui/button';
import Logo from '@/components/shared/Logo';
import MenuButton from './MenuButton';
import ModeToggle from './ModeToggle';
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const manuToggler = () => setIsMenuOpen(!isMenuOpen);
    return (
        <div className='sticky top-0 backdrop-blur-xl z-50 bg-black/60'>
            <div className='wrapper py-6 flex items-center justify-between overflow-hidden'>
                <div>
                    <Logo />
                </div>
                <div className='md:flex items-center gap-6 hidden'>
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
                    <ModeToggle />
                </div>
                <MenuButton manuToggler={manuToggler} className='md:hidden' />
                <div className={`flex flex-col absolute top-[96px] right-0 backdrop-blur-2xl bg-black/90 rounded-b-md px-3 w-3/4 gap-3 py-3 md:hidden ${isMenuOpen ? ' scale-x-100' : 'scale-x-0'} origin-right transition-all duration-300`}>
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
        </div>
    );
};

export default Navbar;
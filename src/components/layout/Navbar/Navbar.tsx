import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ModeToggle from './ModeToggle';
import Logo from '@/components/shared/Logo';
import MenuButton from './MenuButton';
import styles from './navbar.module.css';
import { useAppSelector } from '@/redux/hook';
import { privateNavlinks, publicNavlinks } from '@/constants';


const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { isAuthenticate, user } = useAppSelector((state) => state.authSlice);

    const navlinks = isAuthenticate ? privateNavlinks : publicNavlinks;

    const menuToggler = () => setIsMenuOpen(!isMenuOpen);
    return (
        <div className='sticky top-0 backdrop-blur-xl z-50 bg-white/60 dark:bg-black/60'>
            <div className='wrapper py-3 md:py-6 flex items-center justify-between overflow-hidden'>
                <div>
                    <Logo />
                </div>
                <div className='md:flex items-center gap-6 hidden'>
                    {
                        navlinks.map((link, index) => (
                            <NavLink key={index}
                                className={({ isActive }) => isActive ? 'text-primaryColorLight dark:text-primaryColor' : 'hover:text-primaryColorLight dark:hover:text-primaryColor'} to={link.path}>
                                {link.name}
                            </NavLink>
                        ))
                    }
                    {
                        isAuthenticate ?
                            <NavLink
                                className={({ isActive }) => isActive ? 'text-primaryColorLight dark:text-primaryColor' : 'hover:text-primaryColorLight dark:hover:text-primaryColor'} to={user?.role === 'admin' ? '/dashboard/admin/overview' : '/dashboard/user/overview'}>
                                Dashboard
                            </NavLink>
                            :
                            <Link to={'/login'}>
                                <Button variant={"secondary"}>Login</Button>
                            </Link>

                    }
                    <ModeToggle />
                </div>
                <div className='flex items-center gap-3 md:hidden'>
                    <ModeToggle />
                    <MenuButton open={isMenuOpen} menuToggler={menuToggler} className='md:hidden' />
                </div>
                <div className={`flex flex-col absolute top-[96px] right-0 backdrop-blur-2xl bg-white/90 dark:bg-black/90 rounded-b-md px-3 w-3/4 gap-3 py-3 md:hidden ${isMenuOpen ? ' scale-x-100' : 'scale-x-0'} origin-right transition-all duration-300`}>
                    {
                        navlinks.map((link, index) => (
                            <NavLink key={index}
                                className={({ isActive }) => isActive ? styles.active : styles.default} to={link.path}>
                                {link.name}
                            </NavLink>
                        ))
                    }
                    {
                        isAuthenticate ?
                            <NavLink
                                className={({ isActive }) => isActive ? 'text-primaryColorLight dark:text-primaryColor' : 'hover:text-primaryColorLight dark:hover:text-primaryColor'}
                                to={user?.role === 'admin' ? '/dashboard/admin/overview' : '/dashboard/user/overview'}
                            >
                                Dashboard
                            </NavLink>
                            :
                            <Link to={'/login'}>
                                <Button variant={"secondary"}>Login</Button>
                            </Link>

                    }
                </div>
            </div>
            {
                user?.isBlocked &&
                <div className='text-center py-1 bg-red-500'>
                    User is blocked! You can't perform any action on this account.
                </div>
            }
        </div>
    );
};

export default Navbar;

import { navItems } from '../constants';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import memelogonav from '../assets/memelogonav.png'
import Signin from './Signin/Signin';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [showSignin, setShowSignin] = useState(false); // State for displaying Signin component

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <div className="sticky top-0 z-50 py-3 border-b backdrop-blur-lg border-neutral-700/80">
            <div className="container relative px-4 mx-auto text-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-shrink-0">
                        <img className="w-10 h-10 mr-2" src={memelogonav} alt="MEME_Generate" />
                        <span className='text-xl tracking-tight'>MEME_Generate</span>
                    </div>
                    <ul className='hidden space-x-12 lg:flex ml-14'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='items-center justify-center hidden space-x-12 lg:flex'>
                        <button
                            className='px-3 py-2 border rounded-md'
                            onClick={() => setShowSignin(!showSignin)}
                        >
                            Sign In
                        </button>
                        <a href='#' className='bg-gradient-to-r from-[#F9E15C] to-[#E68C01] py-2 px-3 rounded-md'>
                            Create an account
                        </a>
                    </div>
                    <div className='flex-col justify-end lg:hidden md:flex'>
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className='fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 bg-neutral-900 lg:hidden'>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <br />
                        <div className='flex space-x-6'>
                            <button
                                className='px-3 py-2 border rounded-md'
                                onClick={() => setShowSignin(!showSignin)}
                            >
                                Sign In
                            </button>
                            <a href='#' className='bg-gradient-to-r from-[#F9E15C] to-[#E68C01] py-2 px-3 rounded-md'>
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* Signin Modal */}
            {showSignin && (
                <div className='fixed inset-0 z-30 flex mt-[400px] items-center justify-center bg-opacity-50 bg-neutral-900'>
                    <div className='bg-black bg-opacity-50 p-10 rounded-lg shadow-lg max-h-[90vh] w-full '>
                        <Signin />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;

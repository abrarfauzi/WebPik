import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome, FaUser, FaHeart, FaSearch, FaPencilAlt, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import { BiMoon, BiSun } from 'react-icons/bi';
import logo from '../assets/images/logo.png'
import { useLogoutMutation } from '../store/slices/usersApiSlice'
import { logout } from '../store/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
// import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
import { setDarkMode } from '../store/slices/darkSlice';

const Header = () => {

    const { userInfo } = useSelector((state) => state.auth);
    const { isDarkMode } = useSelector((state) => state.dark );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApi] = useLogoutMutation();

    useEffect(()=>{
        if (isDarkMode === 'true') {
            window.document.documentElement.classList.add('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        window.document.documentElement.classList.toggle('dark');
        dispatch(setDarkMode(String(window.document.documentElement.classList.contains('dark'))));
    };

    const logoutHandler = async () => {
        try {
            await logoutApi().unwrap();
            dispatch(logout());
            navigate('/login');
            toast.success("Logged Out Successfully")
        } catch (err) {
            console.log(err.err);
        }
    }
    return (
        <>
        {/* <Navbar>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img src={logo} className="size-24 items-start" alt='PIK' ></img>
                            PIK
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Collapse>
                        <LinkContainer to="/" className=" hover:opacity-90">
                            <FaHome className='inline mx-2' />Home
                        </LinkContainer>
                    </Navbar.Collapse>
                </Container>

            </Navbar> */}
        <header className="sticky top-0 z-10 bg-header dark:bg-gray-400 text-white h-20">
            <section className="container flex items-center justify-content-between">
                <h1 className="text-3xl font-medium">
                    <Link to="/">
                        <img src={logo} className="size-24 items-start" alt='PIK' ></img>
                    </Link>
                </h1>
                <div>
                    {/* <button id="hamburger-button" className="relative h-8 w-8 cursor-pointer text-3xl md:hidden">

                        <div
                            className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
                        </div>
                    </button> */}
                    <nav className="flex flex-wrap space-x-8 text-xl md:block dark:text-black" aria-label="main">
                        <Link to="/" className=" hover:opacity-90">
                            <FaHome className='inline mx-2' />Home
                        </Link>
                        <Link to="/favorite" className="hover:opacity-90">
                            <FaHeart className='inline mx-2' />Favorite
                        </Link>
                        <Link to="/postat" className="hover:opacity-90">
                            <FaPencilAlt className='inline mx-2' />post Ad
                        </Link>
                        {/* <!--<a href="#contact" className="hover:opacity-90">❔</a>--> */}
                        <Link to="/search" className="hover:opacity-90">
                            <FaSearch className='inline mx-2' />Search
                        </Link>


                        {userInfo ? (
                            <>
                                <Link to="/profile" className="hover:opacity-90">
                                    <FaUserCircle className='inline mx-2' />{userInfo.firstName}
                                </Link>
                                <Link onClick={logoutHandler} className='hover: opacity-90'>
                                    <FaSignOutAlt className='inline mx-2' /> Signout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/profile" className="hover:opacity-90">
                                    <FaUserCircle className='inline mx-2' />Profile
                                </Link>
                                <Link to='/login' className='hover: opacity-90'>
                                    <FaUser className='inline mx-2' /> Sign In
                                </Link>
                            </>
                        )}

                        <Button onClick={toggleDarkMode} className=' rounded-full dark:text-black hover:opacity-90'>
                            <BiSun className='hidden dark:block' />
                            <BiMoon className='dark:hidden' />
                        </Button>
                    </nav>
                </div>
            </section>
            {/* <section id="mobile-menu"
                className="top-68 justify-center absolute hidden w-full origin-top animate-open-menu flex-col bg-black text-5xl">
                <nav className="flex min-h-screen flex-col items-center py-8" aria-label="mobile">
                    <a href="#hero" className="w-full py-6 text-center hover:opacity-90">Home</a>
                    <a href="#favorite" className="hover:opacity-90">Favorite 🤍</a>
                    <a href="#Post Ad" className="hover:opacity-90">post Ad 📝</a>
                    <a href="#contact" className="hover:opacity-90">❔</a>
                    <a href="#Search" className="hover:opacity-90">Search 🔍</a>
                    <a href="#MyProfile" className="hover:opacity-90"><img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src=".\img\profile_3106921.png" alt="" />
                    </a>
                </nav>
            </section> */}
        </header >
        </>
    )
}

export default Header
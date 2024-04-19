import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaSearch, FaPencilAlt } from 'react-icons/fa'
import footer from '../assets/images/footer.png'
import {useSelector} from 'react-redux'

const Footer = () => {
    const { isDarkMode } = useSelector((state) => state.dark );
    return (
        <footer id="footer" className="relative text-xl text-white dark:bg-gray-400">
            {isDarkMode==='false'?(
            <img src={footer}
            alt='Footer'
            style={{
                position: 'absolute',
                zIndex: -999,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                height: '200px',
                width:"100%",
                // display: 'none',
            }} />):(<></>)}
            <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between dark:text-black">
                <address>
                    <h2>Real Estate .</h2>
                    500,000+ Property<br />
                    Israel, Akko 11/76<br />
                    Email:
                    <a href="mailto:inquiries@acmerockets.com">Inquires@PIK.com</a><br />
                    Phone: <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
                    <Link to="/" className=" hover:opacity-90">
                        <FaHome className='inline mx-2' />Home
                    </Link>
                    <Link to="/postat" className="hover:opacity-90">
                        <FaPencilAlt className='inline mx-2' />post Ad
                    </Link>
                    {/* <!--<a href="#contact" className="hover:opacity-90">❔</a>--> */}
                    <Link to="#search" className="hover:opacity-90">
                        <FaSearch className='inline mx-2' />Search
                    </Link>
                </nav>
                <div className="flex flex-col sm:gap-2">
                    <p className="text-right">Copyright &copy; <span id="year">2024</span></p>
                    <p className="text-right">All Rights Reserved</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer
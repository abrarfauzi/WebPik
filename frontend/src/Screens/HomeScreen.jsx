//import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
// import estates from '../estate'
import EstateCard from '../components/EstateCard';
import Loader from '../components/Loader';
import building from "../assets/images/hero_building.png";
import { useGetEstatesQuery } from '../store/slices/estatesApiSlice';
import { FaUser, FaUserCircle } from 'react-icons/fa'
import svg from '../assets/decoration-star.svg'

const HomeScreen = () => {

    const { data: estates, isLoading, error } = useGetEstatesQuery();
    console.log(estates)

    return (
        <>
            {isLoading ? (<Loader />) : error ? (<div>error?.data?.message || error.error</div>) : (
                <>
                    <section id="hero"
                        className="container flex sm:flex-row">
                        <article className="relative sm:w-1/2 gap-4 mt-8 w3-animate-left">
                            <h2 className="max-w-md basis-1/2 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
                                Descover Your
                                <span className="text-stone-500 dark:text-indigo-300">  Dream Place</span>
                            </h2>
                            
                            <p className="mt-4 max-w-md text-center text-2xl text-stone-700 dark:text-slate-400 sm:text-left">
                                Discover your ideal place with our user-friendly renting real estate website, offering a seamless and efficient platform to browse,
                                compare, and secure rental properties tailored to your preferences...
                            </p>
                            <nav className="flex items-center mr-20" aria-label="mobile">
                                <Link 
                                to='/login'
                                style={{zIndex:1}} 
                                className="w3-animate-bottom flex-1 py-6 text-center hover:opacity-90 text-2xl text-danger">
                                    <FaUser className='inline mx-2' />Log In
                                </Link>
                                <Link 
                                to="/signup"
                                style={{zIndex:1}} 
                                className="w3-animate-bottom flex-1 py-6 text-center hover:opacity-90 text-danger text-2xl">
                                    <FaUserCircle className='inline mx-2' />Sign Up
                                </Link>
                            </nav>
                            <img src={svg} className='w3-spin' alt='svg'
                                style={{
                                    position: 'absolute',
                                    width: "500px",
                                    left: "-10%",
                                    zIndex: 0,
                                }}
                            />
                            <img src={svg} className='w3-spin w3-anmate-fading' alt='svg'
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    top: "60px",
                                    width: "500px",
                                    right: "-10%",
                                    zIndex: 0,
                                }}
                            />
                            <img src={svg} className='w3-spin' alt='svg'
                                style={{
                                    position: 'absolute',
                                    top: "-90px",
                                    width: "500px",
                                    left: "-40%",
                                    zIndex: 0,
                                }}
                            />
                        </article>
                        <img
                            style={{
                                position: 'relative',
                                top: '-160px'
                            }}
                            className="w-1/2 bg-right-top w3-animate-top"
                            src={building} alt="Building" />
                    </section>
                    <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
                    <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
                    <h1 className='text-4xl font-semibold text-info'>Latest Real Estates</h1>
                    <Row>
                        {estates.map((estate) => (
                            <Col key={estate._id} sm={12} md={6} lg={4} xl={3} >
                                <EstateCard item={estate} />
                            </Col>
                        ))}
                    </Row>
                    {/* <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                        <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" 
                        style={{clipPath: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)}}></div>
                    </div> */}
                </>
            )}
        </>
    )
}

export default HomeScreen;
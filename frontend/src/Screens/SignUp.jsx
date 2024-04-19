import React, { useState } from 'react'
import Loader from '../components/Loader';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useRegisterMutation } from '../store/slices/usersApiSlice'
import { useNavigate } from 'react-router-dom'
import { setCredentials } from '../store/slices/authSlice';

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [register, { isLoading }] = useRegisterMutation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signupHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            const res = await register({
                firstName,
                lastName,
                password,
                email,
                phoneNumber
            }).unwrap();
            dispatch(setCredentials({ ...res }));
            toast.success("User Register Success")
            navigate('/login');
            
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }
    return (
        <section id="Sign Up" className="w3-animate-zoom widescreen:section-min-height tallscreen:section-min-height p-6">
            <h2 className=" text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">

            </h2>
            <div className="isolate bg-white px-6 sm:py-32 lg:px-8">
               
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sign Up</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Create a new account.</p>
                </div>
                <form method="POST" className="mx-auto mt-3 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    value={firstName}
                                    placeholder='Enter your firstname'
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    value={lastName}
                                    placeholder='Enter your lastname'
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    placeholder='Enter your email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter your Password'
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder='Enter your Password'
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                            <div className="mt-2">
                                {/* <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label for="country" className="sr-only">Country</label>
                                    <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                        <option>IL</option>
                                        <option>US</option>
                                        <option>EU</option>
                                    </select>
                                    <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                    </svg>
                                </div> */}
                                <input
                                    type="tel"
                                    name="phone-number"
                                    id="phone-number"
                                    value={phoneNumber}
                                    placeholder='Enter your phone number'
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="flex gap-x-4 sm:col-span-2">
                            <div className="flex h-6 items-center">

                                <button type="button" className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                                    <span className="sr-only">Agree to policies</span>

                                    <span aria-hidden="true" className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                                </button>
                            </div>
                            <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                                By selecting this, you agree to our
                                <a href="#" className="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
                            </label>
                        </div>
                    </div>
                    <div className="mt-10">
                        <a className="hover:opacity-90">
                            <button
                                type="submit"
                                onClick={signupHandler}
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Sign Up
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignUp
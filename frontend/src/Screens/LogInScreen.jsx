import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../store/slices/authSlice'
import { useLoginMutation } from '../store/slices/usersApiSlice'
import Loader from '../components/Loader'
import { toast } from 'react-toastify'

const LogInScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  // const { userInfo } = useSelector((state) => state.userInfo);
// Posting login data to server
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({email, password}).unwrap();
      dispatch(setCredentials({...res}));
      navigate('/');
      toast.success("Logged In Successfully")
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  return (
    <>
    <section id="Log In" className="w3-animate-zoom widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6">
            <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              
            </h2>
        
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
          
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" method="POST">
                <div>
                  <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div className="mt-2">
                    <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}                    
                    placeholder='Enter your email' 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
          
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}                   
                    placeholder='Enter your Password' 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
          
                <div>                  
                  <a href="#search" className="hover:opacity-90">
                    <button 
                    type="submit" 
                    onClick={onSubmitHandler}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Sign in
                    </button>
                  </a>
                </div>
                { isLoading && <Loader /> }
              </form>
             
              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
              </p>
            </div>
          </div>
          </section>
          
          
          <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
    </>
  )
}

export default LogInScreen
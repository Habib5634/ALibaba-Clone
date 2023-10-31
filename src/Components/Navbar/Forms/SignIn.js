import React, { useState } from 'react'
import { FaFacebook, FaLinkedin,  FaTwitter } from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc'
import { toast } from 'react-toastify';
import { handleLogin } from '../../../service/authService';
const SignIn = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await handleLogin(e, email, password, setLoading);
      // toast("Login Successfull")
    } catch (error) {
      setLoading(false);
      toast("Email or password are wrong")
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
        
        <form onSubmit={handleSubmit}>
        <div className="mb-4 mt-3">
          <label htmlFor="email" className="block text-gray-500 font-semibold mb-">
            Account
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email address or member id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-1 text-sm border border-gray-300 "
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className=" flex justify-between text-gray-500 font-semibold mb-">
            <span>Password</span><span className='font-normal text-blue-600 text-sm cursor-pointer'>Forgot Password?</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-1 text-sm border border-gray-300  "
            required
          />
        </div>
        <div className="mb-3 flex items-center">
          <input
            type="checkbox"
            id="staySignedIn"
            name="staySignedIn"
            
            className="mr-2"
          />
          <label htmlFor="staySignedIn" className="text-gray-700">
            Stay signed in
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-1 px-4 rounded-sm hover:bg-orange-700"
        >
          {loading ? 'Wait...' : 'Sign In'}
        </button>

        <p className='text-blue-500 my-3 text-sm hover:text-orange-500 cursor-pointer'>Mobile no sign in</p>

        <hr className='border-b w-full border-gray-500 mb-3' />

        <div className='flex space-x-3 my-3'>
            <p>Sign in with:</p>
            <FaFacebook size={30} color="#3b5998" />
      <FaLinkedin size={30} color="#0077B5" />
      <FcGoogle size={30} color="#EA4335" />
      <FaTwitter size={30} color="#1DA1F2" />
        </div>
        <div>
      <label className='text-gray-500 '>
        <input
          type="checkbox"
          checked
          className='mr-2'
          disabled
        />
        I agree to Free Membership Agreement
      </label>
      <br />
      <label className='text-gray-500 '>
        <input
          type="checkbox"
          checked
          className='mr-2'
          disabled
        />
        I agree to Receive marketing materials
      </label>
    </div>
      </form>
    </div>
  )
}

export default SignIn
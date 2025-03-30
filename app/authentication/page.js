'use client';

import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/navigation';
import Cookies from 'js-cookie';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '@/firebase'; // Directly import the Firestore instance
import {EyeIcon, EyeOffIcon} from 'lucide-react';
import toast from 'react-hot-toast';

export default function Authentication () {
  const {register, handleSubmit, formState: {errors}} = useForm ();
  const [loading, setLoading] = useState (false);
  const [showPassword, setShowPassword] = useState (false);
  const router = useRouter ();

  const togglePasswordVisibility = () => setShowPassword (!showPassword);

  const onSubmit = async data => {
    setLoading (true);

    try {
      const querySnapshot = await getDocs (collection (db, 'credentials'));
      let isAuthenticated = false;

      querySnapshot.forEach (doc => {
        const user = doc.data ();
        if (user.mobile === data.mobile && user.password === data.password) {
          toast.success ('Login Successful!', {
            duration: 2000,
          });
          isAuthenticated = true;
        }
      });

      if (isAuthenticated) {
        Cookies.set ('auth-token', 'sample-token', {expires: 1, path: '/'}); // Set authentication token
        router.push ('/dashboard');
      } else {
        alert ('Invalid credentials');
      }
    } catch (error) {
      console.error ('Error fetching credentials:', error);
      alert ('An error occurred. Please try again.');
    }

    setLoading (false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-[#9810FA]">Login</h2>
        <form onSubmit={handleSubmit (onSubmit)} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input
              type="text"
              {...register ('mobile', {required: true, pattern: /^[0-9]{11}$/})}
              className="input input-bordered w-full mt-1"
            />
            {errors.mobile &&
              <p className="text-red-500 text-sm">
                Enter a valid 10-digit mobile number
              </p>}
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register ('password', {required: true, minLength: 6})}
                className="input input-bordered w-full mt-1 pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword
                  ? <EyeOffIcon size={20} />
                  : <EyeIcon size={20} />}
              </button>
            </div>
            {errors.password &&
              <p className="text-red-500 text-sm">
                Password must be at least 6 characters
              </p>}
          </div>
          <button
            type="submit"
            className="btn bg-[#9810FA] text-white w-full"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

'use client'
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import bgImage from '@/public/bgImage.png';
import robotLogo from '@/public/stepsLogo.png';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token); // Store JWT token
        router.push('/dashboard'); // Redirect to dashboard or home page
      } else {
        setError(data.error || 'Invalid email or password');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div
        className="w-1/2 relative text-white p-16 flex flex-col bg-signup"
        style={{ backgroundImage: `url(${bgImage.src})`, backgroundSize: 'cover' }}
      >
        <div className="absolute top-10 left-10 text-3xl font-bold flex items-center space-x-3">
          <Image src={robotLogo} alt="Steps Logo" height={100} />
        </div>

        <div className="mt-20">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome Back! <span className="text-yellow-400">to STEPS Robotics</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Let's get you logged in
          </p>
        </div>


        <div class="absolute right-0 top-[400px] flex flex-col space-y-1">
          <a className={`text-lg cursor-pointer px-4 py-3 rounded-l transition duration-200 ${pathname === '/login'
            ? 'bg-white text-black'
            : 'text-white hover:bg-white hover:text-black'
            }`}
            onClick={() => router.push('/login')}>
            Login
          </a>

          <a className={`text-lg cursor-pointer px-4 py-3 rounded-l transition duration-200 ${pathname === '/signup'  // Changed from '/register' to '/signup'
            ? 'bg-white text-black'
            : 'text-white hover:bg-white hover:text-black'
            }`}
            onClick={() => router.push('/signup')}>
            Signup
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white p-16 flex items-center justify-center">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-2">Login to your account</h2>
          <p className="text-center text-gray-500 mb-6">Welcome back!</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 mt-4"
            >
              Login
            </button>
          </form>
          <div className="text-center my-4 text-gray-500">or continue with</div>

          {/* Auth Buttons (Google/Apple skipped for brevity) */}
          <div className="flex justify-center gap-4">

            <button className='social_media_icons' onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path d="M38.9107 21.4607C38.9107 19.9694 38.7872 18.8811 38.52 17.7526H21.1433V24.4836H31.3431C31.1375 26.1563 30.027 28.6754 27.5593 30.3682L27.5247 30.5935L33.0189 34.7647L33.3995 34.8019C36.8954 31.6379 38.9107 26.9825 38.9107 21.4607Z" fill="#4285F4" />
                <path d="M21.1422 39.1954C26.1392 39.1954 30.3342 37.5831 33.3984 34.8021L27.5581 30.3683C25.9953 31.4364 23.8977 32.1821 21.1422 32.1821C16.248 32.1821 12.0941 29.0181 10.6133 24.6449L10.3963 24.663L4.68337 28.9959L4.60866 29.1994C7.65211 35.1244 13.9036 39.1954 21.1422 39.1954Z" fill="#34A853" />
                <path d="M10.6144 24.645C10.2237 23.5165 9.99757 22.3072 9.99757 21.0578C9.99757 19.8083 10.2237 18.5991 10.5938 17.4706L10.5835 17.2302L4.79897 12.8278L4.60971 12.916C3.35536 15.3747 2.6356 18.1357 2.6356 21.0578C2.6356 23.98 3.35536 26.7408 4.60971 29.1995L10.6144 24.645Z" fill="#FBBC05" />
                <path d="M21.1423 9.93346C24.6176 9.93346 26.9619 11.4046 28.2986 12.634L33.5219 7.63608C30.3139 4.71393 26.1393 2.92032 21.1423 2.92032C13.9036 2.92032 7.65212 6.99116 4.60866 12.9161L10.5928 17.4707C12.0941 13.0975 16.2481 9.93346 21.1423 9.93346Z" fill="#EB4335" />
              </svg>
            </button>
            {/* Twitter Button */}
            <button className='social_media_icons'
              onClick={() =>
                signIn("twitter", {
                  callbackUrl: "/dashboard", // force post-login redirect
                })
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none">
                <path d="M17.21 3H20.08L14.12 10.11L21.17 21H15.42L11.12 14.87L6.12 21H3.25L9.64 13.36L2.83 3H8.73L12.65 8.58L17.21 3Z" fill="#1DA1F2" />
              </svg>
            </button>

            {/* Facebook Button */}
            <button className='social_media_icons'
              onClick={() =>
                signIn("facebook", {
                  callbackUrl: "/dashboard",
                })
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24h11.495V14.708H9.691v-3.62h3.129V8.414c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.098 2.797.142v3.245h-1.92c-1.507 0-1.798.716-1.798 1.765v2.313h3.593l-.468 3.62h-3.125V24h6.125C23.4 24 24 23.4 24 22.663V1.337C24 .6 23.4 0 22.675 0z" />
              </svg>
            </button>

            {/* Okta Button */}
            <button
              className="social_media_icons"
              onClick={() =>
                signIn("okta", {
                  callbackUrl: "/dashboard",
                })
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#00297A" />
                <text x="12" y="16" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Okta</text>
              </svg>
            </button>


          </div>
          <div className="text-center mt-4 text-sm">
            Don't have an account? {" "}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Signup
            </span>
          </div>
        </div>
      </div>
    </div>

  );
}

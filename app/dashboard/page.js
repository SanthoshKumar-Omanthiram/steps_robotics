'use client';

import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('Guest');

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('token='))
      ?.split('=')[1];

    if (token) {
      try {
        const decoded = jwt.decode(token);
        if (decoded?.email) {
          setUserEmail(decoded.email);
        }
      } catch (err) {
        console.error('Invalid token:', err);
      }
    }
    
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout');
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xl font-bold">
            {userEmail.charAt(0).toUpperCase()}
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">Welcome to STEM Academy</h1>
        <p className="text-gray-600 text-lg">Successfully logged in!</p>
        

        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

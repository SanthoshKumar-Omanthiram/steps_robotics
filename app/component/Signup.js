'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import bgImage from '@/public/bgImage.png';
import robotLogo from '@/public/stepsLogo.png';
import { BookOpen, Settings, Shield } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedRole, setselectedRole] = useState('Student');
  const [role, setRole] = useState("Student");
  const [agreed, setAgreed] = useState(false);
  const [passwordScore, setPasswordScore] = useState(0);

  const [formData, setFormData] = useState({
    full_name: '',
    student_id: '',
    age: '',
    grade: '',
    email: '',
    parent_phone: '',
    password: '',
    confirmPassword: '',
  });

  const roles = [
    { name: 'Student', icon: <BookOpen className="mx-auto mb-1" /> },
    { name: 'Teacher', icon: <Settings className="mx-auto mb-1" /> },
  ];

  console.log(role)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'password') {
      setPasswordScore(calculatePasswordScore(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      alert('You must agree to the terms and policy before registering.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const payload = {
      full_name: formData.full_name,
      student_id: formData.student_id,
      age: formData.age,
      grade: formData.grade,
      email: formData.email,
      parent_phone: formData.parent_phone,
      password: formData.password,
      role: role,
    };

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful');
        setFormData({
          full_name: '',
          student_id: '',
          age: '',
          grade: '',
          email: '',
          parent_phone: '',
          password: '',
          confirmPassword: '',
        });
        setAgreed(false);
        router.push('/login');
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the form');
    }
  };

  const calculatePasswordScore = (password) => {
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
    return score;
  };

  return (
    <div className="min-h-screen flex relative">
      {/* Centered Toggle Buttons */}
      {/* Left section */}
      <div
        className="w-1/2 relative text-white p-16 flex flex-col bg-signup"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute top-10 left-10 text-3xl font-bold flex items-center space-x-3">
          <Image src={robotLogo} alt="Steps Logo" height={100} />
        </div>

        <div className="mt-20">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome! <span className="text-yellow">to STEPS Robotics</span>
          </h1>
          <p className="mt-4 text-gray-300 tracking-widest text-lg">
            Where Young Minds Build the Future
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

      {/* Right section */}
      <div className="w-1/2 bg-white p-16 flex items-center justify-center">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-2">
            Join STEM Academy
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Create your account and start learning
          </p>

          <div className="flex justify-center items-center w-full mt-6">
            <div className="flex w-60 mb-6 space-x-4 bg-gray-100 rounded-full p-1">
              {roles.map((r) => (
                <a
                  key={r.name}
                  className={`w-28 py-2 font-semibold flex flex-col items-center justify-center rounded-full transition-all duration-200 ${role === r.name
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-700 hover:bg-yellow-100'
                    }`}
                  onClick={() => setRole(r.name)}
                >
                  {r.icon}
                  {r.name}
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Full Name
              </label>
              <input
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Student ID
              </label>
              <input
                name="student_id"
                value={formData.student_id}
                onChange={handleChange}
                type="text"
                placeholder="Enter student id"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-semibold mb-1">
                  Age
                </label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 text-gray-700"
                >
                  <option>Select age</option>
                  {[...Array(18)].map((_, i) => (
                    <option key={i}>{i + 5}</option>
                  ))}
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 font-semibold mb-1">
                  Grade
                </label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 text-gray-700"
                >
                  <option>Select Grade</option>
                  {['1st', '2nd', '3rd', '4th', '5th', '6th'].map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Parent's Phone
              </label>
              <input
                name="parent_phone"
                value={formData.parent_phone}
                onChange={handleChange}
                type="tel"
                placeholder="Enter parent's phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>

            {/* Password Strength */}
            <div className="w-full mt-2">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 flex-1 rounded-full transition-all duration-300 ${passwordScore > index
                      ? passwordScore === 1
                        ? 'bg-red-500'
                        : passwordScore === 2
                          ? 'bg-yellow-400'
                          : passwordScore === 3
                            ? 'bg-blue-400'
                            : 'bg-green-500'
                      : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
              <p className="text-xs mt-1 text-gray-600">
                Strength:{' '}
                {['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'][passwordScore]}
              </p>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="w-4 h-4"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                <b>
                  I agree to the{' '}
                  <span className="text-blue-600 underline cursor-pointer">
                    Terms & Privacy Policy
                  </span>
                </b>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow text-black font-semibold py-2 rounded hover:bg-yellow-500 mt-4"
            >
              Create Student Account
            </button>
          </form>

          <div className="text-center my-4 text-gray-500">or continue with</div>

          {/* Auth Buttons (Google/Apple skipped for brevity) */}
          <div className="flex justify-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
              <path d="M38.9107 21.4607C38.9107 19.9694 38.7872 18.8811 38.52 17.7526H21.1433V24.4836H31.3431C31.1375 26.1563 30.027 28.6754 27.5593 30.3682L27.5247 30.5935L33.0189 34.7647L33.3995 34.8019C36.8954 31.6379 38.9107 26.9825 38.9107 21.4607Z" fill="#4285F4" />
              <path d="M21.1422 39.1954C26.1392 39.1954 30.3342 37.5831 33.3984 34.8021L27.5581 30.3683C25.9953 31.4364 23.8977 32.1821 21.1422 32.1821C16.248 32.1821 12.0941 29.0181 10.6133 24.6449L10.3963 24.663L4.68337 28.9959L4.60866 29.1994C7.65211 35.1244 13.9036 39.1954 21.1422 39.1954Z" fill="#34A853" />
              <path d="M10.6144 24.645C10.2237 23.5165 9.99757 22.3072 9.99757 21.0578C9.99757 19.8083 10.2237 18.5991 10.5938 17.4706L10.5835 17.2302L4.79897 12.8278L4.60971 12.916C3.35536 15.3747 2.6356 18.1357 2.6356 21.0578C2.6356 23.98 3.35536 26.7408 4.60971 29.1995L10.6144 24.645Z" fill="#FBBC05" />
              <path d="M21.1423 9.93346C24.6176 9.93346 26.9619 11.4046 28.2986 12.634L33.5219 7.63608C30.3139 4.71393 26.1393 2.92032 21.1423 2.92032C13.9036 2.92032 7.65212 6.99116 4.60866 12.9161L10.5928 17.4707C12.0941 13.0975 16.2481 9.93346 21.1423 9.93346Z" fill="#EB4335" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
              <path d="M39.3662 21.0578C39.3662 31.0698 31.2497 39.1954 21.2287 39.1954C11.2077 39.1954 3.09109 31.0698 3.09109 21.0578C3.09109 11.0368 11.2077 2.92029 21.2287 2.92029C31.2497 2.92029 39.3662 11.0368 39.3662 21.0578Z" fill="#283544" />
              <path d="M29.7301 16.4683C29.6311 16.526 27.275 17.7445 27.275 20.4462C27.3861 23.5273 30.2483 24.6078 30.2974 24.6078C30.2483 24.6655 29.8653 26.0798 28.7307 27.5622C27.8302 28.8392 26.8308 30.1267 25.3132 30.1267C23.8696 30.1267 23.3514 29.2756 21.6857 29.2756C19.8969 29.2756 19.3907 30.1267 18.0211 30.1267C16.5035 30.1267 15.43 28.7702 14.4805 27.5052C13.2469 25.8496 12.1984 23.2513 12.1614 20.7566C12.1365 19.4346 12.4085 18.1352 13.0989 17.0314C14.0733 15.4905 15.8131 14.4444 17.7129 14.41C19.1686 14.3642 20.4642 15.3413 21.3525 15.3413C22.2039 15.3413 23.7956 14.41 25.5964 14.41C26.3738 14.4107 28.4466 14.6289 29.7301 16.4683ZM21.2294 14.146C20.9703 12.9388 21.6857 11.7315 22.3519 10.9614C23.2033 10.0301 24.5479 9.39801 25.7075 9.39801C25.7815 10.6053 25.3124 11.7893 24.4739 12.6516C23.7215 13.5829 22.426 14.284 21.2294 14.146Z" fill="white" />
            </svg>
          </div>

          <div className="text-center mt-4 text-sm">
            Already have an account?{' '}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={() => router.push('/login')}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

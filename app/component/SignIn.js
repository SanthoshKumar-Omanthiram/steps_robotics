"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bgImage from "@/public/bgImage.png";
import robotLogo from "@/public/stepsLogo.png";
import { useUser } from "../Context/UserContext";

export default function SignIn() {
  const router = useRouter();
  const { setUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role) {
      if (["admin", "support", "editor", "staff"].includes(role)) {
        router.push("/admin/dashboard");
      } else {
        router.push("/dashboard");
      }
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setEmailError("Email is required 😊");
      return;
    }
    if (!password) {
      setPasswordError("Password is required 😊");
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        localStorage.setItem("role", data.user.role);

        if (["admin", "support", "editor", "staff"].includes(data.user.role)) {
          router.push("/admin/dashboard");
        } else {
          router.push("/dashboard");
        }
      } else {
        setError(data.error || "Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side */}
      <div
        className="w-1/2 relative text-white p-16 flex flex-col bg-signup hidden md:flex"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-10 left-10 text-3xl font-bold flex items-center space-x-3">
          <Image src={robotLogo} alt="Steps Logo" height={100} />
        </div>

        <div className="mt-20">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome Back! <span className="text-yellow-400">to STEPS Robotics</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg">Let's get you logged in</p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex items-center justify-center">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-2">Login to your account</h2>
          <p className="text-center text-gray-500 mb-6">Welcome back!</p>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  if (!email) setEmailError("Email is required 😊");
                  else setEmailError("");
                }}
                onFocus={() => setEmailError("")}
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100"
                placeholder="Enter your email"
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => {
                  if (!password) setPasswordError("Password is required 😊");
                  else setPasswordError("");
                }}
                onFocus={() => setPasswordError("")}
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100"
                placeholder="Enter your password"
              />
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>

            {/* Server-side errors */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 mt-4"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            Don't have an account?{" "}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Signup
            </span>
          </div>
       <div className="text-center mt-4 text-sm text-gray-600">
  Forgot your password?{" "}
  <span
    className="text-blue-600 underline cursor-pointer hover:text-blue-800 transition"
    onClick={() => router.push("/forgot-password")}
  >
    Reset it here
  </span>
</div>
        </div>
      </div>
    </div>
  );
}

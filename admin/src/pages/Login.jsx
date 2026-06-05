import { useState } from "react";
import axios from "axios";
import ironLogo from "../assets/iron.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          email: email.trim(),
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "loginTime",
        Date.now()
      );

      alert("Login Successful 🚀");

      window.location.href = "/dashboard";

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Invalid Credentials ❌"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      <form
        onSubmit={handleLogin}
        className="bg-[#111111]/90 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 w-full max-w-sm shadow-[0_0_40px_rgba(255,215,0,0.08)]"
      >

        {/* Logo */}
        <img
          src={ironLogo}
          alt="IronMaster"
          className="w-16 h-16 mx-auto mb-4 invert"
        />

        {/* Heading */}
        <h1 className="text-white text-3xl font-bold text-center mb-2">
          Admin Login
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-400 text-center mb-6">
          Secure Access to IronMaster Dashboard
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full bg-black border border-gray-700 text-white placeholder-gray-500 rounded-2xl px-4 py-3 mb-4 outline-none focus:border-yellow-500 transition-all"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full bg-black border border-gray-700 text-white placeholder-gray-500 rounded-2xl px-4 py-3 mb-5 outline-none focus:border-yellow-500 transition-all"
        />

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
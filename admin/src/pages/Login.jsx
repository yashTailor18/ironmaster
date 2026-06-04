import { useState } from "react";
import axios from "axios";

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
    <div className="min-h-screen flex items-center justify-center bg-black">

      <form
        onSubmit={handleLogin}
        className="bg-[#111111] p-10 rounded-3xl w-[400px]"
      >

        <h1 className="text-white text-3xl font-bold mb-8 text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-4 rounded-xl outline-none"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-6 rounded-xl outline-none"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-gray-200 transition"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
import { useState } from "react";
// import { supabase } from "../supabaseClient";
import { supabase } from "../superbase/supabaseClient";

export default function AdminLogin({ onLogin }) {
  const [msg, setMsg] = useState("");
  //   const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    const { data } = await supabase
      .from("vhs_admin")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .single();

    if (data) {
      localStorage.setItem("admin", "true");
      onLogin();
    } else {
      setMsg("Invalid Credentials");
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-[#52bfea] px-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
        {/* Title */}
        <h1 className="text-3xl text-blue-400 font-bold text-center mb-6">
          VH's TechSphere
        </h1>
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

        <form onSubmit={handleLogin} className="grid gap-5">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-left text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter email"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password with Eye Icon */}
          <div className="flex flex-col gap-1 relative">
            <label className="font-semibold text-left text-gray-700">
              Password
            </label>

            <input
              name="password"
              type="password"
              required
              placeholder="Enter password"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 pr-12"
            />

            {/* Eye Toggle Button */}
            {/* <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-11 text-gray-600"
            >
             
               {showPassword ? (
                // Eye Off Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A11.05 11.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.102.178-2.16.506-3.145M6.3 6.3l11.4 11.4M9.88 9.88A3 3 0 0114.12 14.12"
                  />
                </svg>
              ) : (
                // Eye Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )} 
            </button> */}
          </div>

          {/* Login Button */}
          <button className="bg-blue-400 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        {/* Error Message */}
        {msg && (
          <p className="text-red-600 text-center mt-4 font-medium">{msg}</p>
        )}
      </div>
    </div>
  );
}

import React, { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import bcrypt from 'bcryptjs'
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleInput = (value,id) => {
    if(value == ""){
        document.getElementById(id).style.backgroundColor = "rgba(255, 2, 2, 0.1)";
        document.getElementById(id).style.border = "1px solid red";
    }
    else{
        document.getElementById(id).style.backgroundColor = "white";
        document.getElementById(id).style.border = "1px solid rgba(0, 0, 0, 0.1)";
    }
    document.getElementById('message').innerHTML = "";
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    if(!username || !password || !otp){
      document.getElementById('message').innerHTML = "Enter Valid inputs !";
    }else if(!(await bcrypt.compare(otp,sessionStorage.getItem('SECRET_CODE')))){
      document.getElementById('message').innerHTML = "Incorrect OTP";
    }else{
      const data = await axios.post("/login-user",{
        username,password
      });
      if(data.status == 201){
        document.getElementById('message').innerHTML = data.data.message;
      }else{
        sessionStorage.removeItem('SECRET_CODE');
        navigate('/admin-home');
      }
    }
  };

  const handleOTPButtonClick = async (e) => {
    e.preventDefault();
    const data = await axios.get("/getotp");
    console.log(data?.data?.OTP);
    const OTP = await bcrypt.hash(data?.data?.OTP+"", 10);
    sessionStorage.setItem("SECRET_CODE",OTP);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-200">
      <div className="w-full md:w-1/3 h-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-200 text-gray-700 text-2xl font-bold p-6">
          Login
        </div>
        <form className="p-6" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Username
            </label>
            <input
              type="text"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                handleInput(e.target.value,'username');
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                handleInput(e.target.value,'password');
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="otp">
              OTP
            </label>
            <div className="flex items-center mb-2">
              <input
                type="text"
                className="border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="otp"
                placeholder="OTP"
                value={otp}
                onChange={(e) => {
                handleInput(e.target.value,'otp');
                setOtp(e.target.value);
              }}
              />
              <button
                className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleOTPButtonClick}
              >
                SEND OTP
              </button>
            </div>
            <span id="message" className="text-red-500 text-sm font-bold"></span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 md:mb-0"
            >
              Login
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      <div className="w-full md:w-2/3 bg-gray-200"></div>
    </div>
  );
};
export default LoginPage;
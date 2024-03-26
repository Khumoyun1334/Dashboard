import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center mt-[100px] ">
      <div className="w-[40%] shadow-lg justify-center bg-white ite flex py-10">
        <div className="grid gap-7 justify-center w-[100%]">
          <div className="flex gap-32 items-center w-full">
            <p className="text-[22px] font-semibold"> Login</p>
            <p className="text-[12px] text-blue-600"> Don't have an account?</p>
          </div>
          <div className="w-full grid gap-2">
            <label htmlFor="" className="text-xs">
              Email Address
            </label>
            <input
              type="text"
              placeholder=""
              value="info@codedthemes.com"
              className="border outline-blue-300 hover:border-blue-300 pl-2 py-2"
            />
          </div>
          <div className="w-full grid gap-2">
            <label htmlFor="" className="text-xs">
              Password
            </label>
            <input
              type="password"
              placeholder=""
              value="123456"
              className="border outline-blue-300 hover:border-blue-300 pl-2 py-2"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <input type="checkbox" placeholder="" />
              <span className="text-sm"> Keep me sign in</span>
            </div>
            <p className="text-sm"> Forgot Password</p>
          </div>
          <button className="py-2 bg-blue-600 text-white rounded-md">
            Login
          </button>
          <p className="text-center text-xs"> Login with</p>
          <div className="flex gap-4">
            <div className="border-[1.8px] border-gray-300 flex gap-4 items-center px-2 rounded">
              <FcGoogle /> Google
            </div>
            <div className="border-[1.8px] border-gray-300 flex gap-4 items-center px-2 rounded">
              <AiOutlineTwitter color="blue" /> Twitter
            </div>
            <div className="border-[1.8px] border-gray-300 flex gap-4 items-center px-2 rounded">
              <CgFacebook color="blue" /> Facebook
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-12">
          <div className="col-span-7">ec</div>
          <div className="col-span-5 bg-[#6161ff] h-[100vh]">
            <div className="flex justify-center items-center">
              <img
                src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png"
                alt=""
                className="h-[100vh]"
              />
            </div>
          </div>
        </div>
      </div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(jwtDecode(credentialResponse.credential));
          setTimeout(() => {}, 1000);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        auto_select
      />
    </>
  );
}

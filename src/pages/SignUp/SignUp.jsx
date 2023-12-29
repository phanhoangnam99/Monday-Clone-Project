import React, { useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Input from "../../components/Input";

import { Formik, Field, Form, useFormik } from "formik";
import { schema } from "../../utils/rules";

export default function SignUp() {
  const [step, setStep] = useState(2);
  const signUpSchema = schema;
  const signUpSchema2 = schema.pick(["full_name", "password", "account_name"]);

  return (
    <>
      {step === 1 && (
        <div>
          <div className="grid sm:grid-cols-12 auto-cols-auto h-[100vh]">
            <div className="lg:col-span-7 col-span-12 auto-cols-fr items-center  mx-auto  grid">
              <div className="flex flex-col items-center justify-center ">
                <div className="flex flex-col items-center justify-center w-[80%] sm:w-full">
                  <div className="text-center">
                    <p className="text-3xl">
                      <strong>Welcome to monday.com</strong>
                    </p>
                    <p className="text-lg">
                      Get started - it's free. No credit card needed.
                    </p>
                  </div>
                  <div className="pt-12">
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        const data = jwtDecode(credentialResponse.credential);

                        alert(
                          "Bạn đã đăng nhập thành công với email: " + data.email
                        );
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                      auto_select
                      text="continue_with"
                    />
                  </div>
                  <div
                    className="grid py-4  w-full gap-1"
                    style={{ gridTemplateColumns: "1fr auto 1fr" }}
                  >
                    <div className=" border-t-2 border-[#d0d4e4] col-span-1 h-1/2 self-end"></div>
                    {/* <div className="flex col-span-1">
                    <div className="flex"></div>
                  </div> */}
                    Or
                    <div className=" border-t-2 border-[#d0d4e4] col-span-1 h-1/2 self-end"></div>
                  </div>
                  <div className="w-full">
                    <Formik
                      initialValues={{}}
                      onSubmit={(values, actions) => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                      }}
                      validationSchema={signUpSchema}
                    >
                      {(props) => (
                        <Form onSubmit={props.handleSubmit}>
                          <Input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                            name="email"
                            placeholder="name@company.com"
                            errorMessage={props.errors.email}
                          />

                          <button
                            type="submit"
                            className=" text-white py-2 mt-3 w-full bg-[#0073ea]"
                            onClick={() => setStep(2)}
                          >
                            Continue
                          </button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                  <div className="flex flex-col justify-center items-center mt-3 text-sm sm:text-base">
                    <span>By proceeding, you agree to the</span>
                    <div className="flex gap-1">
                      <a
                        href="https://monday.com/l/legal/tos/"
                        className="text-[#1f76c2] hover:underline"
                      >
                        Terms of Service
                      </a>
                      <span>and</span>
                      <a
                        href="https://monday.com/l/privacy/privacy-policy/"
                        className="text-[#1f76c2] hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </div>
                    <div>
                      <span>Already have an account? </span>
                      <a
                        href="https://monday.com/l/privacy/privacy-policy/"
                        className="text-[#1f76c2] hover:underline"
                      >
                        Log in
                      </a>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5  lg:grid hidden bg-[#6161ff] h-[100vh]">
              <div className="flex justify-center items-center">
                <img
                  src="                  https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png
                  "
                  alt=""
                  className="h-[100vh]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <div className="grid sm:grid-cols-12 auto-cols-auto h-[100vh]">
            <div className="lg:col-span-7 col-span-12   grid">
              <div className="md:px-32 md:py-16 flex flex-col md:justify-start justify-center items-center ">
                <div className="flex flex-col  w-[80%] md:w-full">
                  <div>
                    <img
                      alt="logo_monday"
                      className=" h-6 w-32"
                      src="https://cdn.monday.com/images/logos/logo-full-big.png"
                    ></img>
                  </div>
                  <div className=" text-3xl  py-12">
                    <p>Create your account</p>
                  </div>

                  <div className="w-full">
                    <Formik
                      initialValues={{
                        account_name: "Ubinert",
                        full_name: "",
                        password: "",
                      }}
                      onSubmit={(values, actions) => {
                        console.log("ec");
                        actions.setSubmitting(false);
                        alert(JSON.stringify(values, null, 2));
                      }}
                      validationSchema={signUpSchema2}
                      validateOnBlur
                    >
                      {(props) => (
                        <Form onSubmit={props.handleSubmit}>
                          <div className="my-4">
                            <label htmlFor="full_name" className="">
                              Full name
                            </label>
                            <Input
                              type="text"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.full_name}
                              name="full_name"
                              placeholder="Enter your full name"
                              errorMessage={props.errors.full_name}
                              className={"my-2"}
                            />
                          </div>

                          <div className="my-4">
                            <label htmlFor="full_name">Password</label>
                            <Input
                              type="text"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.password}
                              name="password"
                              placeholder="Enter at least 8 characters"
                              errorMessage={props.errors.password}
                              className={"my-2"}
                            />
                          </div>

                          <div className="my-4">
                            <label htmlFor="full_name">Account name</label>
                            <Input
                              type="text"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.account_name}
                              name="account_name"
                              placeholder="For example, company's or department's name"
                              errorMessage={props.errors.account_name}
                              className={"my-2"}
                            />
                          </div>

                          <div className="flex justify-end ">
                            <button
                              type="submit"
                              className=" text-white rounded-[5px] py-2 mt-3 md:w-[25%] w-1/2 bg-[#0073ea]"
                            >
                              <div className="flex justify-evenly">
                                <span>Continue</span>
                                <span>{">"}</span>
                              </div>
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                  <div className="flex flex-col justify-center items-center mt-3 text-sm sm:text-base">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5  lg:grid hidden bg-[#6161ff] h-[100vh]">
              <div className="flex justify-center items-center">
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png"
                  alt=""
                  className="h-[100vh]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

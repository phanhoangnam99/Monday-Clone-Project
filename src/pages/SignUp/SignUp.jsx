import React, { useEffect, useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Input from "../../components/Input";

import { Formik, Field, Form, useFormik } from "formik";
import { schema } from "../../utils/rules";
import purposeData from "./data.json";
import RadioButton from "../../components/RadioButton/RadioButton";

export default function SignUp() {
  const [step, setStep] = useState(3);
  const signUpSchema = schema.pick(["email"]);
  const signUpSchema2 = schema.pick(["full_name", "password", "account_name"]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const storedStep = localStorage.getItem("step");
    if (storedStep) {
      setStep(parseInt(storedStep));
    }
  }, []);

  const handleStepChange = (newStep) => {
    setStep(newStep);
    localStorage.setItem("step", newStep); // Store step in localStorage
  };

  useEffect(() => {
    const onBackButtonEvent = (e) => {
      if (e) {
        e.preventDefault();
        setStep(1);
        localStorage.setItem("step", 1); // Reset step to 1
      }
    };

    window.onpopstate = onBackButtonEvent;

    return () => {
      window.onpopstate = null;
    };
  }, []);

  const handleChangeRadioBtn = (e) => {
    setSelectedValue(e.target.value);
  };

  const findData = (value) => {
    return purposeData.find((purpose) => purpose.purpose === value);
  };

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
                        actions.setSubmitting(false);
                        handleStepChange(step + 1);
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
                  <div className="w-full flex flex-start">
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
                        actions.setSubmitting(false);
                        handleStepChange(step + 1);
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
      {step === 3 && (
        <div>
          <div className="grid sm:grid-cols-12 auto-cols-auto h-[100vh]">
            <div className="lg:col-span-7 col-span-12   grid">
              <div className="md:px-32 md:py-16 flex flex-col md:justify-start justify-start items-center ">
                <div className="w-full flex flex-start">
                  <img
                    alt="logo_monday"
                    className=" h-6 w-32"
                    src="https://cdn.monday.com/images/logos/logo-full-big.png"
                  ></img>
                </div>
                <div className="flex flex-col  w-[80%] md:w-full h-full justify-center">
                  <div className=" text-3xl  py-4 mt-6">
                    <p>Hey there, what brings you here today?</p>

                    {/* ======================================== */}
                  </div>
                  <div className="flex flex-wrap ">
                    {purposeData.map((purpose) => (
                      <RadioButton
                        radioName={purpose.purpose}
                        value={purpose.purpose}
                        onChange={(e) => handleChangeRadioBtn(e)}
                        selected={selectedValue}
                      />
                    ))}
                  </div>

                  {/* ======================================== */}

                  {
                    <div
                      className={`${
                        selectedValue &&
                        findData(selectedValue).roles.length > 0
                          ? "visible"
                          : "invisible"
                      }
                            `}
                    >
                      <div className=" text-3xl  py-4 mt-6">
                        <p>What best describes your current role?</p>
                      </div>
                      <div className="flex flex-wrap ">
                        {selectedValue &&
                          findData(selectedValue).roles.map((purpose) => {
                            return (
                              <RadioButton
                                name="border-radio-2"
                                radioName={purpose}
                              />
                            );
                          })}
                      </div>
                    </div>
                  }

                  {/* ======================================== */}

                  <div className="flex flex-col justify-center items-center mt-3 text-sm sm:text-base">
                    <div></div>
                  </div>
                </div>
                <div className="w-full mt-5 flex flex-auto justify-end">
                  <div className=" mt-auto">
                    <button
                      type="submit"
                      className=" text-white rounded-[5px] px-3 py-2 w-32  bg-[#0073ea]"
                    >
                      <div className="flex justify-evenly">
                        <span>Continue</span>
                        <span>{">"}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className="action-bar flex flex-1 mt-10 large-signup-modal">
                  <div className="left-bar large-signup-modal" />
                  <div className="right-bar large-signup-modal mt-auto">
                    <div className="account-setup-desktop-questions-submit-button-component is-large-modal">
                      <button
                        type="button"
                        className="submit-button button_2cc9b456c1 sizeMedium_18a78b4558 kindPrimary_873cf6047e colorPrimary_5d4dbadec9 disabled_60ab23b7e7"
                        data-testid="button"
                        aria-disabled="true"
                        aria-busy="false"
                        tabIndex={-1}
                      >
                        Continue
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width={20}
                          height={20}
                          aria-hidden="true"
                          className="icon_c85ee8f381 rightIcon_b8664810bd noFocusStyle_7a93ee2575"
                          data-testid="icon"
                        >
                          <path
                            d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div> */}
            </div>
            <div className="lg:col-span-5  lg:grid hidden bg-[#6161ff] h-[100vh]">
              <div className="flex justify-center items-center">
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png"
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

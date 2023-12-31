import React, { useEffect, useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Input from "../../components/Input";

import { Formik, Field, Form, useFormik } from "formik";
import { schema } from "../../utils/rules";
import purposeData from "./data.json";
import RadioButton from "../../components/RadioButton/RadioButton";
import CheckboxCompo from "../../components/Checkbox";
import { motion } from "framer-motion";
import { Option, Select, Typography, input } from "@material-tailwind/react";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const signUpSchema = schema.pick(["email"]);
  const signUpSchema2 = schema.pick(["full_name", "password", "account_name"]);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputFields, setInputFields] = useState([{ email: "", role: " " }]);

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

  const handleChange = (index, event, value) => {
    // Check if the event is from the input or the select field
    if (event) {
      // Get the name and value of the input field
      const { name, value } = event.target;

      // Update the state variable by using the index and the name parameters
      setInputFields((prev) =>
        prev.map((item, i) => (i === index ? { ...item, [name]: value } : item))
      );
    } else if (value) {
      // Update the state variable by using the index and the value parameters
      setInputFields((prev) =>
        prev.map((item, i) => (i === index ? { ...item, role: value } : item))
      );
    }
  };

  const element = document.getElementsByClassName("overflow-y-auto");
  const scrollToBottom = () => {
    element.scrollTop = element.scrollHeight - element.clientHeight;
  };

  const addFields = () => {
    let newfield = { email: "", role: "" };

    setInputFields([...inputFields, newfield]);
    scrollToBottom();
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
                  <div className="flex flex-wrap  ">
                    {purposeData.map((purpose) => (
                      <RadioButton
                        key={purpose.purpose}
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
                      className=" text-white rounded-[5px] px-3 py-2 w-32  bg-[#0073ea]"
                      onClick={() => handleStepChange(step + 1)}
                    >
                      <div className="flex justify-evenly">
                        <span>Continue</span>
                        <span>{">"}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
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
      {step === 4 && (
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
                    <p>One last question, how did you hear about us?</p>

                    {/* ======================================== */}
                  </div>

                  <div className="flex flex-wrap ">
                    <CheckboxCompo name="Software review sites" />
                    <CheckboxCompo name="Friend / Colleague" />
                    <CheckboxCompo name="Blllboard / Public transit ad" />
                    <CheckboxCompo name="YouTube ad" />

                    <CheckboxCompo name="LinkedIn" />
                    <CheckboxCompo name="Consultant" />
                    <CheckboxCompo name="Social media (Facebook, InStagram, Reddit, etc.)" />
                    <CheckboxCompo name="Search engine (Google, Bing, etc.)" />
                    <CheckboxCompo name="TV / Streaming service" />
                    <CheckboxCompo name=" Audio ad (Podcast, Spotify)" />
                    <CheckboxCompo name=" Other" />

                    {/* <CheckboxCompo
                      name="Other"
                      ref={ref}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    /> */}
                  </div>

                  <div className="flex flex-col justify-center items-center mt-3 text-sm sm:text-base">
                    <div></div>
                  </div>
                </div>
                <div className="w-full mt-5 flex flex-auto ">
                  <div className=" mt-auto flex justify-between  w-full">
                    <button
                      className=" text-black rounded-[5px] px-3 py-2 w-24 border border-black"
                      onClick={() => handleStepChange(step - 1)}
                    >
                      <div className="flex justify-evenly">
                        <span>{"<"}</span>
                        <span>Back</span>
                      </div>
                    </button>
                    <button
                      className=" text-white rounded-[5px] px-3 py-2 w-32  bg-[#0073ea]"
                      onClick={() => handleStepChange(step + 1)}
                    >
                      <div className="flex justify-evenly">
                        <span>Continue</span>
                        <span>{">"}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5  lg:grid hidden bg-[#ffcc00] h-[100vh]">
              <div className="flex justify-center items-center">
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png"
                  alt=""
                  className="h-[100vh]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 5 && (
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
                    <p>Who else is on your team?</p>

                    {/* ======================================== */}
                  </div>

                  <div className="flex flex-wrap max-h-80 overflow-y-auto  ">
                    <form className="w-full">
                      {inputFields.map((input, index) => (
                        <div className="flex my-3 " key={index}>
                          <Input
                            name="email"
                            key={index}
                            value={input.email}
                            placeholder="Add email here"
                            onChange={(event) => handleChange(index, event)}
                            className="w-[90%] "
                            classNameInput="rounded-none px-3 py-2 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm"
                          />
                          <Select
                            variant="static"
                            label={null}
                            name="role"
                            onChange={(value) =>
                              handleChange(index, null, value)
                            }
                            containerProps={{
                              className: " h-auto !w-[20%] min-w-[1px]",
                            }}
                            className=" rounded-none min-h-full h-full border border-solid border-[#e0e0e0] focus:border-black focus:border"
                          >
                            <Option value="Admin">
                              Admin
                              <p
                                id="secondary-text"
                                className=" text-gray-400 text-sm"
                              >
                                Can invite & manage new users
                              </p>
                            </Option>
                            <Option value="Member">
                              Member
                              <p
                                id="secondary-text"
                                className="text-gray-400 text-sm"
                              >
                                Can add and edit content
                              </p>
                            </Option>
                          </Select>
                        </div>
                      ))}
                    </form>
                    <div>
                      <button
                        onClick={addFields}
                        className="hover:bg-[#dcdfec] px-3 py-2 rounded-md"
                      >
                        + Add Another
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center mt-3 text-sm sm:text-base">
                    <div></div>
                  </div>
                </div>
                <div className="w-full mt-5 flex flex-auto ">
                  <div className=" mt-auto flex justify-between  w-full">
                    <button
                      className=" text-black   hover:bg-[#dcdfec] px-3 py-2 rounded-md"
                    >
                      <div className="flex justify-evenly">
                        <span>Remind me later</span>
                      </div>
                    </button>
                    <button className=" text-white rounded-[5px] px-1 py-2 w-36  bg-[#0073ea]">
                      <div className="flex justify-evenly">
                        <span>Invite your team</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5  lg:grid hidden bg-[#00ca72] h-[100vh]">
              <div className="flex justify-center items-center">
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/new-signup-right-side-assets/Invite-your-teammates.png"
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

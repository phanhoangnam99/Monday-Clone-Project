import React, { useEffect, useRef, useState } from "react";
import Input from "../../components/Input";
import ReviewTable from "../../components/ReviewTable/ReviewTable";

export default function BoardCreate() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const btnRef = useRef();
  const checkBlankInput = (e) => {
    inputRef.current = e.target.value;
    console.log(inputRef);
    if (inputRef.current) {
      btnRef.current.removeAttribute("disabled");
    } else if (!inputRef.current || inputRef.current === "") {
      btnRef.current.setAttribute("disabled", "");
    }

    setInputValue(inputRef.current);
  };
  // useEffect(() => checkBlankInput(), []);

  return (
    <div>
      <div className="grid sm:grid-cols-12 auto-cols-auto h-[100vh]">
        <div className="lg:col-span-6 col-span-12   grid">
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
                <p>Let's start working together</p>

                {/* ======================================== */}
              </div>

              <div className="flex flex-wrap "></div>

              <div className="flex flex-col justify-center items-center mt-3 text-sm sm:text-base">
                <div>
                  <p className="color-[#323338]">
                    Give your board a name, e.g. marketing plan, sales pipeline,
                    quarterly roadmap...
                  </p>
                </div>
                <div className="w-full relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => checkBlankInput(e)}
                    ref={inputRef}
                    placeholder="My first board"
                    classNameInput="p-2 ps-8 w-full outline-none border border-gray-300 transition-colors	 hover:border-[#323338] focus:border-blue-500 rounded-sm focus:shadow-sm "
                    clearBtn
                  >
                    {inputValue && (
                      <button
                        onClick={() => {
                          btnRef.current.setAttribute("disabled", "");
                          setInputValue("");
                        }}
                        className=" cursor-pointer absolute top-1/2 -translate-y-1/2 h-[80%] right-[4px]"
                      >
                        <div className=" px-3 rounded-sm h-full hover:bg-[#dcdfec] flex flex-col justify-center">
                          x
                        </div>
                      </button>
                    )}
                  </Input>
                </div>
                <div className="my-12 ps-8 pe-24 py-3 bg-allgrey-background-color">
                  <p>
                    In monday.com, "boards" are the place where all your content
                    lives.
                  </p>
                </div>
                <div className="w-full mt-5 flex flex-auto ">
                  <div className=" mt-auto flex justify-end  w-full">
                    <button
                      className=" text-white rounded-[5px] px-3 py-2 w-24 bg-[#0073ea] hover:bg-[#0060b9] disabled:bg-disabled-background-color disabled:text-disabled-text-color"
                      disabled
                      ref={btnRef}
                    >
                      <div className="flex justify-evenly ">
                        <span>Next</span>
                        <span>{">"}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6  lg:grid hidden bg-allgrey-background-color h-[100vh]">
          <div className="relative">
            <div className="flex justify-end p-2">
              <button className="flex justify-center items-center w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div id="cai_bang">
              <div className="bg-[#fff] [box-shadow:0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] [box-sizing:initial] flex [filter:drop-shadow(-10px_10px_30px_rgba(29,140,242,.3))] flex-col h-[555px] overflow-y-auto pt-[32px] absolute right-[0] top-2/4 -translate-y-1/2 [transition:transform_.2s_ease-in-out] w-[90%]">
                <div className="flex flex-col flex-1 overflow-hidden">
                  <div className="ml-8">
                    {!inputValue ? (
                      <div className="flex board_display_size">
                        <div className="my-3 w-[30%] h-2 bg-[#c3c6d4] rounded-lg"></div>
                      </div>
                    ) : (
                      <div className="flex board_display_size">
                        <h1 className="truncate text-[#656789] [font-weight:500] text-3xl">
                          {inputValue}
                        </h1>
                      </div>
                    )}
                    <div
                      id="#cai_gi_do"
                      className="flex flex-row justify-between mt-2 mr-8 mb-4"
                    >
                      <div className="flex flex-row h-[42px] pointer-events-none"></div>
                    </div>
                  </div>
                  <ReviewTable rowNumber={5} boardColor="#559afd" />
                  <ReviewTable
                    rowNumber={2}
                    boardColor="#00c875"
                    marginTop="32px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

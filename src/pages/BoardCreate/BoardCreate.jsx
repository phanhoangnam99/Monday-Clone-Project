import React, { useEffect, useRef, useState } from "react";
import Input from "../../components/Input";
import ReviewTable from "../../components/ReviewTable/ReviewTable";
import { Checkbox } from "@material-tailwind/react";

export default function BoardCreate() {
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState(2);
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
    <>
      {step === 1 && (
        <div>
          <div className="grid sm:grid-cols-12 auto-cols-auto h-[100vh]">
            <div className="lg:col-span-6 col-span-12   grid">
              <div className="md:px-32 md:py-16 flex flex-col md:justify-start justify-start items-center ">
                <div className="flex flex-col  w-[80%] md:w-full h-full justify-center">
                  <div className=" text-3xl  py-4 mt-6">
                    <p>Let's start working together</p>

                    {/* ======================================== */}
                  </div>

                  <div className="flex flex-wrap "></div>

                  <div className="flex flex-col justify-center items-center mt-3 text-sm sm:text-base">
                    <div>
                      <p className="color-[#323338]">
                        Give your board a name, e.g. marketing plan, sales
                        pipeline, quarterly roadmap...
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
                        In monday.com, "boards" are the place where all your
                        content lives.
                      </p>
                    </div>
                    <div className="w-full mt-5 flex flex-auto ">
                      <div className=" mt-auto flex justify-end  w-full">
                        <button
                          className=" text-white rounded-[5px] px-3 py-2 w-24 bg-[#0073ea] disabled:bg-disabled-background-color disabled:text-disabled-text-color"
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
      )}
      {step === 2 && (
        <div>
          <div className="grid sm:grid-cols-12 auto-cols-auto h-[100vh]">
            <div className="lg:col-span-6 col-span-12   grid">
              <div className="md:px-32 md:py-16 flex flex-col md:justify-start justify-start items-center ">
                <div className="flex flex-col  w-[80%] md:w-full h-full justify-center">
                  <div className="mb-6">
                    <div className=" text-3xl  py-4 mt-6">
                      <p>Let’s select the relevant columns for your board</p>
                    </div>
                    <div className="flex flex-wrap "></div>
                    <div>
                      <p className="color-[#323338]">
                        Choose from the most popular column types for your work
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start mt-3 text-sm sm:text-base">
                    <div className="w-full relative">
                      <button className="p-2 border border-1 border-solid border-gray-400 focus:border-blue-200">
                        <div className="flex">
                          <div className="flex rounded-sm w-6 mr-2 justify-center items-center bg-[#66ccff]">
                            <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              width={16}
                              height={16}
                              aria-hidden="true"
                              className="text-white"
                              data-testid="icon"
                            >
                              <path
                                d="M10.2501 2.0498C9.74254 2.0498 9.2399 2.14979 8.77093 2.34404 8.30196 2.53829 7.87584 2.82302 7.51691 3.18195 7.15798 3.54088 6.87325 3.967 6.679 4.43597 6.48475 4.90494 6.38477 5.40758 6.38477 5.91519 6.38477 6.4228 6.48475 6.92544 6.679 7.39441 6.87325 7.86338 7.15798 8.28949 7.51691 8.64843 7.87584 9.00736 8.30196 9.29209 8.77093 9.48634 9.2399 9.68059 9.74254 9.78057 10.2501 9.78057 10.7578 9.78057 11.2604 9.68059 11.7294 9.48634 12.1983 9.29208 12.6245 9.00736 12.9834 8.64843 13.3423 8.28949 13.627 7.86338 13.8213 7.39441 14.0156 6.92544 14.1155 6.4228 14.1155 5.91519 14.1155 5.40758 14.0156 4.90494 13.8213 4.43597 13.627 3.967 13.3423 3.54088 12.9834 3.18195 12.6245 2.82302 12.1983 2.53829 11.7294 2.34404 11.2604 2.14979 10.7578 2.0498 10.2501 2.0498zM9.34496 3.72986C9.63194 3.61099 9.93952 3.5498 10.2501 3.5498 10.5608 3.5498 10.8684 3.61099 11.1553 3.72986 11.4423 3.84873 11.7031 4.02296 11.9227 4.24261 12.1424 4.46226 12.3166 4.72301 12.4355 5.01 12.5544 5.29698 12.6155 5.60456 12.6155 5.91519 12.6155 6.22582 12.5544 6.5334 12.4355 6.82038 12.3166 7.10736 12.1424 7.36812 11.9227 7.58777 11.7031 7.80742 11.4423 7.98165 11.1553 8.10052 10.8684 8.21939 10.5608 8.28057 10.2501 8.28057 9.93952 8.28057 9.63194 8.21939 9.34496 8.10052 9.05798 7.98165 8.79722 7.80742 8.57757 7.58777 8.35792 7.36812 8.18369 7.10736 8.06482 6.82038 7.94595 6.5334 7.88477 6.22582 7.88477 5.91519 7.88477 5.60456 7.94595 5.29698 8.06482 5.01 8.18369 4.72301 8.35792 4.46226 8.57757 4.24261 8.79722 4.02296 9.05797 3.84873 9.34496 3.72986zM9.83935 10.7312C9.8512 10.7307 9.86306 10.7305 9.87491 10.7305H10.6247C10.6384 10.7305 10.652 10.7308 10.6655 10.7314 11.7943 10.7771 12.8913 11.0775 13.8525 11.6041 14.8151 12.1314 15.6096 12.8682 16.1604 13.7443 16.7113 14.6203 17.0003 15.6068 17 16.6097V17.2981C17 17.6856 16.6456 17.9997 16.2084 17.9997H10.6251L10.6201 17.9997H4.29163C3.85443 17.9997 3.5 17.6856 3.5 17.2981V16.6097C3.4997 15.6068 3.7887 14.6203 4.33955 13.7443 4.89044 12.8682 5.68491 12.1314 6.64751 11.6041 7.6101 11.0767 8.70884 10.7762 9.83935 10.7312zM9.89335 12.1337H10.6063C11.4613 12.1703 12.2918 12.3987 13.02 12.7977 13.753 13.1992 14.358 13.7602 14.7774 14.4274 15.1946 15.0907 15.4145 15.8372 15.4167 16.5965H10.6296L10.6247 16.5965H5.08328C5.08548 15.8372 5.30542 15.0907 5.72255 14.4273 6.14204 13.7602 6.747 13.1992 7.47999 12.7977 8.20811 12.3988 9.03853 12.1703 9.89335 12.1337zM5.08326 16.6066L5.08328 16.5965C5.08327 16.5998 5.08327 16.6032 5.08326 16.6066zM15.4167 16.6066C15.4167 16.6032 15.4167 16.5999 15.4167 16.5965L15.4167 16.6066z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>Owner</div>
                        </div>
                      </button>
                    </div>
                    <div className="my-12 ps-8 pe-24 py-3 bg-allgrey-background-color">
                      <p>
                        In monday.com, "boards" are the place where all your
                        content lives.
                      </p>
                    </div>
                    <div className="w-full mt-5 flex flex-auto ">
                      <div className=" mt-auto flex justify-end  w-full">
                        <button
                          className=" text-white rounded-[5px] px-3 py-2 w-24 bg-[#0073ea] disabled:bg-disabled-background-color disabled:text-disabled-text-color"
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
      )}
    </>
  );
}

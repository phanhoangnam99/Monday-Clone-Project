import React from "react";

export default function CalendarTemplate({ selectedRadio }) {
  return (
    <div className="bg-white  lg:max-w-7xl lg:mx-auto ">
      <p className="text-2xl font-semibold text-gray-800 my-4 ms-20 ">
        Febuary 2024
      </p>
      <div className="inline-flex flex-col space-y-1 items-start justify-start h-full w-full">
        <div className="flex flex-col items-start justify-start w-full">
          {/* <div className="inline-flex space-x-14 items-start justify-start pr-24 h-full w-full"></div> */}
          <div className="inline-flex items-center justify-start h-full w-full">
            <div className="flex items-center justify-center h-full   border-gray-200 w-full border-l border-r px-[0.9rem]">
              <p className=" ">Mon</p>
            </div>
            <div className="flex items-center justify-center h-full   border-gray-200 w-full border-l border-r px-[0.9rem] ">
              <p className="">Tue</p>
            </div>
            <div className="flex items-center justify-center h-full   border-gray-200 w-full border-l border-r px-[0.9rem] ">
              <p className="">Wed</p>
            </div>
            <div className="flex items-center justify-center h-full   border-gray-200 w-full border-l border-r px-[0.9rem] ">
              <p className="">Thu</p>
            </div>
            <div className="flex items-center justify-center h-full   border-gray-200 w-full border-l border-r px-[0.9rem] ">
              <p className="">Fri</p>
            </div>
            <div className="flex items-center justify-center h-full   border-gray-200 w-full border-l border-r px-[0.9rem] ">
              <p className="">Sat</p>
            </div>
            <div className="flex items-center justify-center h-full   border-gray-200 w-full border-l border-r px-[0.9rem] ">
              <p className="">Sun</p>
            </div>
          </div>
          <div className="inline-flex items-center justify-start h-full w-full">
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2 relative">
              <p className="opacity-50 text-sm font-medium text-gray-800">29</p>

              <span className="absolute bottom-1 text-xs -translate-x-1/2 left-1/2 px-2 py-1 w-[80%] truncate  rounded-sm text-center bg-[#fdab3d] text-white">
                {" "}
                {selectedRadio} 1
              </span>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="opacity-50 text-sm font-medium text-gray-800">30</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2 relative">
              <p className="opacity-50 text-sm font-medium text-gray-800">31</p>
              <span className="absolute bottom-1 text-xs -translate-x-1/2 left-1/2 px-2 py-1 w-[80%] truncate  rounded-sm text-center bg-[#00c875] text-white">
                {" "}
                {selectedRadio} 2
              </span>
            </div>

            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">1</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2 relative">
              <p className="text-sm font-medium text-gray-800">2</p>
              <span className="absolute bottom-1 text-xs -translate-x-1/2 left-1/2 px-2 py-1 w-[80%] truncate  rounded-sm text-center bg-[#e2445c] text-white">
                {" "}
                {selectedRadio} 3
              </span>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">3</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">4</p>
            </div>
          </div>
          <div className="inline-flex items-center justify-start w-full h-full">
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">5</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">6</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">7</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">8</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">9</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">10</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">11</p>
            </div>
          </div>
          <div className="inline-flex items-center justify-start w-full h-full">
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">12</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">13</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">14</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">15</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">16</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">17</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">18</p>
            </div>
          </div>
          <div className="inline-flex items-center justify-start h-full w-full">
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">19</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">20</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">21</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">22</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">23</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">24</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">25</p>
            </div>
          </div>
          <div className="inline-flex items-center justify-start w-full h-full">
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">26</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">27</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">28</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="text-sm font-medium text-gray-800">29</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="opacity-50 text-sm font-medium text-gray-800">1</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="opacity-50 text-sm font-medium text-gray-800">2</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="opacity-50 text-sm font-medium text-gray-800">3</p>
            </div>
          </div>

          <div className="inline-flex items-center justify-start w-full h-full">
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="opacity-50 text-sm font-medium text-gray-800">4</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="opacity-50 text-sm font-medium text-gray-800">5</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="opacity-50 text-sm font-medium text-gray-800">6</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="opacity-50 text-sm font-medium text-gray-800">7</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="opacity-50 text-sm font-medium text-gray-800">8</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="opacity-50 text-sm font-medium text-gray-800">9</p>
            </div>
            <div className="flex items-start justify-end w-full h-full border border-gray-200 pb-9 pr-2 pt-2">
              <p className="opacity-50 text-sm font-medium text-gray-800">10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

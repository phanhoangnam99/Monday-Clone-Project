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
      <div className="w-full">
        <Input
          onChange={(e) => checkBlankInput(e)}
          ref={inputRef}
          placeholder="My first board"
          classNameInput="p-2 ps-8 w-full outline-none border border-gray-300 transition-colors	 hover:border-[#323338] focus:border-blue-500 rounded-sm focus:shadow-sm "
        />
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
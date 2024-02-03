import React, { useEffect } from "react";

export default function KanbanTemplate({ selectedColumn, selectedRadio }) {
  const colContent = [
    {
      id: "owner",
      label: "Owner",
      firstRow: {
        content: (
          <div className="flex justify-center w-full ">
            <img
              alt="ec"
              src="https://files.monday.com/apse2/photos/54452436/thumb/54452436-user_photo_initials_2024_01_16_07_09_31.png?1705388971"
              className=" shadow-lg flex w-7 h-7 rounded-full justify-center"
              aria-hidden="true"
            />
          </div>
        ),
      },
      secondRow: {
        content: (
          <div className="flex justify-center w-full">
            <img
              alt="content"
              src="https://cdn.monday.com/icons/dapulse-person-column.svg"
              className="shadow-lg flex w-7 h- rounded-full"
              aria-hidden="true"
            />
          </div>
        ),
      },
      thirdRow: {
        content: (
          <div className="flex justify-center w-full">
            <img
              alt="content"
              src="https://cdn.monday.com/icons/dapulse-person-column.svg"
              className="shadow-lg flex w-7 h- rounded-full"
              aria-hidden="true"
            />
          </div>
        ),
      },
    },
    {
      id: "status",
      label: "Status",
      firstRow: {
        content: (
          <div className="text-center text-sm  text-white w-full ">
            <span>Working on it</span>
          </div>
        ),
        bgColor: "#fdab3d",
      },
      secondRow: {
        content: (
          <div className="text-center text-sm text-white w-full ">
            <span>Done</span>
          </div>
        ),
        bgColor: "#00c674",
      },
      thirdRow: {
        content: (
          <div className="text-center text-white w-full ">
            <span>Stuck</span>
          </div>
        ),
        bgColor: "#e2445c",
      },
    },
    {
      id: "due-date",
      label: "Due date",
      firstRow: {
        content: (
          <div className="flex justify-evenly ps-3 gap-3 w-full ">
            <div className="-translate-y-2">
              <div className="relative inline-flex">
                <span class=" absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-1/3 bg-red-500 text-white min-w-[16px] min-h-[16px] h-[8px]">
                  <div className="relative">
                    <div className="absolute -translate-y-1/2 -translate-x-1/2">
                      !
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div className="truncate">17 Jan</div>
          </div>
        ),
      },
      secondRow: {
        content: (
          <div className="flex justify-evenly w-full ">
            <div className="-translate-y-2">
              <div className="relative inline-flex">
                <span class=" absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-1/3 bg-[#00854d] text-white min-w-[16px] min-h-[16px] h-[8px]">
                  <div className="relative">
                    <div className="absolute -translate-y-1/2 -translate-x-1/2">
                      <span>&#10003;</span>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div className="line-through">17 Jan</div>
          </div>
        ),
      },
      thirdRow: {
        content: (
          <div className="flex justify-evenly w-full ">
            <div className="-translate-y-2">
              <div className="relative inline-flex">
                <span class=" absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 !-translate-y-1/3  text-white min-w-[16px] min-h-[16px] h-[8px]">
                  <div className="relative">
                    <div className="absolute -rotate-90 -translate-y-1/2 -translate-x-1/2">
                      <svg
                        className="circle-container"
                        viewBox="-1 -1 2 2"
                        style={{ height: 16 }}
                      >
                        <circle
                          className="circle-stroke"
                          fill="none"
                          stroke="#5d6387"
                          strokeWidth="0.2"
                          r="0.9"
                        />
                        <path
                          d="M 1 0 A 1 1 0 1 1 0.9297764858882511 -0.3681245526846787 L 0 0"
                          fill="#5d6387"
                        />
                      </svg>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div>19 Jan</div>
          </div>
        ),
      },
    },
    {
      id: "budget",
      label: "Budget",
      firstRow: {
        content: (
          <div className="flex w-full justify-center">
            <span>$100</span>{" "}
          </div>
        ),
      },
      secondRow: {
        content: (
          <div className="flex w-full justify-center">
            <span>$1.000</span>{" "}
          </div>
        ),
      },
      thirdRow: {
        content: (
          <div className="flex w-full justify-center">
            <span>$500</span>{" "}
          </div>
        ),
      },
    },
    {
      id: "files",
      label: "Files",
      firstRow: {
        content: (
          <>
            <div>
              <span className="invisible">ec</span>
            </div>
          </>
        ),
      },
      secondRow: {
        content: (
          <>
            <div>
              <span className="invisible">ec</span>
            </div>
          </>
        ),
      },
      thirdRow: {
        content: (
          <>
            <div></div>
          </>
        ),
      },
    },
    {
      id: "last_updated",
      label: "Last update",
      firstRow: {
        content: (
          <div className="flex items-center gap-2 w-full flex-shrink flex-grow-1  basis-full">
            <div className="flex basis-8 flex-shrink-0 justify-center w-full">
              <img
                alt="ec"
                src="https://files.monday.com/apse2/photos/54452436/thumb/54452436-user_photo_initials_2024_01_16_07_09_31.png?1705388971"
                className=" shadow-lg flex w-7 h-7 rounded-full justify-center"
                aria-hidden="true"
              />
            </div>
            <div className=" flex  truncate flex-grow basis-1/2  text-md">
              <p className="truncate"> 21 hours ago</p>
            </div>
          </div>
        ),
        minWidth: "120px",
      },
      secondRow: {
        content: (
          <>
            <div className="flex items-center gap-2 w-full flex-shrink flex-grow-1  basis-full">
              <div className="flex basis-8 flex-shrink-0 justify-center w-full">
                <img
                  alt="ec"
                  src="https://files.monday.com/apse2/photos/54452436/thumb/54452436-user_photo_initials_2024_01_16_07_09_31.png?1705388971"
                  className=" shadow-lg flex w-7 h-7 rounded-full justify-center"
                  aria-hidden="true"
                />
              </div>
              <div className=" flex  truncate flex-grow basis-1/2  text-md">
                <p className="truncate"> 21 hours ago</p>
              </div>
            </div>
          </>
        ),
      },
      thirdRow: {
        content: (
          <>
            <div className="flex items-center gap-2 w-full flex-shrink flex-grow-1  basis-full">
              <div className="flex basis-8 flex-shrink-0 justify-center w-full">
                <img
                  alt="ec"
                  src="https://files.monday.com/apse2/photos/54452436/thumb/54452436-user_photo_initials_2024_01_16_07_09_31.png?1705388971"
                  className=" shadow-lg flex w-7 h-7 rounded-full justify-center"
                  aria-hidden="true"
                />
              </div>
              <div className=" flex  truncate flex-grow basis-1/2  text-md">
                <p className="truncate"> 21 hours ago</p>
              </div>
            </div>
          </>
        ),
      },
    },
    {
      id: "notes",
      label: "Notes",
      firstRow: {
        content: (
          <div className="flex w-full items-center justify-center  flex-shrink-0   flex-wrap">
            <span className="truncate">Action items</span>{" "}
          </div>
        ),
      },
      secondRow: {
        content: (
          <div className="flex w-full items-center justify-center  flex-shrink-0   flex-wrap">
            <span className="truncate">Meeting notes</span>{" "}
          </div>
        ),
      },
      thirdRow: {
        content: (
          <div className="flex w-full items-center justify-center  flex-shrink-0   flex-wrap">
            <span className="truncate">Other</span>{" "}
          </div>
        ),
      },
    },
    {
      id: "timeline",
      label: "Timeline",
      firstRow: {
        content: (
          <div className="flex w-full justify-center">
            <div className=" flex w-[90%] gap-2 justify-start  whitespace-pre bg-[#e0394e] rounded-xl   overflow-hidden h-[22px] leading-6 ">
              <div className="flex !ml-1">
                <span className=" leading-6 text-white font-bold w-2 h-2">
                  !
                </span>
                <span className=" leading-6 text-white truncate max-w-[90%] ">
                  17 - 18 Jan
                </span>
              </div>
              <div></div>
            </div>
          </div>
        ),
        minWidth: "150px",
      },
      secondRow: {
        content: (
          <div className="flex w-full justify-center">
            <div className=" flex w-[90%] gap-2 justify-start  whitespace-pre bg-[#00c875] rounded-xl   overflow-hidden h-[22px] leading-6 ">
              <div className="flex items-center ml-1">
                <span className=" leading-6 text-white font-bold   ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className=" leading-6 text-white truncate max-w-[90%] ">
                  19 - 20 Jan
                </span>
              </div>
            </div>
          </div>
        ),
        minWidth: "150px",
      },
      thirdRow: {
        content: (
          <div className="flex w-full justify-center">
            <div className=" flex w-[90%] gap-2 justify-start whitespace-pre bg-[#333333] rounded-xl   overflow-hidden h-[22px] leading-6 ">
              <div className="flex !ml-1">
                <span className=" leading-6 text-white font-bold w-4 h-4"></span>
              </div>
              <div>
                <span className=" leading-6 text-white  ">21 - 22 Jan</span>
              </div>
            </div>
          </div>
        ),
        minWidth: "150px",
      },
    },
  ];

  const statusColumn = colContent.find((col) => col.id === "status");
  console.log(statusColumn);
  return (
    <div className="flex flex-row gap-4">
      {/* =============================FIRST ROW ============================= */}
      <div className="ps-4 w-[230px]">
        <div className="flex flex-col">
          <div
            className={` px-1 py-2 text-white flex justify-center items-center`}
            style={{ backgroundColor: statusColumn.firstRow.bgColor }}
          >
            {statusColumn && statusColumn.firstRow.content}
          </div>
          <div className=" p-2 bg-[#f6f7fb] border-l-orange-400 border-l-2">
            <div className="flex flex-col gap-3 bg-white p-2">
              <div className="font-bold truncate">{selectedRadio} 1</div>
              <div className="flex flex-col gap-3 ">
                {selectedColumn.map((col) => {
                  const findElement = colContent.find(
                    (element) => element.id === col.id
                  );
                  // eslint-disable-next-line no-lone-blocks
                  {
                    return (
                      findElement.id !== "status" && (
                        <>
                          <div className="flex flex-row justify-between">
                            <div className="flex items-center ">
                              {findElement.label}
                            </div>

                            {findElement.firstRow.bgColor ? (
                              <div
                                className="w-1/2 px-2 py-1 whitespace-nowrap"
                                style={{
                                  backgroundColor: `${findElement.firstRow.bgColor}`,
                                }}
                              >
                                {findElement.firstRow.content}
                              </div>
                            ) : (
                              <div className="w-1/2 bg-[#f6f7fb] px-2 py-1">
                                {findElement.firstRow.content}
                              </div>
                            )}
                          </div>
                        </>
                      )
                    );
                  }
                })}
              </div>
            </div>
            <p className=" max-w-full truncate text-xs">Add {selectedRadio} +</p>
          </div>
        </div>
      </div>
      {/* =============================FIRST ROW ============================= */}

      {/* =============================SECOND ROW ============================= */}
      <div className="ps-4 w-[230px]">
        <div className="flex flex-col">
          <div
            className={` px-1 py-2 text-white flex justify-center items-center`}
            style={{ backgroundColor: `${statusColumn.secondRow.bgColor}` }}
          >
            {statusColumn && statusColumn.secondRow.content}
          </div>
          <div
            className={` p-2 bg-[#f6f7fb] `}
            style={{
              borderLeft: `2px solid ${statusColumn?.secondRow?.bgColor}`,
            }}
          >
            <div className="flex flex-col gap-3 bg-white p-2">
              <div className="font-bold truncate">{selectedRadio} 2</div>
              <div className="flex flex-col gap-3 ">
                {selectedColumn.map((col) => {
                  const findElement = colContent.find(
                    (element) => element.id === col.id
                  );
                  // eslint-disable-next-line no-lone-blocks
                  {
                    return (
                      findElement.id !== "status" && (
                        <>
                          <div className="flex flex-row justify-between">
                            <div className="flex items-center">
                              {findElement.label}
                            </div>

                            {findElement.secondRow.bgColor ? (
                              <div
                                className="w-1/2 px-2 py-1 whitespace-nowrap"
                                style={{
                                  backgroundColor: `${findElement.secondRow.bgColor}`,
                                }}
                              >
                                {findElement.secondRow.content}
                              </div>
                            ) : (
                              <div className="w-1/2 bg-[#f6f7fb] px-2 py-1">
                                {findElement.secondRow.content}
                              </div>
                            )}
                          </div>
                        </>
                      )
                    );
                  }
                })}
              </div>
            </div>
            <p className="truncate text-xs">Add {selectedRadio} +</p>
          </div>
        </div>
      </div>
      {/* =============================SECOND ROW END============================= */}

      {/* =============================THIRD ROW ============================= */}
      <div className="ps-4 w-[230px]">
        <div className="flex flex-col">
          <div
            className={`bg-[${statusColumn.thirdRow.bgColor}] px-1 py-2 text-white flex justify-center items-center`}
            style={{ backgroundColor: statusColumn.thirdRow.bgColor }}
          >
            {statusColumn && statusColumn.thirdRow.content}
          </div>
          <div
            className={` p-2 bg-[#f6f7fb] `}
            style={{
              borderLeft: `2px solid ${statusColumn?.thirdRow?.bgColor}`,
            }}
          >
            <div className="flex flex-col gap-3 bg-white p-2">
              <div className="font-bold truncate">{selectedRadio} 3</div>
              <div className="flex flex-col gap-3 ">
                {selectedColumn.map((col) => {
                  const findElement = colContent.find(
                    (element) => element.id === col.id
                  );
                  // eslint-disable-next-line no-lone-blocks
                  {
                    return (
                      findElement.id !== "status" && (
                        <>
                          <div className="flex flex-row justify-between">
                            <div className="flex items-center">
                              {findElement.label}
                            </div>

                            {findElement.thirdRow.bgColor ? (
                              <div
                                className="w-1/2 px-2 py-1 whitespace-nowrap"
                                style={{
                                  backgroundColor: `${findElement.thirdRow.bgColor}`,
                                }}
                              >
                                {findElement.thirdRow.content}
                              </div>
                            ) : (
                              <div className="w-1/2 bg-[#f6f7fb] px-2 py-1">
                                {findElement.thirdRow.content}
                              </div>
                            )}
                          </div>
                        </>
                      )
                    );
                  }
                })}
              </div>
            </div>
            <p className="truncate text-xs">Add {selectedRadio} +</p>
          </div>
        </div>
      </div>
      {/* =============================THIRD ROW END ============================= */}
    </div>
  );
}

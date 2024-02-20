import React from "react";

export default function CardsTemplate({
  selectedRadio,
  selectedColumn,
  isCustomManagedObject,
  customManagedObjectValue,
}) {
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
          <div className="flex justify-evenly w-full ">
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
            <div className="">17 Jan</div>
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
          <div className="flex w-full items-center justify-center  flex-shrink-0  flex-wrap">
            <span>Action items</span>{" "}
          </div>
        ),
      },
      secondRow: {
        content: (
          <div className="flex w-full items-center justify-center whitespace-pre">
            <span>Meeting notes</span>{" "}
          </div>
        ),
      },
      thirdRow: {
        content: (
          <div className="flex w-full items-center justify-center flex-shrink-0  flex-wrap">
            <span>Other</span>{" "}
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

  return (
    <div className="flex flex-row gap-14">
      <div className="flex flex-col shadow-2xl border-md px-2 pt-2 pb-4 w-[250px]">
        <div className=" flex items-center h-[140px] justify-center bg-[#f6f7fb] w-full">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            width="24"
            height="24"
            aria-hidden="true"
            class="icon_fd9afdf75b"
            data-testid="icon"
          >
            <path
              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
              fill="#C3C6D4"
            ></path>
            <path
              d="M10 5.38477V14.6155M5.38428 10H14.615"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div className="p-1">
          <div className=" flex justify-between mb-2 max-w-full ">
            <div className="truncate">
              {isCustomManagedObject &&
                !customManagedObjectValue.first &&
                "Project 1"}
              {isCustomManagedObject && customManagedObjectValue.first}
              {!isCustomManagedObject && customManagedObjectValue.first}{" "}
            </div>
            <div>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
                aria-hidden="true"
                class="icon_fd9afdf75b"
                data-testid="icon"
              >
                <path
                  d="M10.4339 1.94996C11.5976 1.94797 12.7458 2.21616 13.7882 2.7334C14.8309 3.25083 15.7393 4.00335 16.4416 4.93167C17.144 5.85999 17.6211 6.93874 17.8355 8.08291C18.0498 9.22707 17.9956 10.4054 17.6769 11.525C17.3583 12.6446 16.7839 13.6749 15.9992 14.5347C15.2145 15.3945 14.2408 16.0604 13.1549 16.4797C12.069 16.8991 10.9005 17.0605 9.7416 16.9513C8.72154 16.8552 7.7334 16.5518 6.83723 16.0612L4.29494 17.2723C3.23222 17.7785 2.12271 16.6692 2.62876 15.6064L3.83948 13.0636C3.26488 12.0144 2.94833 10.8411 2.91898 9.64114C2.88622 8.30169 3.21251 6.97789 3.86399 5.8071C4.51547 4.63631 5.4684 3.66119 6.62389 2.98294C7.77902 2.30491 9.09451 1.94825 10.4339 1.94996ZM10.4339 1.94996C10.4343 1.94996 10.4348 1.94996 10.4352 1.94996L10.4341 2.69996L10.4327 1.94996C10.4331 1.94996 10.4335 1.94996 10.4339 1.94996ZM13.1214 4.07707C12.2868 3.66289 11.3673 3.44821 10.4355 3.44996L10.433 3.44996C9.36086 3.44842 8.30784 3.73382 7.38321 4.27655C6.45858 4.81929 5.69605 5.59958 5.17473 6.53645C4.65341 7.47332 4.39232 8.53263 4.41853 9.60446C4.44475 10.6763 4.75732 11.7216 5.32382 12.6318C5.45888 12.8489 5.47411 13.1197 5.36422 13.3505L4.28601 15.615L6.55002 14.5365C6.78078 14.4266 7.05164 14.4418 7.26869 14.5768C8.05992 15.0689 8.95463 15.3706 9.88231 15.458C10.81 15.5454 11.7453 15.4161 12.6145 15.0805C13.4838 14.7448 14.2631 14.2118 14.8913 13.5236C15.5194 12.8353 15.9791 12.0106 16.2342 11.1144C16.4893 10.2182 16.5327 9.27499 16.3611 8.35913C16.1895 7.44328 15.8076 6.57978 15.2454 5.8367C14.6832 5.09362 13.9561 4.49125 13.1214 4.07707Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M11.25 6.5C11.25 6.08579 10.9142 5.75 10.5 5.75C10.0858 5.75 9.75 6.08579 9.75 6.5V8.75H7.5C7.08579 8.75 6.75 9.08579 6.75 9.5C6.75 9.91421 7.08579 10.25 7.5 10.25H9.75V12.5C9.75 12.9142 10.0858 13.25 10.5 13.25C10.9142 13.25 11.25 12.9142 11.25 12.5V10.25H13.5C13.9142 10.25 14.25 9.91421 14.25 9.5C14.25 9.08579 13.9142 8.75 13.5 8.75H11.25V6.5Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            {selectedColumn.map((col) => {
              const findElement = colContent.find(
                (element) => element.id === col.id
              );
              return (
                <>
                  <div className="flex flex-row justify-between">
                    <div className="flex items-center">{findElement.label}</div>

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
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col shadow-2xl border-md px-2 pt-2 pb-4 w-[250px]">
        <div className=" flex items-center h-[140px] justify-center bg-[#f6f7fb] w-full">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            width="24"
            height="24"
            aria-hidden="true"
            class="icon_fd9afdf75b"
            data-testid="icon"
          >
            <path
              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
              fill="#C3C6D4"
            ></path>
            <path
              d="M10 5.38477V14.6155M5.38428 10H14.615"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div className="p-1">
          <div className=" max-w-full flex justify-between mb-2">
            <div className="truncate">
              {isCustomManagedObject &&
                !customManagedObjectValue.second &&
                "Project 2"}
              {isCustomManagedObject && customManagedObjectValue.second}
              {!isCustomManagedObject && customManagedObjectValue.second}{" "}
            </div>
            <div>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
                aria-hidden="true"
                class="icon_fd9afdf75b"
                data-testid="icon"
              >
                <path
                  d="M10.4339 1.94996C11.5976 1.94797 12.7458 2.21616 13.7882 2.7334C14.8309 3.25083 15.7393 4.00335 16.4416 4.93167C17.144 5.85999 17.6211 6.93874 17.8355 8.08291C18.0498 9.22707 17.9956 10.4054 17.6769 11.525C17.3583 12.6446 16.7839 13.6749 15.9992 14.5347C15.2145 15.3945 14.2408 16.0604 13.1549 16.4797C12.069 16.8991 10.9005 17.0605 9.7416 16.9513C8.72154 16.8552 7.7334 16.5518 6.83723 16.0612L4.29494 17.2723C3.23222 17.7785 2.12271 16.6692 2.62876 15.6064L3.83948 13.0636C3.26488 12.0144 2.94833 10.8411 2.91898 9.64114C2.88622 8.30169 3.21251 6.97789 3.86399 5.8071C4.51547 4.63631 5.4684 3.66119 6.62389 2.98294C7.77902 2.30491 9.09451 1.94825 10.4339 1.94996ZM10.4339 1.94996C10.4343 1.94996 10.4348 1.94996 10.4352 1.94996L10.4341 2.69996L10.4327 1.94996C10.4331 1.94996 10.4335 1.94996 10.4339 1.94996ZM13.1214 4.07707C12.2868 3.66289 11.3673 3.44821 10.4355 3.44996L10.433 3.44996C9.36086 3.44842 8.30784 3.73382 7.38321 4.27655C6.45858 4.81929 5.69605 5.59958 5.17473 6.53645C4.65341 7.47332 4.39232 8.53263 4.41853 9.60446C4.44475 10.6763 4.75732 11.7216 5.32382 12.6318C5.45888 12.8489 5.47411 13.1197 5.36422 13.3505L4.28601 15.615L6.55002 14.5365C6.78078 14.4266 7.05164 14.4418 7.26869 14.5768C8.05992 15.0689 8.95463 15.3706 9.88231 15.458C10.81 15.5454 11.7453 15.4161 12.6145 15.0805C13.4838 14.7448 14.2631 14.2118 14.8913 13.5236C15.5194 12.8353 15.9791 12.0106 16.2342 11.1144C16.4893 10.2182 16.5327 9.27499 16.3611 8.35913C16.1895 7.44328 15.8076 6.57978 15.2454 5.8367C14.6832 5.09362 13.9561 4.49125 13.1214 4.07707Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M11.25 6.5C11.25 6.08579 10.9142 5.75 10.5 5.75C10.0858 5.75 9.75 6.08579 9.75 6.5V8.75H7.5C7.08579 8.75 6.75 9.08579 6.75 9.5C6.75 9.91421 7.08579 10.25 7.5 10.25H9.75V12.5C9.75 12.9142 10.0858 13.25 10.5 13.25C10.9142 13.25 11.25 12.9142 11.25 12.5V10.25H13.5C13.9142 10.25 14.25 9.91421 14.25 9.5C14.25 9.08579 13.9142 8.75 13.5 8.75H11.25V6.5Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            {selectedColumn.map((col) => {
              const findElement = colContent.find(
                (element) => element.id === col.id
              );
              return (
                <>
                  <div className="flex flex-row justify-between">
                    <div className="flex items-center">{findElement.label}</div>

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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

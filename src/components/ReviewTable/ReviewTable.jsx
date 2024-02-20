import React, { useEffect, useState } from "react";
import SingleTableCell from "../SingleTableCell/SingleTableCell";
import { Badge, Card, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import CalendarTemplate from "../../templates/CalendarTemplate/CalendarTemplate";
import CardsTemplate from "../../templates/CardsTemplate/CardsTemplate";
import TimelineTemplate from "../../templates/TimelineTemplate/TimelineTemplate";
import KanbanTemplate from "../../templates/KanbanTemplate/KanbanTemplate";
import GanttTemplate from "../../templates/GanttTemplate/GanttTemplate";

export default function ReviewTable({
  rowNumber,
  boardColor,
  marginTop,
  selectedCol,
  selectedRadio,
  isCustomManagedObject,
  customManagedObjectValue,
}) {
  // Use rowNumber as the initial value for rows state

  const { chosenView } = useSelector((state) => state.board);
  const [rows, setRows] = useState(Array.from({ length: rowNumber }));

  const colContent = [
    {
      id: "owner",
      label: "Owner",
      firstRow: {
        content: (
          <div className="flex justify-center w-full">
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
          <div className="text-center text-white w-full ">
            <span>Working on it</span>
          </div>
        ),
        bgColor: "#fdab3d",
      },
      secondRow: {
        content: (
          <div className="text-center text-white w-full ">
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
            <div>17 Jan</div>
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
            <div>17 Jan</div>
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
      firstRow: { content: <></> },
      secondRow: { content: <></> },
      thirdRow: { content: <></> },
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
            <div className=" flex w-[90%] gap-2 justify-start whitespace-pre bg-[#e0394e] rounded-xl   overflow-hidden h-[22px] leading-6 ">
              <div className="flex !ml-1">
                <span className=" leading-6 text-white font-bold w-4 h-4">
                  !
                </span>
              </div>
              <div>
                <span className=" leading-6 text-white  ">17 - 18 Jan</span>
              </div>
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
              </div>
              <div>
                <span className=" leading-6 text-white  ">19 - 20 Jan</span>
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

  const [selectedColumn, setSelectedColumn] = useState([]);
  useEffect(() => {
    setSelectedColumn(selectedCol);
    rowRender();
  }, [selectedCol]);

  useEffect(() => {
    rowRender();
  }, [selectedColumn]);

  const rowRender = () => {
    // Use map to iterate over the rows state
    return rows.map((row, index) => {
      if (index === 0) {
        return (
          <>
            <div
              className={` truncate !border-l-[6px] !border-l-[${boardColor}]  border-solid board_border board_display_size col-[1] px-6 py-0 rounded-[8px_0px_0px]  `}
              style={{ borderLeftColor: `${boardColor}` }}
            >
              {selectedRadio ? (
                <div className="truncate">{selectedRadio}</div>
              ) : (
                <div className={`long_stroke`}></div>
              )}
            </div>
            {/* <div
              className={`  border-solid board_border board_display_size col-[2] justify-center `}
            >
              <div className={`short_stroke`}></div>
            </div>
            <div
              className={`  border-solid board_border board_display_size col-[3] justify-center `}
            >
              <div className={`short_stroke`}></div>
            </div>
            <div
              className={`  border-solid board_border board_display_size col-[4] justify-center `}
            >
              <div className={`short_stroke`}></div>
            </div> */}

            {/* ****************************************Render Title Bang************************ */}
            {selectedColumn?.map((col, index) => {
              const findElement = colContent.find(
                (element) => element.id === col.id
              );
              return (
                <div
                  className={`  border-solid board_border board_display_size justify-center `}
                  style={{ gridColumn: `${index + 2}` }}
                >
                  <span className={`mx-5 whitespace-nowrap`}>
                    {" "}
                    {findElement.label}
                  </span>
                </div>
              );
            })}
            {/* ****************************************Render Title Bang************************ */}

            {/* the last column start */}
            <div
              className={`  border-solid board_border board_display_size  justify-center `}
              style={{ gridColumn: `${selectedColumn?.length + 2}` }}
            >
              <div className={`mx-3`}>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={16}
                  height={16}
                  aria-hidden="true"
                  className={``}
                  data-testid="icon"
                  style={{ color: `var(--color-asphalt_grey)` }}
                >
                  <path
                    d="M10.75 3C10.75 2.58579 10.4142 2.25 10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V9.25H3C2.58579 9.25 2.25 9.58579 2.25 10C2.25 10.4142 2.58579 10.75 3 10.75H9.25V17C9.25 17.4142 9.58579 17.75 10 17.75C10.4142 17.75 10.75 17.4142 10.75 17V10.75H17C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25H10.75V3Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {/* the last column end */}
          </>
        );
      } else if (index === rowNumber - 1) {
        return (
          <>
            <div
              className={` truncate col-[1] opacity-50 px-6 py-0 rounded-[0px_0px_0px_8px] !border-l-[6px] !border-l-[${boardColor}]  border-solid border-b board_border board_display_size  `}
              style={{ borderLeftColor: `${boardColor}` }}
            >
              {selectedRadio ? (
                <div className="truncate"> + Add {selectedRadio}</div>
              ) : (
                <div className={`long_stroke`}></div>
              )}
            </div>
            {/* <div
              className={` col-[2] opacity-50 px-6 py-0 rounded-[0px_0px_0px_8px] !border-l-0  border-t-0 border-solid border-b board_border board_display_size  `}
            ></div>
            <div
              className={` col-[3] opacity-50 px-6 py-0 rounded-[0px_0px_0px_8px] !border-l-0  border-t-0 border-solid border-b board_border board_display_size  `}
            ></div>
            <div
              className={` col-[4] opacity-50 px-6 py-0 rounded-[0px_0px_0px_8px] !border-l-0  border-t-0 border-solid border-b board_border board_display_size  `}
            ></div>
            <div
              className={` col-[5] opacity-50 px-6 py-0 rounded-[0px_0px_0px_8px] !border-l-0  border-t-0 border-solid border-b board_border board_display_size  `}
            ></div> */}
            {selectedColumn?.map((col, index) => {
              if (index === selectedColumn.length - 1) {
                return (
                  <>
                    {" "}
                    <div
                      className={` opacity-50 px-6 py-0  !border-l-0   border-solid border-b board_border board_display_size  `}
                      style={{ gridColumn: `${index + 2}` }}
                    ></div>
                    <div
                      className={` opacity-50 px-6 py-0  !border-l-0  border-solid border-b board_border board_display_size  `}
                      style={{ gridColumn: `${index + 3}` }}
                    ></div>
                  </>
                );
              }
              return (
                <div
                  className={` opacity-50 px-6 py-0  !border-l-0   border-solid border-b board_border  board_display_size  `}
                  style={{ gridColumn: `${index + 2}` }}
                ></div>
              );
            })}
          </>
        );
      } else {
        return (
          <>
            <div
              className={` !border-l-[6px] !border-l-[${boardColor}]  border-solid board_border board_display_size col-[1] px-6 py-0  `}
              style={{
                borderLeftColor: `${boardColor}`,
              }}
            >
              {!selectedRadio && !isCustomManagedObject && (
                <div className="long_stroke"></div>
              )}
              {isCustomManagedObject &&
                Object.values(customManagedObjectValue).every(
                  (value) => value === selectedRadio
                ) && (
                  <>
                    {" "}
                    {index === 1 &&
                      (customManagedObjectValue.first ? (
                        <div className="truncate">
                          {customManagedObjectValue.first} {index}
                        </div>
                      ) : (
                        <></>
                      ))}
                    {index === 2 &&
                      (customManagedObjectValue.second ? (
                        <div className="truncate">
                          {customManagedObjectValue.second} {index}
                        </div>
                      ) : (
                        <></>
                      ))}
                    {index === 3 &&
                      (customManagedObjectValue.third ? (
                        <div className="truncate">
                          {customManagedObjectValue.third} {index}
                        </div>
                      ) : (
                        <></>
                      ))}
                  </>
                )}

              {isCustomManagedObject &&
                customManagedObjectValue &&
                Object.values(customManagedObjectValue).some(
                  (value) => value !== selectedRadio
                ) && (
                  <>
                    {" "}
                    {index === 1 &&
                      (customManagedObjectValue.first ? (
                        <div className="truncate">
                          {customManagedObjectValue.first}
                        </div>
                      ) : (
                        <div className="">Project {index}</div>
                      ))}
                    {index === 2 &&
                      (customManagedObjectValue.second ? (
                        <div className="truncate">
                          {customManagedObjectValue.second}
                        </div>
                      ) : (
                        <div className="">Project {index}</div>
                      ))}
                    {index === 3 &&
                      (customManagedObjectValue.third ? (
                        <div className="truncate">
                          {customManagedObjectValue.third}
                        </div>
                      ) : (
                        <div className="">Project {index}</div>
                      ))}
                  </>
                )}

              {/* {selectedRadio && !isCustomManagedObject && (
                <div className="truncate">
                  {selectedRadio} {index}
                </div>
              )} */}

              {!isCustomManagedObject &&
                customManagedObjectValue &&
                Object.values(customManagedObjectValue).some(
                  (value) => value !== selectedRadio
                ) && (
                  <>
                    {" "}
                    {index === 1 &&
                      (customManagedObjectValue.first ? (
                        <div className="truncate">
                          {customManagedObjectValue.first}
                        </div>
                      ) : (
                        <div className="">Project {index}</div>
                      ))}
                    {index === 2 &&
                      (customManagedObjectValue.second ? (
                        <div className="truncate">
                          {customManagedObjectValue.second}
                        </div>
                      ) : (
                        <div className="">Project {index}</div>
                      ))}
                    {index === 3 &&
                      (customManagedObjectValue.third ? (
                        <div className="truncate">
                          {customManagedObjectValue.third}
                        </div>
                      ) : (
                        <div className="">Project {index}</div>
                      ))}
                  </>
                )}
            </div>

            {index === 1 &&
              selectedColumn?.map((col, index) => {
                const findElement = colContent.find(
                  (element) => element.id === col.id
                );

                return (
                  // <div>
                  //   <div>
                  //     <div>
                  //       {/* <div
                  //       id="ec"
                  //       className="relative h-full cursor-pointer flex items-center justify-center"
                  //     ></div> */}
                  //       <div
                  //         className={`  border-solid board_border board_display_size  justify-center `}
                  //         style={{ gridColumn: `${index + 2}` }}
                  //       >
                  //         <div className="">{findElement.firstRow}</div>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>

                  findElement.firstRow.bgColor ||
                    findElement.firstRow.minWidth ? (
                    <SingleTableCell
                      rowIndex={index}
                      bgColor={findElement.firstRow.bgColor}
                      minWidth={findElement.firstRow.minWidth}
                    >
                      {findElement.firstRow.content}
                    </SingleTableCell>
                  ) : (
                    <SingleTableCell
                      rowIndex={index}
                      minWidth={findElement.firstRow.minWidth}
                    >
                      {findElement.firstRow.content}
                    </SingleTableCell>
                  )
                );
              })}
            {index === 2 &&
              selectedColumn?.map((col, index) => {
                const findElement = colContent.find(
                  (element) => element.id === col.id
                );
                return findElement.secondRow.bgColor ||
                  findElement.secondRow.minWidth ? (
                  <SingleTableCell
                    rowIndex={index}
                    bgColor={findElement.secondRow.bgColor}
                    minWidth={findElement.secondRow.minWidth}
                  >
                    {findElement.secondRow.content}
                  </SingleTableCell>
                ) : (
                  <SingleTableCell
                    rowIndex={index}
                    minWidth={findElement.secondRow.minWidth}
                  >
                    {findElement.secondRow.content}
                  </SingleTableCell>
                );
              })}
            {index === 3 &&
              selectedColumn?.map((col, index) => {
                const findElement = colContent.find(
                  (element) => element.id === col.id
                );
                return findElement.thirdRow.bgColor ||
                  findElement.thirdRow.minWidth ? (
                  <SingleTableCell
                    rowIndex={index}
                    bgColor={findElement.thirdRow.bgColor}
                    minWidth={findElement.thirdRow.minWidth}
                  >
                    {findElement.thirdRow.content}
                  </SingleTableCell>
                ) : (
                  <SingleTableCell
                    rowIndex={index}
                    minWidth={findElement.thirdRow.minWidth}
                  >
                    {findElement.thirdRow.content}
                  </SingleTableCell>
                );
              })}
            <div
              className={`  border-solid board_border border board_display_size border-b-0 justify-center `}
              style={{ gridColumn: `${selectedColumn?.length + 2}` }}
            >
              <div className={`mx-3`}></div>
            </div>
          </>
        );
      }
    });
  };
  useEffect(() => {
    setRows(Array.from({ length: rowNumber }));
  }, [rowNumber]);

  return (
    <>
      {chosenView === "Table" && (
        <div>
          <div id="bang_chinh" className={`ml-8`}>
            <div className={`flex flex-col`}>
              <div
                className={`grid grid-cols-[170px_repeat(${selectedColumn?.length},minmax(auto,200px))_auto];`}
                style={{
                  gridTemplateColumns: `170px repeat(${selectedColumn?.length},minmax(auto,200px) ) auto`,
                }}
              >
                <div
                  className={`col-[1] mb-2 flex items-center justify-start h-9 w-full`}
                  style={{ marginTop: `${marginTop}` }}
                >
                  <div
                    className={` w-[70%] h-[6px] rounded-lg mb-2`}
                    style={{
                      backgroundColor: `${boardColor}`,
                    }}
                  ></div>
                </div>
                {rowRender()}
              </div>
            </div>
          </div>
        </div>
      )}
      {chosenView === "Calendar" && (
        <>
          <CalendarTemplate
            selectedRadio={selectedRadio}
            isCustomManagedObject={isCustomManagedObject}
            customManagedObjectValue={customManagedObjectValue}
          />
        </>
      )}
      {chosenView === "Cards" && (
        <>
          <CardsTemplate
            selectedRadio={selectedRadio}
            selectedColumn={selectedColumn}
            isCustomManagedObject={isCustomManagedObject}
            customManagedObjectValue={customManagedObjectValue}
          />
        </>
      )}
      {chosenView === "Timeline" && (
        <>
          <TimelineTemplate
            selectedRadio={selectedRadio}
            isCustomManagedObject={isCustomManagedObject}
            customManagedObjectValue={customManagedObjectValue}
          />
        </>
      )}
      {chosenView === "Kanban" && (
        <>
          <KanbanTemplate
            selectedColumn={selectedColumn}
            selectedRadio={selectedRadio}
            isCustomManagedObject={isCustomManagedObject}
            customManagedObjectValue={customManagedObjectValue}
          />
        </>
      )}

      {chosenView === "Gantt" && (
        <>
          <GanttTemplate
            selectedColumn={selectedColumn}
            selectedRadio={selectedRadio}
            isCustomManagedObject={isCustomManagedObject}
            customManagedObjectValue={customManagedObjectValue}
          />
        </>
      )}
    </>
  );
}

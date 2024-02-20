import React from "react";

export default function GanttTemplate({
  selectedRadio,
  isCustomManagedObject,
  customManagedObjectValue,
  selectedColumn,
}) {
  return (
    <div>
      <div className="flex flex-row gap-3">
        <div className="flex flex-col ml-16 whitespace-nowrap mt-20  gap-[3.4rem]">
          <span className="truncate w-[90px]">
            {isCustomManagedObject &&
              !customManagedObjectValue.first &&
              "Project 1"}
            {isCustomManagedObject && customManagedObjectValue.first}
            {!isCustomManagedObject && customManagedObjectValue.first}{" "}
          </span>
          <span className="truncate w-[90px]">
            {isCustomManagedObject &&
              !customManagedObjectValue.second &&
              "Project 2"}
            {isCustomManagedObject && customManagedObjectValue.second}
            {!isCustomManagedObject && customManagedObjectValue.second}{" "}
          </span>
          <span className="truncate w-[90px]">
            {" "}
            {isCustomManagedObject &&
              !customManagedObjectValue.third &&
              "Project 3"}
            {isCustomManagedObject && customManagedObjectValue.third}
            {!isCustomManagedObject && customManagedObjectValue.third}{" "}
          </span>
        </div>
        <div>
          <table className="relative">
            <tr>
              <th className="min-w-[90px] h-[50px] font-thin  border border-b-0 border-solid border-[#c3c6d3] "></th>
              <th className="min-w-[90px] h-[50px] font-thin  border border-b-0 border-solid border-[#c3c6d3] "></th>
              <th className="min-w-[90px] h-[50px] font-thin  border border-b-0 border-solid border-[#c3c6d3] "></th>
              <th className="min-w-[90px] h-[50px] font-thin  border border-b-0 border-solid border-[#c3c6d3] "></th>
              <th className="min-w-[90px] h-[50px] font-thin  border border-b-0 border-solid border-[#c3c6d3] "></th>
              <th className="min-w-[90px] h-[50px] font-thin  border border-b-0 border-solid border-[#c3c6d3] "></th>
            </tr>
            <tr>
              <td className="border border-t-0 !border-b-0 h-7 border-[#c3c6d3]"></td>
              <td className="border border-t-0 !border-b-0 h-7 border-[#c3c6d3]"></td>
              <td className="border border-t-0 !border-b-0 h-7 border-[#c3c6d3]"></td>
              <td className="border border-t-0 !border-b-0 h-7 border-[#c3c6d3]"></td>
              <td className="border border-t-0 !border-b-0 h-7 border-[#c3c6d3]"></td>
              <td className="border border-t-0 !border-b-0 h-7 border-[#c3c6d3]"></td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className="border-r relative p-0 max-w-[90px]"
                id="divider"
              >
                <div className="select-none flex w-full relative rounded-sm hover:bg-[#70b4ff] bg-[#579bfc] justify-center  text-white">
                  <span
                    className="truncate"
                    style={{
                      maxWidth: "100%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    {isCustomManagedObject &&
                      !customManagedObjectValue.first &&
                      "Project 1"}
                    {isCustomManagedObject && customManagedObjectValue.first}
                    {!isCustomManagedObject &&
                      customManagedObjectValue.first}{" "}
                  </span>
                </div>
              </td>
              <td className="border-r border-[#c3c6d3]"></td>
              <td className="border-r border-[#c3c6d3]"></td>
              <td className="border-r border-[#c3c6d3]"></td>
              <td className="border-r border-[#c3c6d3]"></td>
            </tr>
            <tr>
              <td className="border-r border-[#c3c6d3] border-l !border-b-0 h-14"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-14"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-14"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-14"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-14"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-14"></td>
            </tr>
            <tr>
              <td
                className=" border-r border-l border-[#c3c6d3]  relative p-0 "
                id="divider"
              ></td>
              <td className="  relative p-0" id="divider"></td>
              <td colSpan={2} className="p-0 max-w-[90px]">
                <div className=" select-none  relative  w-[100%] flex justify-center  rounded-sm hover:bg-[#70b4ff] bg-[#579bfc] justify-center text-white ">
                  <span className="truncate">
                    {isCustomManagedObject &&
                      !customManagedObjectValue.second &&
                      "Project 2"}
                    {isCustomManagedObject && customManagedObjectValue.second}
                    {!isCustomManagedObject &&
                      customManagedObjectValue.second}{" "}
                  </span>
                </div>
              </td>
              <td className="border-r border-[#c3c6d3]"></td>
              <td className="border-r border-[#c3c6d3]"></td>
            </tr>
            <tr>
              <td className="border-r border-[#c3c6d3] border-l !border-b-0 h-14"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-14"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-14"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-14"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-14"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-14"></td>
            </tr>
            <tr>
              <td
                className=" border-r border-[#c3c6d3] border-l relative p-0"
                id="divider"
              ></td>
              <td
                className="  relative p-0 border-[#c3c6d3] border-r"
                id="divider"
              ></td>
              <td className="border-r border-[#c3c6d3]"></td>
              <td className="border-r border-[#c3c6d3]"></td>
              <td colSpan={2} className="p-0 max-w-[90px]">
                <div className=" select-none  relative  w-[100%] flex justify-center  rounded-sm hover:bg-[#70b4ff] bg-[#579bfc] justify-center text-white ">
                  <span className="truncate">
                    {isCustomManagedObject &&
                      !customManagedObjectValue.third &&
                      "Project 3"}
                    {isCustomManagedObject && customManagedObjectValue.third}
                    {!isCustomManagedObject &&
                      customManagedObjectValue.third}{" "}
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r border-[#c3c6d3] border-l !border-b-0 h-16"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-16"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-16"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-16"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-16"></td>
              <td className="border-r border-[#c3c6d3] !border-b-0 h-16"></td>
            </tr>
            <svg
              viewBox="177.5 25.5 26 50"
              className="absolute w-18 h-20 top-[90px] left-[159px]"
            >
              {" "}
              <path
                fill="none"
                opacity={1} // Removed the quotation marks
                stroke="rgba(103, 104, 121, 1)"
                strokeWidth={1} // Corrected the attribute name and removed the quotation marks
                className="relative top-0 " // Corrected the attribute name
                d="M 190.5 75.5 L 177.5 75.5 L 177.5 50.5 L 203.5 50.5 L 203.5 25.5 L 190.5 25.5"
              ></path>
            </svg>

            <svg
              viewBox="132.5 71.5 8 8"
              className="absolute w-2 h-2 top-[166px] left-[175px]"
            >
              <path
                fill="rgba(103, 104, 121, 1)"
                className="relative"
                d="M 140.5 71.49999999999999 L 132.5 75.49999999999999 L 140.5 79.49999999999999 Z"
                transform="translate(0,0) rotate(-180 136.5 75.49999999999999)"
                strokeWidth={1}
                opacity={1}
              />
            </svg>

            <svg
              viewBox="268 75 28 52"
              className="absolute w-18 h-20 top-[170px] left-[340px]"
            >
              <path
                fill="none"
                opacity={1}
                stroke="rgba(103, 104, 121, 1)"
                strokeWidth={1}
                className="highcharts-point-connecting-path highcharts-color-0"
                d="M 281.5 125.5 L 268.5 125.5 L 268.5 100.5 L 294.5 100.5 L 294.5 75.5 L 281.5 75.5"
              />
            </svg>

            <svg
              viewBox="132.5 71.5 8 8"
              className="absolute w-2 h-2 top-[244px] left-[355px]"
            >
              <path
                fill="rgba(103, 104, 121, 1)"
                className="relative"
                d="M 140.5 71.49999999999999 L 132.5 75.49999999999999 L 140.5 79.49999999999999 Z"
                transform="translate(0,0) rotate(-180 136.5 75.49999999999999)"
                strokeWidth={1}
                opacity={1}
              />
            </svg>
          </table>
        </div>
      </div>
    </div>
  );
}

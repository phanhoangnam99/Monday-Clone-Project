import React from "react";

export default function TimelineTemplate({
  selectedRadio,
  isCustomManagedObject,
  customManagedObjectValue,
}) {
  return (
    <div>
      <div className="flex flex-row gap-3">
        <div className="flex flex-col ml-16 whitespace-nowrap mt-20 gap-16">
          <span className="truncate w-[90px]">
            {" "}
            {isCustomManagedObject &&
              !customManagedObjectValue.first &&
              "Project 1"}
            {isCustomManagedObject && customManagedObjectValue.first}
            {!isCustomManagedObject && selectedRadio + " 1"}
          </span>
          <span className="truncate w-[90px]">
            {" "}
            {isCustomManagedObject &&
              !customManagedObjectValue.second &&
              "Project 2"}
            {isCustomManagedObject && customManagedObjectValue.second}
            {!isCustomManagedObject && selectedRadio + " 2"}
          </span>
          <span className="truncate w-[90px]">
            {isCustomManagedObject &&
              !customManagedObjectValue.third &&
              "Project 3"}
            {isCustomManagedObject && customManagedObjectValue.third}{" "}
            {!isCustomManagedObject && selectedRadio + " 3"}
          </span>
        </div>
        <div>
          <table className="relative">
            <tr>
              <th className="min-w-[90px] h-[50px] font-thin   border">
                29 Jan
              </th>
              <th className="min-w-[90px] h-[50px] font-thin  border">
                30 Jan
              </th>
              <th className="min-w-[90px] h-[50px] font-thin  border">
                31 Jan
              </th>
              <th className="min-w-[90px] h-[50px] font-thin  border">
                01 Feb
              </th>
              <th className="min-w-[90px] h-[50px] font-thin  border">
                02 Feb
              </th>
              <th className="min-w-[90px] h-[50px] font-thin  border">
                03 Feb
              </th>
            </tr>
            <tr>
              <td className="border !border-b-0 h-7"></td>
              <td className="border !border-b-0 h-7"></td>
              <td className="border !border-b-0 h-7"></td>
              <td className="border !border-b-0 h-7"></td>
              <td className="border !border-b-0 h-7"></td>
              <td className="border !border-b-0 h-7"></td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className=" max-w-[90px] border-r relative p-0"
                id="divider"
              >
                <div className=" flex w-full rounded-sm bg-orange-400 justify-center text-white ">
                  <span className="truncate">
                    {" "}
                    {isCustomManagedObject &&
                      !customManagedObjectValue.first &&
                      "Project 1"}
                    {isCustomManagedObject && customManagedObjectValue.first}
                    {!isCustomManagedObject &&
                      customManagedObjectValue.first}{" "}
                  </span>
                </div>
              </td>
              <td className="border-r !border-b-0"></td>
              <td className="border-r"></td>
              <td className="border-r"></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-l !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
            </tr>
            <tr>
              <td className=" border-r border-l relative p-0" id="divider"></td>
              <td className="  relative p-0" id="divider"></td>
              <td colSpan={2} className=" max-w-[90px] p-0">
                <div className=" truncate relative  w-[100%] flex justify-center  rounded-sm bg-[#34e093] justify-center text-white ">
                  <span className="truncate">
                    {" "}
                    {isCustomManagedObject &&
                      !customManagedObjectValue.second &&
                      "Project 2"}
                    {isCustomManagedObject && customManagedObjectValue.second}
                    {!isCustomManagedObject &&
                      customManagedObjectValue.second}{" "}
                  </span>
                </div>
              </td>
              <td className="border-r"></td>
              <td className="border-r"></td>
            </tr>
            <tr>
              <td className="border-r border-l !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
            </tr>
            <tr>
              <td className=" border-r border-l relative p-0" id="divider"></td>
              <td className="  relative p-0 border-r" id="divider"></td>
              <td className="border-r"></td>
              <td className="border-r"></td>
              <td colSpan={2} className="max-w-[90px] p-0">
                <div className=" relative  w-[100%] flex justify-center  rounded-sm bg-[#f75f75] justify-center text-white ">
                  <span className="truncate">
                    {isCustomManagedObject &&
                      !customManagedObjectValue.third &&
                      "Project 3"}
                    {isCustomManagedObject && customManagedObjectValue.third}{" "}
                    {!isCustomManagedObject && customManagedObjectValue.third}{" "}
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r border-l !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
              <td className="border-r !border-b-0 h-16"></td>
            </tr>
            <g className=" absolute w-[1px] top-[50px] left-[210px]  h-[292px] z-0 bg-[#0073ea]">
              <path
                fill="none"
                className="highcharts-plot-line highcharts-current-date-indicator"
                stroke="#0073ea"
                strokeWidth={1}
                d="M 283.5 58 L 283.5 345"
              />
            </g>
            <span
              className="highcharts-plot-line-label "
              data-z-index={0}
              style={{
                position: "absolute",
                fontFamily:
                  '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: 20,
                whiteSpace: "nowrap",
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0deg)",
                transformOrigin: "50% 12px",
                left: "204.5px",
                top: 36,
                textOverflow: "ellipsis",
                color: "rgb(0, 115, 234)",
                overflow: "hidden",
                visibility: "inherit",
              }}
            >
              •
            </span>
          </table>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function SingleTableCell({
  children,
  rowIndex,
  bgColor,
  minWidth,
}) {
  return (
    <div>
      {/* <div
        id="ec"
        className="relative h-full cursor-pointer flex items-center justify-center"
      ></div> */}
      <div
        className={`  border-solid board_border board_display_size  justify-center 
        px-3
             `}
        style={{ gridColumn: `${rowIndex + 2}`, backgroundColor: `${bgColor}` }}
      >
        <div className="w-full">
          {" "}
          <span className="grid max-w-[200px] w-full">
            <div
              className={`min-w-[100px] leading-9 w-full 
               
              `}
              style={{ minWidth: minWidth && minWidth }}
            >
              <div className="w-full h-full text-center">
                <div className="flex justify-start items-center w-full">
                  {children}
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";

export default function ReviewTable({
  rowNumber,
  boardColor,
  marginTop,
  content,
}) {
  // Use rowNumber as the initial value for rows state

  const [rows, setRows] = useState(Array.from({ length: rowNumber }));

  const [selectedColumn, setSelectedColumn] = useState([]);

  const rowRender = () => {
    // Use map to iterate over the rows state
    return rows.map((row, index) => {
      if (index === 0) {
        return (
          <>
            <div
              className={` !border-l-[6px] !border-l-[${boardColor}] border-solid board_border board_display_size col-[1] px-6 py-0 rounded-[8px_0px_0px]  `}
              style={{ borderLeftColor: `${boardColor}` }}
            >
              <div className={`long_stroke`}></div>
            </div>
            <div
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
            </div>
            <div
              className={`  border-solid board_border board_display_size col-[5] justify-center `}
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
          </>
        );
      } else if (index === rowNumber - 1) {
        return (
          <>
            <div
              className={` col-[1] opacity-50 px-6 py-0 rounded-[0px_0px_0px_8px] !border-l-[6px] !border-l-[${boardColor}] !border-t-0 border-solid border-b board_border board_display_size  `}
              style={{ borderLeftColor: `${boardColor}` }}
            >
              <div className={`long_stroke`}></div>
            </div>
            <div
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
            ></div>
          </>
        );
      } else {
        return (
          <>
            <div
              className={` !border-l-[6px] !border-l-[${boardColor}] border-solid board_border board_display_size col-[1] px-6 py-0  `}
              style={{
                borderLeftColor: `${boardColor}`,
              }}
            >
              <div className={`long_stroke`}></div>
            </div>
            <div
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
            </div>
            <div
              className={`  border-solid board_border board_display_size col-[5] justify-center `}
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
  }, [rowNumber, boardColor]);
  return (
    <div id="bang_chinh" className={`ml-8`}>
      <div className={`flex flex-col`}>
        <div
          className={`grid grid-cols-[170px_minmax(auto,200px)_minmax(auto,200px)_minmax(auto,200px)_auto]`}
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
  );
}

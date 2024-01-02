import React from "react";

export default function RadioButton({
  name,
  radioName,
  value,
  selected,
  onChange,
}) {
  //   const onChange = () => {

  //   };
  return (
    <div>
      <div className="inline-flex mx-1 my-1 items-center border ps-4 pe-4 border-gray-200 rounded-full  ">
        <div className="flex items-center">
          <input
            id={radioName}
            type="radio"
            value={value}
            name={name && "bordered-radio"}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  "
            checked={selected === value}
            onChange={onChange}
            // onClick={onChange}
          />
          <label
            htmlFor={radioName}
            className="w-full flex py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {radioName}
          </label>
        </div>
      </div>
    </div>
  );
}

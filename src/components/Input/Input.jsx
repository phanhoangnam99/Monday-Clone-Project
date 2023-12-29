import React from "react";

//

export default function Input({
    className,
    errorMessage,
    classNameInput = "p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm",
  classNameError = `mt-1 text-red-600 min-h-[1.25rem] text-sm ${errorMessage?"block":"hidden"}`,
  name,
  field,
  form,
  ...rest
}) {
  return (
    <div className={"relative " + className}>
      <input className={classNameInput} name={name} {...field} {...rest} />

      <div className={classNameError}>{errorMessage}</div>

    </div>
  );
}

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ColumnSelBtn({
  id,
  icon,
  iconColor,
  label,
  onClick,
  desc,
  selected,
 
}) {
  // viết nội dung cho từng hàng



  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      setSelected(true);
    }
  }, []);
  const handleClick = () => {
    setSelected(!isSelected);
    onClick(id, !isSelected);
  };

  return (
    <motion.button
      id={id}
      className={`p-2 my-1  rounded-[4px] border-[2px] border-solid ${
        !isSelected ? "border-gray-400" : ""
      } ${isSelected ? "border-blue-400" : ""} `}
      onClick={handleClick}
      style={{}}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex">
        <div
          className={`flex rounded-sm w-6 mr-2 justify-center items-center bg-[${iconColor}]`}
          style={{ backgroundColor: iconColor }}
        >
          {icon}
        </div>
        <div>{label}</div>
      </div>
    </motion.button>
  );
}

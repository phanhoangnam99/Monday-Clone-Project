import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function ColumnSelBtn({
  id,
  icon,
  iconColor,
  label,
  onClick,
  desc,
  selected,
  chosenBtn,
}) {
  // viết nội dung cho từng hàng
  const { chosenView } = useSelector((state) => state.board);

  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    if (chosenBtn.find((btn) => btn.id === id) || chosenView === id) {
      setSelected(true);
    } else setSelected(false);
  }, [chosenBtn,chosenView]);
  const handleClick = () => {
    // setSelected(!isSelected);

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

import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`lg:p-2 p-1 rounded-full text-xl ${isDarkMode ? 'lg:bg-gray-800 text-white' : 'lg:bg-gray-300 text-white lg:text-black'}`}
    >
      {isDarkMode ? <MdLightMode/> : <MdOutlineLightMode/>}
    </button>
  );
};

export default DarkModeToggle;

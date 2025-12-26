import { useState } from 'react';

export const useDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (itemName) => {
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const isDropdownOpen = (itemName) => {
    return openDropdown === itemName;
  };

  return {
    openDropdown,
    handleMouseEnter,
    handleMouseLeave,
    isDropdownOpen,
  };
};
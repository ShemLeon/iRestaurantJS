import { useState, useEffect } from 'react';
import './DropDownMenu.css';
import DropdownColumn from './components/DropdownColumn';

function DropdownMenu({ isOpen, content, onMouseEnter, onMouseLeave }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!content || !isVisible) return null;

  return (
    <div 
      className={`dropdownMenu ${isOpen ? 'open' : 'closing'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="dropdownContent">
        {content.columns.map((column, idx) => (
          <DropdownColumn key={idx} column={column} />
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
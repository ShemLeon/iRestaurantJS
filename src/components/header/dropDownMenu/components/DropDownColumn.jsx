import './DropdownColumn.css';
import DropdownItem from './DropdownItem';

function DropdownColumn({ column }) {
  return (
    <div className="dropdownColumn">
      <h3 className="columnTitle">{column.title}</h3>
      <div className="columnItems">
        {column.items.map((item, itemIdx) => (
          <DropdownItem key={itemIdx} item={item} />
        ))}
      </div>
    </div>
  );
}

export default DropdownColumn;
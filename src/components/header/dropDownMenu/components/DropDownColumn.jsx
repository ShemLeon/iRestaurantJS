import './DropdownColumn.css';
import DropdownItem from './DropdownItem';

function DropdownColumn({ column, t }) {
  return (
    <div className="dropdownColumn">
     <h3 className="columnTitle">{t(`products.${column.title}`)}</h3>
      <div className="columnItems">
        {column.items.map((item, itemIdx) => (
          <DropdownItem key={itemIdx} item={item} t={t} />
        ))}
      </div>
    </div>
  );
}

export default DropdownColumn;
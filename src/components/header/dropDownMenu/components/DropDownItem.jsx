import './DropdownItem.css';

function DropdownItem({ item }) {
  return (
    <a href={item.link} className="dropdownItem">
      {item.image && (
        <img src={item.image} alt={item.name} className="dropdownItemImage" />
      )}
      <span className="dropdownItemText">{item.name}</span>
    </a>
  );
}

export default DropdownItem;
import './DropdownItem.css';

function DropdownItem({ item, t }) {
  return (
    <a href={item.link} className="dropdownItem">
      <span className="dropdownItemText">{t(`products.${item.name}`)}</span>
    </a>
  );
}

export default DropdownItem;
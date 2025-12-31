import './DropdownItem.css';

function DropdownItem({ item, t }) {
  return (
    <a href={item.link} className="dropdownItem">
      <div className="dropdownItemCard">
        <div className="dropdownItemImageWrapper">
          <img 
            src={item.image} 
            alt={item.name} 
            className="dropdownItemImage" 
          />
        </div>
        <div className="dropdownItemInfo">
          <h4 className="dropdownItemTitle">{t(`products.${item.name}`)}</h4>
          <p className="dropdownItemDescription">{t(`products.${item.name}Description`)}</p>
        </div>
      </div>
    </a>
  );
}

export default DropdownItem;
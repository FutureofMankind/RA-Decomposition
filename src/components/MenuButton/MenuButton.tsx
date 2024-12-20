import './menuButton.css';

const MenuButton = () => {
  return (
    <button className="menu-button" type="button">
      <span className="menu-button__dot"></span>
      <span className="menu-button__dot"></span>
      <span className="menu-button__dot"></span>
    </button>
  );
};

export default MenuButton;
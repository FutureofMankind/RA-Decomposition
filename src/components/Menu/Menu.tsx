import './menu.css';

interface IMenuProps {
  menuData: {
    id: string;
    title: string;
    link: string;
  }[];
}

const Menu = ({ menuData }: IMenuProps) => {
  const items = menuData.map((item) => {
    return (
      <li key={item.id} className="menu__item">
        <a href={item.link} className="menu__link">
          {item.title}
        </a>
      </li>
    );
  });

  return (
    <nav className="menu">
      <ul className="menu__list">
        {items}
      </ul>
    </nav>
  );
};

export default Menu;
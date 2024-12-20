import './sidebar.css';

interface ISidebarProps {
  src: string;
  title: string;
  text: string;
}

const Sidebar = ({ src, title, text }: ISidebarProps) => {
  return (
    <aside className="sidebar">
      <img className="sidebar__image" src={src} alt="картинка" />
      <h3 className="sidebar__title">{title}</h3>
      <p className="sidebar__text">{text}</p>
    </aside>
  );
};

export default Sidebar;
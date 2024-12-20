import { PropsWithChildren } from 'react';
import './header.css';

const Header = ({ children }: PropsWithChildren) => {
  return <header className="header">{children}</header>;
};

export default Header;
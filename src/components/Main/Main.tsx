import { PropsWithChildren } from 'react';
import './main.css';

const Main = ({ children }: PropsWithChildren) => {
  return <main className="main">{children}</main>;
};

export default Main;
import { PropsWithChildren } from 'react';
import './column1.css';

const Column3 = ({children}: PropsWithChildren) => {
  return (
    <div className="column-3">{children}</div>
  )
}

export default Column3
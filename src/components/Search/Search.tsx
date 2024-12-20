import { PropsWithChildren } from 'react';
import './search.css';

const Search = ({ children }: PropsWithChildren) => {
  return <div className="search">{children}</div>;
};

export default Search;
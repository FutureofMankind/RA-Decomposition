import { PropsWithChildren } from 'react';
import './sectionSearch.css';

const SectionSearch = ({ children }: PropsWithChildren) => {
  return <section className="section-search">{children}</section>;
};

export default SectionSearch;
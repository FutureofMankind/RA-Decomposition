import { ReactNode } from 'react';
import './news.css';

interface INewsProps {
  titles: {
    id: string;
    title: string;
  }[];
  activeTitle: string;
  date: string;
  items: {
    id: string;
    icon: string;
    text: string;
  }[];
  children?: ReactNode;
}

const News = ({ titles, activeTitle, date, items, children }: INewsProps) => {
  const titleItems = titles.map((item) => {
    const nameOfClass = `news__title-item${
      item.title === activeTitle ? ' news__title-item_active' : ''
    }`;

    return (
      <li key={item.id} className={nameOfClass}>
        {item.title}
      </li>
    );
  });

  const newsItems = items.map((el) => {
    return (
      <li key={el.id} className="news__item">
        <img src={el.icon} alt="иконка" className="news__item-image" />
        <p className="news__item-text">{el.text}</p>
      </li>
    );
  });

  return (
    <section className="news">
      <header className="news__header">
        <ul className="news__title-list">{titleItems}</ul>
        <div className="news__date">{date}</div>
      </header>
      <ul className="news__list">{newsItems}</ul>
      <footer className="news__footer">{children}</footer>
    </section>
  );
};

export default News;
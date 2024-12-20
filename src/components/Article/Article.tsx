import { ReactNode } from 'react';
import './article.css';

interface IArticleProps {
  title: string;
  children: ReactNode;
}

const Article = ({ title, children }: IArticleProps) => {
  return (
    <article className="article">
      <h3 className="article__title">
        <a href="#" className="article__link">
          {title}
        </a>
      </h3>
      <div className="article__content">{children}</div>
    </article>
  );
};

export default Article;
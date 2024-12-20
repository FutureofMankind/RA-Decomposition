import './articleVisited.css';

interface IArticleVisitedProps {
  obj: {
    id: string;
    title: string;
    text: string;
  };
}

const ArticleVisited = ({ obj }: IArticleVisitedProps) => {
  return (
    <a href="#" className="article__text visited">
      <span className="visited__title">{obj.title}</span>
      <span className="visited__separator">&#8213;</span>
      <span className="visited__text">{obj.text}</span>
    </a>
  );
};

export default ArticleVisited;
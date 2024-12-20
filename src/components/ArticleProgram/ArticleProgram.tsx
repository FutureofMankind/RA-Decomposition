import './articleProgram.css';

interface IArticleProgramProps {
  obj: {
    id: string;
    time: string;
    item:  string;
    canal: string;
  }
}

const ArticleProgram = ({ obj }: IArticleProgramProps) => {
  return (
    <a href="#" className="article__text program">
      <span className="program__time">{obj.time}</span>
      <span className="program__item">{obj.item}</span>
      <span className="program__canal">{obj.canal}</span>
    </a>
  );
};

export default ArticleProgram;
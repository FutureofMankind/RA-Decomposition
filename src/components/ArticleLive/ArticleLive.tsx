import play from '../../assets/icon-play.svg';
import './articleLive.css';

interface IArticleLiveProps {
  obj: {
    id: string;
    item: string;
    canal: string;
  };
}

const ArticleLive = ({ obj }: IArticleLiveProps) => {
  return (
    <a href="#" className="article__text live">
      <img src={play} className="live__icon" />
      <span className="live__item">{obj.item}</span>
      <span className="live__canal">{obj.canal}</span>
    </a>
  );
};

export default ArticleLive;
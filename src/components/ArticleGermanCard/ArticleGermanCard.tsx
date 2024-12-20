interface IArticleGermanCardProps {
    text: string;
  }
  
  const ArticleGermanCard = ({ text }: IArticleGermanCardProps) => {
    return (
      <a href="#" className="article__text german-card">
        {text}
      </a>
    );
  };
  
  export default ArticleGermanCard;
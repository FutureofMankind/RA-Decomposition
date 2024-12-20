import './articleWeather.css';

interface IArticleWeatherProps {
  icon: string;
  current: string;
  morning: string;
  day: string;
}

const ArticleWeather = ({ icon, current, morning, day }: IArticleWeatherProps) => {
  return (
    <a href="#" className="article__text weather">
      <img src={icon} className="weather__icon" />
      <span className="weather__current-temperature">
        <span>{current}</span>&deg;C
      </span>
      <span className="weather__temperature">
        <span className="weather__morning-temperature">
          Утром <span>{morning}</span>,
        </span>
        <span className="weather__day-temperature">
          днём <span>{day}</span>
        </span>
      </span>
    </a>
  );
};

export default ArticleWeather;
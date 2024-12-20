import logo from '../../assets/logo-yandex.svg';
import './logo.css';

const Logo = () => {
  return (
    <a className="logo" href="#">
      <img className="logo__img" src={logo} alt="Яндекс" />
    </a>
  );
};

export default Logo;
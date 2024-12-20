import './searchForm.css';

const SearchForm = () => {
  return (
    <form className="search-form">
      <label htmlFor="search-form" className="search-form__label visually-hidden">Найти</label>
      <input id="search-form" className="search-form__input" type="text" />
      <button className="search-form__button" type="button">Найти</button>
    </form>
  );
};

export default SearchForm;
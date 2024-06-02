import PropTypes from "prop-types";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchWrap}>
      <label>
        Find contact by name
        <input
          className={css.searchInput}
          type="text"
          name="search"
          placeholder="John Wick"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};

export default SearchBox;
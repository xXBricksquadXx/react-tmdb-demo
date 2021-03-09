import { Btn } from "components/base";
import PropTypes from "prop-types";

const SearchBar = ({ handler, label }) => {
  return (
    <form className="flex gap-2 justify-center p-2 mb-4">
      <label htmlFor="search" className="sr-only">
        {label}
      </label>
      <input type="search" id="search" placeholder={label} />
      <Btn />
    </form>
  );
};

SearchBar.propTypes = {
  handler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default SearchBar;

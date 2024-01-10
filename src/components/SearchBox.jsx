import { BiSearchAlt } from "react-icons/bi";

import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Name Your Book"
        value={search}
        onChange={(event) => setSearch(event.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <BiSearchAlt />
      </button>
    </div>
  );
}

export default SearchBox;

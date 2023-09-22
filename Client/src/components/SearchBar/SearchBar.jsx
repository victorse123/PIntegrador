import { useState } from "react";
import Styles from './SearchBar.module.css';

/* eslint-disable react/prop-types */
const SearchBar = (props) => {
  const [id, setId] = useState('')

  const handleChange = (e) => {
    setId(e.target.value)
    // console.log(id)
  }
  const { onSearch } = props;
  return (
    <div className={Styles.wrapperSearch}>
      <input type="search" placeholder="ID...🔍" onChange={handleChange} value={id}/>
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}

export default SearchBar;
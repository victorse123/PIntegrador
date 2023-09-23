import Cards from "../Cards/Cards";
import styles from "./Home.module.css";


const Home = (props) => {
  const {characters, onClose} = props;
    return (
      <div className={styles.hom}>
        <Cards characters={characters} onClose={onClose}/>
        </div>
    )
  }
  
  export default Home

  
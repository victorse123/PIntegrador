import styles from "./Random.module.css";

function Ran(props) {
   
    const addRandomCharacter = () => {
      const randomId = Math.floor(Math.random() * 826) + 1; // Genera un ID aleatorio entre 1 y 826
      props.onSearch(randomId.toString()); // Llama a onSearch con el ID aleatorio como cadena
    };
  
    return (
      <div className={styles.ran}>
        <button onClick={addRandomCharacter}>Agregar Personaje Aleatorio</button>
      </div>
    );
  }
  export default Ran;
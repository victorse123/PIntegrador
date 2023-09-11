import Cards from "../Cards/Cards";


const Home = (props) => {
  const {characters, onClose} = props;
    return (
      <div>
        <Cards characters={characters} onClose={onClose}/>
        </div>
    )
  }
  
  export default Home

  
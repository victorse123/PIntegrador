import styles from "./Favorites.module.css";
import { connect } from 'react-redux';
import Card from '../Card/Card';

const Favorites = (props) => {
    const {myFavorites} = props;

    console.log("Estado de myFavorites:", myFavorites);
    
  return (
    <div className={styles.fav}>
         {myFavorites.map((char) => {
            return(
              <Card
                key={char.id}
                id={char.id}
                name={char.name}
                status={char.status}
                species={char.species}
                gender={char.gender}
                origin={char.origin.name}
                image={char.image}
              />
           );
         })}
    </div>
  );
};
const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites,
    };
}
  

export default connect (mapStateToProps, null)(Favorites);

/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLocation } from "react-router-dom";
import styles from "./Card.module.css";
import { addFav, removeFav } from "../../Redux/Action";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Card (props) {
  const { id, name, status, species, gender, image, onClose, addFav, removeFav, myFavorites } = props;
  const { pathname } = useLocation ()

  const [isFav, setIsFav]= useState(false)
  
  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  }
  
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
      setIsFav(true);
       }
    });
 }, [myFavorites]);


  return (
    <div className={styles.wrapperCard}>{
      isFav ? (
         <button onClick={handleFavorite}>❤️</button>
      ) : (
         <button onClick={handleFavorite}>🤍</button>
      ) 
    } 
    {pathname !== '/favorites' && (
      <button 
        className={styles.btn} 
        onClick={()=> {
          onClose(id);
        }}
      >
        X
      </button> )}
      <img src={image} alt="character" />
      <div className={styles.wrapperText}>
        <Link strict to={`/detail/${id}`}>
          <h1 className={styles.name}>{name}</h1>
        </Link>
        <div className={styles.details}>
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character))
    },
    removeFav: (id) => {
      dispatch(removeFav(id))
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  };
 
}

export default connect (mapStateToProps, mapDispatchToProps)(Card);
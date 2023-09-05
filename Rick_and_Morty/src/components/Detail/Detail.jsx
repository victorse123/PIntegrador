import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const {id} = useParams()
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No esta asignado este id');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
    <div>
      <h2>Name: {character?.name}</h2>
      <h2>Status: {character?.status}</h2>
      <h2>Specie:{character?.species}</h2>
      <h2>Gender:{character?.gender}</h2>
      <h2>Origin: {character.origin?.name}</h2>
      <img src={character?.image} alt="" />
    </div>
  )
}

export default Detail
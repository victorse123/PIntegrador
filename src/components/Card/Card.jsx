import { Link } from "react-router-dom";
import styles from "./Card.module,css";

const Card = (props) => {
  const { id, name, status, species, gender, origin, image, onClose } = props;

  return (
    <div>
      <button onClick={()=> onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
      <h2>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt="" />
    </div>
  );
}
{
  (() => {
    if (status === "Dead") {
      return (
        <div className={`${styles.badge} position-absolute badge bg-danger`}>
          {status}
        </div>
      );
    } else if (status === "Alive") {
      return (
        <div className={`${styles.badge} position-absolute badge bg-success`}>
          {status}
        </div>
      );
    } else {
      return (
        <div
          className={`${styles.badge} position-absolute badge bg-secondary`}
        >
          {status}
        </div>
      );
    }
  })()}


export default Card
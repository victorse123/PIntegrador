/* eslint-disable no-unused-vars */
import React, { useState} from 'react'
import validator from "./validation";
import styles from "./Form.module.css";

const Form = (props) => {
    const [userData, setUserData] = useState({email: "", password: ""});
    const {login} = props
    const [errors, setErrors] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const handleChange = (e) => {
      setErrors(validator({...userData, [e.target.name]: e.target.value}))
        setUserData({...userData, [e.target.name]: e.target.value});
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      login(userData)
    }
    


  return (
    <div className={`overlay ${isAuthenticated ? 'opaque' : ''}`}>
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.portal}>
          <h1 className={styles.title.bottom}>Rick And Morty</h1>
      
        
          {/*USERNAME*/} 
          <div>
            <label htmlFor="email">Email</label>
            <input name="email" type="text" placeholder="Email..." value={userData.email} onChange={handleChange}  />
            {errors.e1 ? (
            <p>{errors.e1}</p>
            ) : errors.e2 ? (
            <p>{errors.e2}</p>
            ) : (
                <p>{errors.e3}</p>
            )}
          </div>

          {/*PASSWORD*/}
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={userData.password}/>
            {errors.p1 ? (
            <p>{errors.p1}</p>
            ) : (
            <p>{errors.p2}</p>
            )
            }
          
            <div className={styles.btn}></div>
              <button type='submit'>LOGIN</button>
            
          </div>

          <div className={styles.btn2}></div>
            <button type='submit'>CHECK IN</button>
          

        </div>
      </form>

    </div>
    </div>
  );
};

export default Form


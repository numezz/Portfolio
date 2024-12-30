import React from 'react'
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.centerBlock}>
        <div className={styles.avatar}>
          <img src="../images/avatar.jpg" alt="failed load" />
        </div>
        <div className={styles.name}>Numezz</div>
        <div className={styles.desc}>
          Junior Python and React developer, working on web applications and learning both backend and frontend development.
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttonGH}>
            <a href="https://github.com/numezz" target="_blank" rel="noopener noreferrer">
              <img src="../svgs/github.svg" alt="failed load" />
            </a>
          </div>
          <div className={styles.buttonSF}>
            <a href="https://open.spotify.com/playlist/41zmD9lvaCcxBETn4qLVsn?si=61aeefd7b69a4593&pt=dc475869a9d948920ca09d01a2b02a31S" target="_blank" rel="noopener noreferrer">
              <img src="../svgs/spotify.svg" alt="failed load" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main

import React from 'react'
import styles from './trackscard.module.css';

function UpcomingEvent({ id, title, alt, src, popupheading, popupcontent, cardinfo }) {
    return (
        <div className={styles.upcomingevent}>
          <div className={styles.container}>
            {title}
            {/* <img src={src} alt={alt} /> */}
          </div>
        </div>
    );
  }

export default UpcomingEvent

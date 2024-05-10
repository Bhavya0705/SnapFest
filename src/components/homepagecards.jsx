import React from 'react';
import styles from './trackscard.module.css';
import { NavLink } from "react-router-dom";

function TracksCard({ id, title, alt, src, popupheading, popupcontent, cardinfo }) {
  // const [showPopup, setShowPopup] = useState(false);

  // const togglePopup = () => {
  //   setShowPopup(!showPopup);
  //   // Toggle body overflow style
  //   document.body.style.overflow = showPopup ? 'auto' : 'hidden';
  // };

  return (
    <NavLink to={cardinfo}>
      <div className={styles.track_card}>
        <div className={styles.track_img}>
          <img src={src} alt={alt} />
        </div>
      </div>
    </NavLink>
  );
}

export default TracksCard
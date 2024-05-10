import React from 'react';
import './eventpage.css';
import lights from '../assets/images/lights.jpg'
import BookingCard from '../components/bookingcards';


function ColdplayConcert({ id, title, alt, src, popupheading, popupcontent, cardinfo, vendor1, vendor2, vendor3, vendor4 }) {
    // const [showPopup, setShowPopup] = useState(false);

    // const togglePopup = () => {
    //   setShowPopup(!showPopup);
    //   // Toggle body overflow style
    //   document.body.style.overflow = showPopup ? 'auto' : 'hidden';
    // };

    return (
        // <NavLink to={cardinfo}>
        <div className="eventpage">
            <div className="eventimage">
                <img src={lights} alt='lights' />
                <div className='eventtitle'>{title}</div>
            </div>
            <div>
                <BookingCard vendor={vendor1}/>
                <BookingCard vendor={vendor2}/>
                <BookingCard vendor={vendor3}/>
                <BookingCard vendor={vendor4}/>
            </div>
        </div>
        // </NavLink>
    );
}


export default ColdplayConcert;

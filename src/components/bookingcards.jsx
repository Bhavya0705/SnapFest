import React from 'react'
import './bookingcard.css';

function BookingCard({ vendor }) {
    return (
        <div className='bookingcard'>
            <div className="vendor">
                {vendor}
            </div>
            <div className="bookbutton">
                <button class="button-30">Book Now</button>
            </div>
        </div>
    )
}

export default BookingCard

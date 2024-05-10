import './App.css';
import LandingPage from './pages/Landing';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import Tickets from './pages/PastTickets';
import ColdplayConcert from './pages/EventPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <section>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/home' element={<Homepage />} />
              <Route path='/yourtickets' element={<Tickets />} />
              <Route path='/yourtickets' element={<Tickets />} />
              <Route path='/home/anniversaries' element={<ColdplayConcert key="" src="" title="Anniversary" alt="" popupcontent="" cardinfo="" vendor1="Florist" vendor2="Decorations" vendor3="Caterer" vendor4 = "Other" />} />
              <Route path='/home/birthdays' element={<ColdplayConcert key="" src="" title="Birthday" alt="" popupcontent="" cardinfo="" vendor1="Bakery" vendor2="Decorations" vendor3="DJ/Music" vendor4 = "Other" />} />
              <Route path='/home/corporate' element={<ColdplayConcert key="" src="" title="Corporate" alt="" popupcontent="" cardinfo="" vendor1="Caterer" vendor2="Music" vendor3="Bartending Services" vendor4 = "Other"  />} />
              <Route path='/home/engagements' element={<ColdplayConcert key="" src="" title="Engagement" alt="" popupcontent="" cardinfo="" vendor1="Caterer" vendor2="Decorations" vendor3="DJ/Music" vendor4 = "Other"  />} />
              <Route path='/home/fundraising' element={<ColdplayConcert key="" src="" title="Fundraising" alt="" popupcontent="" cardinfo="" vendor1="Artists" vendor2="Printing" vendor3="Security" vendor4 = "Other"  />} />
              <Route path='/home/puja' element={<ColdplayConcert key="" src="" title="Puja" alt="" popupcontent="" cardinfo="" vendor1="Priest" vendor2="Florist" vendor3="Catering" vendor4 = "Other" />} />
              <Route path='/home/retirements' element={<ColdplayConcert key="" src="" title="Retirement Parties" alt="" popupcontent="" cardinfo="" vendor1="Catering" vendor2="Bartending" vendor3="DJ/Music" vendor4 = "Other" />} />
              <Route path='/home/planyourown' element={<ColdplayConcert key="" src="" title="Plan a custom event" alt="" popupcontent="" cardinfo="" vendor1="Catering" vendor2="Decorations" vendor3="DJ/Music" vendor4 = "Other" />} />
              {/* <Route path='/about' element={<Homepage />} /> */}
            </Routes>
          </section>
        </div>
      </Router>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
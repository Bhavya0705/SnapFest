import React from 'react'
import './PastTickets.css';
import Navbar from '../components/navbar.jsx/navbar';
// import Homepagecard from '../components/homepagecards';
import anniversaries from '../assets/images/homepage/anniversaries.png';
import bdays from '../assets/images/homepage/bdays.png';
import corporate from '../assets/images/homepage/corporate.png';
import UpcomingEvent from '../components/upcomingevent';

const upcomingCards = [
  {
    id: 1,
    title: "Parents Anniversary",
    src: anniversaries,
    alt: "retrograde",
    cardinfo: "/home/anniversaries",
    description: "Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."

  },
  {
    id: 2,
    title: "Anaya's Birthday",
    src: bdays,
    alt: "coding",
    cardinfo: "/home/birthdays",
    description: "In an era of rapid digital transformation, the imperative to secure financial systems and data is paramount, underlining the critical intersection of cybersecurity and finance.Dive deep into this, leveraging cutting-edge technologies and strategic approaches to safeguard financial transactions and fend off cyber threats. Shape the future of cybersecurity in finance and ensure the integrity of global financial systems"
  },
  {
    id: 3,
    title: "Farewell party",
    cardinfo: "/home/corporate",
    src: corporate,
    alt: "robot",
    description: "From electronics to IoT devices and beyond,  creativity and innovation in Hardware lets you to push the boundaries of physical computing and realize your visions. Design and prototype innovative solutions that address real-world challenges and enhance user experiences. Whether you're an experienced hardware enthusiast or a curious beginner, this is a chance to explore, experiment, and create groundbreaking hardware innovations."

  },
];

const pastCards = [
  {
    id: 1,
    title: "Siri's Birthday",
    src: anniversaries,
    alt: "retrograde",
    cardinfo: "/home/anniversaries",
    description: "Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."

  },
  {
    id: 2,
    title: "Christmas Party",
    src: bdays,
    alt: "coding",
    cardinfo: "/home/birthdays",
    description: "In an era of rapid digital transformation, the imperative to secure financial systems and data is paramount, underlining the critical intersection of cybersecurity and finance.Dive deep into this, leveraging cutting-edge technologies and strategic approaches to safeguard financial transactions and fend off cyber threats. Shape the future of cybersecurity in finance and ensure the integrity of global financial systems"
  },
  {
    id: 3,
    title: "Purnima puja",
    cardinfo: "/home/corporate",
    src: corporate,
    alt: "robot",
    description: "From electronics to IoT devices and beyond,  creativity and innovation in Hardware lets you to push the boundaries of physical computing and realize your visions. Design and prototype innovative solutions that address real-world challenges and enhance user experiences. Whether you're an experienced hardware enthusiast or a curious beginner, this is a chance to explore, experiment, and create groundbreaking hardware innovations."

  },
];

const Tickets = () => {
  return (
    <div className='pasticketspage'>
      <Navbar />
      <div className='upcoming'>
        Upcoming Events
        <div className="trackscards">
          <div className="gridContainer">
            {upcomingCards.map((track) => (
              <UpcomingEvent key={track.id} src={track.src} title={track.title} alt={track.alt} popupcontent={track.description} cardinfo={track.cardinfo} />
            ))}
          </div>
        </div>
      </div>
      <div className='upcoming'>
        Past Events
        <div className="trackscards">
          <div className="gridContainer">
            {pastCards.map((track) => (
              <UpcomingEvent key={track.id} src={track.src} title={track.title} alt={track.alt} popupcontent={track.description} cardinfo={track.cardinfo} />
            ))}
          </div>
        </div>
      </div>

    </div>

  )
}

export default Tickets

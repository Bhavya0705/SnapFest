import React from 'react';
import './Homepage.css';
import anniversaries from '../assets/images/homepage/anniversaries.png';
import bdays from '../assets/images/homepage/bdays.png';
import corporate from '../assets/images/homepage/corporate.png';
import engagements from '../assets/images/homepage/engagements.png';
import fundraising from '../assets/images/homepage/fundraising.png';
import planyourown from '../assets/images/homepage/planyourown.png';
import puja from '../assets/images/homepage/puja.png';
import retirements from '../assets/images/homepage/retirements.png';
import Homepagecard from '../components/homepagecards';
import Navbar from '../components/navbar.jsx/navbar';
// import sflogo from '../assets/images/sflogo.png';

const TracksList = [
  {
    id: 1,
    title: "Open Innovation",
    src: anniversaries,
    alt: "retrograde",
    cardinfo: "/home/anniversaries",
    description: "Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."

  },
  {
    id: 2,
    title: "Cybersecurity",
    src: bdays,
    alt: "coding",
    cardinfo: "/home/birthdays",
    description: "In an era of rapid digital transformation, the imperative to secure financial systems and data is paramount, underlining the critical intersection of cybersecurity and finance.Dive deep into this, leveraging cutting-edge technologies and strategic approaches to safeguard financial transactions and fend off cyber threats. Shape the future of cybersecurity in finance and ensure the integrity of global financial systems"
  },
  {
    id: 3,
    title: "Hardware",
    cardinfo: "/home/corporate",
    src: corporate,
    alt: "robot",
    description: "From electronics to IoT devices and beyond,  creativity and innovation in Hardware lets you to push the boundaries of physical computing and realize your visions. Design and prototype innovative solutions that address real-world challenges and enhance user experiences. Whether you're an experienced hardware enthusiast or a curious beginner, this is a chance to explore, experiment, and create groundbreaking hardware innovations."

  },
  {
    id: 4,
    title: "Health",
    cardinfo: "/home/engagements",
    src: engagements,
    alt: "happi happi",
    description: "Are you passionate about making a difference in people's lives? Do you want to contribute to society and help the less fortunate? Join the HackOwasp 6.0 health track and work towards creating innovative projects that cater to the health needs of the marginalized and underprivileged. By leveraging technology, you can design solutions that increase accessibility to healthcare services, improve the quality of care, and reduce healthcare disparities. So, if you're looking for an opportunity to serve others and make a positive impact, HackOwasp 6.0 is the platform for you."

  },
  {
    id: 6,
    title: "Sponsor Tracks",
    cardinfo: "/home/fundraising",
    src: fundraising,
    alt: "market",
    description: "Hackowasp 6.O, a global level hackathon, has attracted a range of sponsors such as NOT@MRP , Verbwire, Polygon. Each sponsor has its own track, offering participants an opportunity to work on specific challenges and win prizes. Participants can choose which track to participate in based on their interests and work alongside mentors and experts to develop their ideas. The prizes range from cash rewards to seed funding, making Hackowasp 6.O an exciting event for tech enthusiasts worldwide."
  },
  {
    id: 1,
    title: "Open Innovation",
    cardinfo: "/home/puja",
    src: puja,
    alt: "retrograde",
    description: "Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."
  },
  {
    id: 1,
    title: "Open Innovation",
    cardinfo: "/home/retirements",
    src: retirements,
    alt: "retrograde",
    description: "Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."
  },
  {
    id: 1,
    title: "Open Innovation",
    cardinfo: "/home/planyourown",
    src: planyourown,
    alt: "retrograde",
    description: "Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation."
  },
];


const TracksPage = () => {
  return (
    <div className="trackspage">
      <Navbar />
      <div className="tracks_heading">Looking to plan something? We've got you covered!</div>
      <div className="trackscards">
        <div className="gridContainer">
          {TracksList.map((track) => (
            <Homepagecard key={track.id} src={track.src} title={track.title} alt={track.alt} popupcontent={track.description} cardinfo={track.cardinfo}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TracksPage;
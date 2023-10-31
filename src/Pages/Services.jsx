import { Container, Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard'; 
import './Services.css'

const Services = () => {
  const serviceData = [
    {
      image: 'https://i.pinimg.com/564x/73/59/14/735914730b58624c03a6057c8386c385.jpg',
      title: 'Live Match Updates',
      description:
        'Providing real-time score updates, ball-by-ball commentary, and live streaming for cricket matches.',
    },
    {
      image: 'https://i.pinimg.com/736x/1f/b9/04/1fb904fef08509cbe39e493aedd463dd.jpg',
      title: 'News and Articles',
      description:
        'Publishing cricket news, match reports, analysis, and feature articles.',
    },
    {
      image: 'https://i.pinimg.com/736x/97/31/1c/97311ce61e0ec66add5fce7ab548541d.jpg',
      title: 'Player Profiles',
      description:
        'Offering detailed profiles of cricket players, including their career statistics, achievements, and personal information.',
    },
    {
      image: 'https://i.pinimg.com/564x/6b/91/b1/6b91b14cdef3eabf16b196503754e446.jpg',
      title: 'Schedule and Fixtures',
      description:
        'Displaying match schedules, series details, and upcoming fixtures.',
    },
    {
      image: 'https://i.pinimg.com/564x/59/2a/81/592a81563c37f43184de975a7082769e.jpg',
      title: 'Stats and Records',
      description:
        'Providing comprehensive cricket statistics, records, and historical data.',
    },
    {
      image: 'https://i.pinimg.com/564x/aa/e7/c5/aae7c5cf18b47349585a03766529d6dc.jpg',
      title: 'Fantasy Cricket',
      description:
        'Allowing users to participate in fantasy cricket leagues, create teams, and compete with others.',
    },
    {
      image: 'https://i.pinimg.com/736x/5c/7e/13/5c7e13313b0959c68451e43c94a0a44e.jpg',
      title: 'Live Chat and Forums',
      description:
        'Enabling fans to discuss matches, players, and cricket-related topics through live chat and forums.',
    },
  ];
  
  

  return (
    <Container>
      
      <h1>Cricket Website Services</h1>
      <br />
      <Row>
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Services;


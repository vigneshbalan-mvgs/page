import { Container, Row, Col, Card } from 'react-bootstrap';
import './CardStyles.css'; 

const players = [
    {
        name: 'Virat Kohli',
        team: 'India',
        ranking: 1,
        image: 'https://i.pinimg.com/564x/80/7e/cd/807ecd299cfe2120f058949e8ed4a8e7.jpg',
      },
      {
        name: 'Steve Smith',
        team: 'Australia',
        ranking: 2,
        image: 'https://i.pinimg.com/564x/ee/4d/8c/ee4d8c1d29ba51c03f25d16bb6238213.jpg',
      },
      {
        name: 'Kane Williamson',
        team: 'New Zealand',
        ranking: 3,
        image: 'https://i.pinimg.com/564x/19/fc/f1/19fcf12e8f1c20b8aa9425152c79671f.jpg',
      },
      {
        name: 'Sachin Tendulkar',
        team: 'India',
        ranking: 4,
        image: 'https://i.pinimg.com/564x/a2/63/5c/a2635c5097b9a1320addadf920341378.jpg',
      },
      {
        name: 'Brian Lara',
        team: 'West Indies',
        ranking: 5,
        image: 'https://i.pinimg.com/564x/cf/0a/4d/cf0a4d202beb70da58acc7f9507f359e.jpg',
      },
      {
        name: 'Jacques Kallis',
        team: 'South Africa',
        ranking: 6,
        image: 'https://i.pinimg.com/736x/32/cf/c4/32cfc4884b520e9479acfe715dc2c6d9.jpg',
      },
      {
        name: 'Wasim Akram',
        team: 'Pakistan',
        ranking: 7,
        image: 'https://i.pinimg.com/564x/e5/d0/ee/e5d0ee9c14ebd6cc4633c09d3359b60a.jpg',
      },
      {
        name: 'Muttiah Muralitharan',
        team: 'Sri Lanka',
        ranking: 8,
        image: 'https://i.pinimg.com/564x/0d/2d/db/0d2ddbe30a83596ca19a5d416066d9c6.jpg',
      },
      {
        name: 'Ricky Ponting',
        team: 'Australia',
        ranking: 9,
        image: 'https://i.pinimg.com/564x/96/e7/24/96e724e417bc32374370e3c99036dee8.jpg',
      },
      {
        name: 'Shane Warne',
        team: 'Australia',
        ranking: 10,
        image: 'https://i.pinimg.com/564x/0b/a0/c9/0ba0c942d1c2444da3e2c82fa38458ca.jpg',
      }
    ];
  

const PlayerCard = ({ player }) => {
  return (
    <Col md={4}>
      <Card className="player-card">
        <Card.Img className='card-img' variant="top" src={player.image} />
        <Card.Header className="card-header">Rank: {player.ranking}</Card.Header>
        <Card.Body>
          <Card.Title className="card-title">{player.name}</Card.Title>
          <Card.Text className="card-text">Team: {player.team}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Playercard = () => {
  return (
    <Container>
      <h1 className="page-title">Top Cricket Players</h1>
      <Row>
        {players.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </Row>
    </Container>
  );
};

export default Playercard;

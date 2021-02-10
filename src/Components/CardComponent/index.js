import {useContext} from 'react';
import {Card, Button} from 'react-bootstrap';
import MainContext from '../../contexts/MainContext';

function CardComponent({item}) {
  const {setShowDetailsModal,setDetailsModal} = useContext(MainContext)
  const clickHandler = () => {
    setDetailsModal(item);
    setShowDetailsModal(true);
  }
    return (
<Card className="text-center" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.imgUrl} />
  <Card.Body>
    <Card.Title style={{color:"grey", fontSize:13}}>{item.title}</Card.Title>
    <Card.Text>
    {item.description.length > 50 ? item.description.slice(0,50) : item.description}
        </Card.Text>
    <Button onClick={clickHandler} variant="primary">Teklif Ver</Button>
  </Card.Body>
</Card>
    )
}

export default CardComponent

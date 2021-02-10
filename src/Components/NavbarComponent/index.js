import {useState} from 'react'
import { Button, Nav, Navbar} from 'react-bootstrap';
import AddModal from '../AddModal';
function NavbarComponent() {

  const [modalShow, setModalShow] = useState(false);

    return (
<>
  <Navbar bg="light" variant="dark">
    <Navbar.Brand style={{color:"#0074e4"}}>Kapu</Navbar.Brand>
    <Nav className="mr-auto">

    </Nav>
    
    {/**<Button style={{marginRight:15 ,color:"#0074e4", backgroundColor: "#e2f0fe", border:"none"}} variant="outline-info">Danışman Ekle</Button> */}
      <Button onClick={() => setModalShow(true)} style={{marginRight:15 ,color:"#0074e4", backgroundColor: "#e2f0fe", border:"none"}} variant="outline-info">Tapu Ekle</Button>
      <AddModal show={modalShow} onHide={() => setModalShow(false)}/>
  </Navbar>
</>
    )
}

export default NavbarComponent

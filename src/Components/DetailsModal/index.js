import axios from 'axios';
import React,{useContext} from 'react';
import {Modal,Button} from 'react-bootstrap';
import MainContext from '../../contexts/MainContext';

function DetailsModal() {
    const {
      showDetailsModal,
      setShowDetailsModal,
      detailsModal,
      setLs
    } = useContext(MainContext);
    
    const clickHandler = () => {
      //Delete with axios
        axios.delete("https://kaputest.herokuapp.com/delete/"+detailsModal.id).then(
          res => {
            setLs( prev => {return [...prev].filter(item => {return item.id !== detailsModal.id})});
            setShowDetailsModal(false);
          }
        );
      //setnewls
    }

    return (
        <Modal
          onHide={() => setShowDetailsModal(false)}
          show={showDetailsModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {detailsModal.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{width:"100%", height:"60%"}}><img style={{width:"100%", height:"100%"}} alt="img" src={detailsModal.imgUrl}></img></div>
            <br></br>
            <div><p style={{fontSize:13, color:"grey"}}>{`${detailsModal.state} / ${detailsModal.status}`}</p></div>
            <br></br>
            <div><p>{detailsModal.description}</p></div>
            <br></br>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={clickHandler}>Sil</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default DetailsModal

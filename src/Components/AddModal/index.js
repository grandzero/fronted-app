import axios from 'axios';
import React,{useState,useRef,useContext} from 'react';
import {Modal,Button,Form} from 'react-bootstrap';
import * as iller from './il.json';
import OptionBox from './OptionBox';
import MainContext from '../../contexts/MainContext';
const status = ["BAĞ&BAHÇE", "TARLA", "DAİRE", "FABRİKA", "DÜKKAN", "OFİS"];

function AddCardModal({show,onHide}) {
    const {setLs} = useContext(MainContext);
    const [input, setInput] = useState("");
    const [title, setTitle] = useState("");
    const [stat, setStatus] = useState("Daire");
    const [state, setStates] = useState("Ankara");
    const [img,setImg] = useState("");
    const clickHandler = (e) => {
      handleSubmit(null);
      onHide();
    }

    const inputRef = useRef();
    const handleSubmit = e => {
        e && e.preventDefault();
        setTitle("");
        setStatus("");
        setStates("");

        axios.post("https://kaputest.herokuapp.com/add", {title:title + " " + state + " " + stat,description:input,imgUrl:img,status:stat, state:state});
        setLs(prev => {
          return [...prev,{title:title + " " + state + " " + stat,description:input,imgUrl:img,status:stat, state:state}];
        });
        onHide();
    }
    

    return (
        <Modal
          onHide={onHide}
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onShow={() => {inputRef.current.focus()}}
          
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {"Tapu Ekle"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form  onSubmit={handleSubmit} >
                <label >Başlık</label>
                <br></br>
                <input ref={inputRef} type="text" style={{width:"70%"}} value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <br></br>
                <br></br>
                <label >Açıklama</label>
                <br></br>
                <input  type="text" style={{width:"70%"}} value={input} onChange={(e) => setInput(e.target.value)}></input>
                <br></br>
                <br></br>
                <label >Resim Url</label>
                <br></br>
                <input  type="text" style={{width:"70%"}} value={img} onChange={(e) => setImg(e.target.value)}></input>
                <br></br>
                <br></br>
                <OptionBox type={0} setStates={setStates} options={iller.iller} title={"Bulunduğu il"}/>
                <br></br>
                <OptionBox type={1} setStatus={setStatus} options={status} title={"Durum"} />

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={clickHandler}>Kaydet</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default AddCardModal

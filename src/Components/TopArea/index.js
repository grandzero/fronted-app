import React from 'react'
import {Row, Container} from 'react-bootstrap';
import style from './toparea.module.css';
function index() {
    return (
        <Row className={style.area}>
            <Container>
            <div style={{width:"100%",marginTop:"10vh"}} xl={12} lg={12} ><h1 className={style.txtcolor}>Kapu.com</h1></div>
            <br></br>
            <div style={{width:"100%"}}><h2 className={style.txtcolor}>Elinizde kapı gibi tapunuz olsun</h2></div>
            </Container>
        </Row>
    )
}

export default index

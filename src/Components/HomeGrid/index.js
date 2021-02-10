import {useContext} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CardComponent from '../CardComponent';
import style from './homegrid.module.css';
import MainContext from '../../contexts/MainContext';
function HomeGrid() {
    const {ls} = useContext(MainContext)
    return (
        <Container className={style.grid}>
            <Row className={style.row}>
                {ls.length !== 0  ? ls.map((item,id) => {
                    return <Col key={id} className={style.gridcol} xl={3} lg={3} md={6} sm={6} xs={12}><CardComponent item={item}/></Col>
                }) : <p>Kayıt bulunamadı ...</p>}
        
            </Row>
        </Container>
    )
}

export default HomeGrid

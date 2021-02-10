import {useContext,useState} from 'react';
import {Row,Col} from 'react-bootstrap';
import style from './index.module.css';
import MainContext from '../../contexts/MainContext';
import axios from 'axios';
function Search() {
    
    const {setSearchOption,setLs,searchOption} = useContext(MainContext);
    const [value, setValue] = useState("");
    const clickHandler = (e) => {
        setSearchOption(e.target.value);
    }
    const changeHandler = (e) => {
        e.target.value && setValue(e.target.value);
        let endpoint = "";
        switch(searchOption) {
            case "state":
              endpoint = "https://kaputest.herokuapp.com//find/state/" + value;
              break;
            case "desc":
                endpoint = "https://kaputest.herokuapp.com/0/find/desc/" + value;
              break;
            case "title":
                endpoint = "https://kaputest.herokuapp.com//find/title/" + value;
            break;
            default:
                endpoint = "https://kaputest.herokuapp.com//all";
          }
          
          value && axios.get(endpoint).then(res => setLs(res.data));
          !value && axios.get("https://kaputest.herokuapp.com//all").then(res => setLs(res.data));
    }
    return (
        <Row className={style.searchbararea}>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}><input onChange={changeHandler} className={style.searchbar} type="text" placeholder="Arama.."></input></Col>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={style.optionarea}>
            <input onClick={clickHandler} type="radio" id="name" name="option" value="state"></input>
            <label className={style.optionlabel} htmlFor="name">Lokasyona Göre Ara</label>
            <input onClick={clickHandler} type="radio" id="cons" name="option" value="title"></input>
            <label className={style.optionlabel} htmlFor="cons">Başlığa Göre Ara</label>
            <input onClick={clickHandler} type="radio" id="desc" name="option" value="desc"></input>
            <label className={style.optionlabel} htmlFor="desc">Açıklama  ya Göre Ara</label>
            </Col>
        </Row>
    )
}

export default Search

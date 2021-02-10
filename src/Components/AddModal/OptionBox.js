import React from 'react';
import {Form} from 'react-bootstrap';
function OptionBox({options,title,setStates,setStatus,type}) {

    
    return (
        <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>{title}</Form.Label>
        <Form.Control as="select" custom>
            {
                options && options.map((o, id) => {
                    return <option onClick={() => type === 0 ? setStates(o) : setStatus(o)} key={id}>{o}</option>
                })
            }
        </Form.Control>
      </Form.Group>
    )
}

export default OptionBox

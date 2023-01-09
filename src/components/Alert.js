import React,{useState} from 'react';
import Alert from 'react-bootstrap/Alert'

const CAlert = ({variant,heading,text}) => {

    const [show, setShow] = useState(true);
    
    return (
        <Alert show={show} variant={variant} onClose={()=>setShow(!show)}  dismissible >
            <Alert.Heading>{heading}</Alert.Heading>
            <p>{text}</p>
            </Alert>
    );
}

export default CAlert;

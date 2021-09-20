import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button';

const MessageFive = () => {

    const [randomMessage, setRandomMessage] = useState("");
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(props.onStartGame);

    fetch("/api/bottle/").then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(jsonResponse => setRandomMessage(jsonResponse.randomMessage))


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Message in a bottle :</Modal.Title>
                </Modal.Header>
                <Modal.Body>{randomMessage}</Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MessageFive;

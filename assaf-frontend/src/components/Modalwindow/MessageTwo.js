import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button';

const MessageTwo = () => {

    const [isSpoildRum, setIsSpoildRum] = useState();
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(props.onStartGame);

    fetch("/api/barrel/").then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(jsonResponse => setIsSpoildRum(jsonResponse.barrelRum))

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isSpoildRum ? "Game Over" : "You Win"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{isSpoildRum ? "The rum was spoild!" : "The rum was amazing!"}</Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MessageTwo;

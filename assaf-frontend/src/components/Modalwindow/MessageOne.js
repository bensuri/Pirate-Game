import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button';

const MessageOne = () => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(props.onStartGame);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Game Over</Modal.Title>
                </Modal.Header>
                <Modal.Body>You stay In the same place!</Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MessageOne;

import StartPose from "./StartPose";
import Barrel from "./Barrel";
import Dragon from "./Dragon";
import Treasure from "./Treasure";
import Bottle from "./Bottle";
import Island from "./Island";
import Pirate from "./Pirate";
import ShowMessage from "../Modalwindow/ShowMessage";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "./Board.css";


const Board = (props) => {


    return (
        <div className="board-frame">

            <ShowMessage onCase={props.onBoardNumber} onStartPlay={props.onBoardStart} />

            <Container display="background-img: none;">
                <Row>
                    <Col><StartPose />{props.onBoardNumber === 1 && <div className="start-p-pose"><Pirate /></div>}</Col>
                    <Col><Barrel />{props.onBoardNumber === 2 && <div className="barrel-p-pose"><Pirate /></div>}</Col>
                    <Col><Dragon />{props.onBoardNumber === 3 && <div className="dragon-p-pose"><Pirate /></div>}</Col>
                </Row>
                <Row>
                    <Col><Bottle />{props.onBoardNumber === 5 && <div className="bottle-p-pose"><Pirate /></div>}</Col>
                    <Col><Treasure />{props.onBoardNumber === 4 && <div className="Treasure-p-pose"><Pirate /></div>}</Col>
                    <Col><Island />{props.onBoardNumber === 6 && <div className="island-p-pose"><Pirate /></div>}</Col>
                </Row>
            </Container>

        </div >
    );
}
export default Board;
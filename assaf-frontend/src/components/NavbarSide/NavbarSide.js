import Button from 'react-bootstrap/Button';
import BrowseImg from '../../images/Shape26.png';
import BrowseHandImg from '../../images/Layer8.png';
import { useState, useEffect } from 'react';

import "./NavbarSide.css";

const NavbarSide = (props) => {

    const [diceNumber, setDiceNumber] = useState(1);
    const [isStarted, setIsStarted] = useState(false);

    let DiceImgPrefix = 'http://127.0.0.1:8080\\public\\Diceimage\\dice';
    let DiceImgPostfix = '.png';


    const rollDice = () => {

        setIsStarted(true);

        fetch("/api/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonResponse => setDiceNumber(jsonResponse.diceNumber))
    };

    useEffect(() => {
        props.onDiceNumber(() => {
            return (diceNumber);
        });
        props.onStarted(() => {
            return (isStarted);
        })
    });

    return (
        <div className="sidenav">
            <a href="/">
                <img className="image1" alt="" src={BrowseImg} />
                <img className="image2" alt="" src={BrowseHandImg} />
            </a>

            <Button className="Button-roll" variant="warning" onClick={rollDice}>Roll dice</Button>{' '};

            <img className="imageDice" alt="" src={DiceImgPrefix + diceNumber + DiceImgPostfix} />

        </div>
    );
}
export default NavbarSide;
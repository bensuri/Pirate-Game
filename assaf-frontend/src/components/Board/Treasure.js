import "./Treasure.css";
import treasureImage from "../../images/layer_04.png"
import shape1 from "../../images/Shape1.png";
import layer4 from "../../images/layer_4.png";
const Treasure = () => {
    return (
        <div className="Treasure-pose">
            <img alt="" src={treasureImage} />

            <div>
                <img className="shape-pose" alt="" src={shape1} />
                <img className="number-pose" alt="" src={layer4} />
            </div>

        </div>
    );
}
export default Treasure;



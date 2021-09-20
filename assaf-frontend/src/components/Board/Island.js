import "./Island.css";
import islandImage from "../../images/layer_06.png"
import shape1 from "../../images/Shape1.png";
import layer6 from "../../images/layer_6.png";
const Island = () => {
    return (
        <div className="island-pose">
            <img alt="" src={islandImage} />
            <div>
                <img className="shape-pose" alt="" src={shape1} />
                <img className="number-pose" alt="" src={layer6} />
            </div>
        </div>
    );
}
export default Island;
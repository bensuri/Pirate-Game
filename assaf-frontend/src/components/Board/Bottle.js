import "./Bottle.css";
import bottleImage from "../../images/layer_05.png"
import shape1 from "../../images/Shape1.png";
import layer5 from "../../images/layer_5.png";
const Bottle = () => {
    return (
        <div className="bottle-pose">
            <img alt="" src={bottleImage} />
            <div>
                <img className="shape-pose" alt="" src={shape1} />
                <img className="number-pose" alt="" src={layer5} />
            </div>
        </div>
    );
}
export default Bottle;
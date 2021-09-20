import "./Dragon.css";

import dragonImg from "../../images/layer_03.png"
import shape1 from "../../images/Shape1.png";
import layer3 from "../../images/layer_3.png";
const Dragon = () => {
    return (
        <div className="dragon-pose">
            <img alt="" src={dragonImg} />
            <div>
                <img className="shape-pose" alt="" src={shape1} />
                <img className="number-pose" alt="" src={layer3} />
            </div>
        </div>
    );
}
export default Dragon;
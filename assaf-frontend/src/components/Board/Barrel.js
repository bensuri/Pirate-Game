import "./Barrel.css";

import barrelImg from "../../images/layer_02.png";
import shape1 from "../../images/Shape1.png";
import layer2 from "../../images/layer_2.png";
const Barrel = () => {
    return (
        <div className="barrel-pose">
            <img alt="" src={barrelImg} />
            <div>
                <img className="shape-pose" alt="" src={shape1} />
                <img className="number-pose" alt="" src={layer2} />
            </div>
        </div>
    );
}
export default Barrel;
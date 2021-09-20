
import "./StartPose.css";
import startImage from "../../images/layer_01.png";
import shape1 from "../../images/Shape1.png";
import layer1 from "../../images/layer_1.png";
const StartPose = () => {
    return (
        <div>
            <div className="start-pose">
                <img alt="" src={startImage} />
                <div>
                    <img className="shape-pose" alt="" src={shape1} />
                    <img className="number-pose" alt="" src={layer1} />
                </div>
            </div>
        </div>
    );
}
export default StartPose;


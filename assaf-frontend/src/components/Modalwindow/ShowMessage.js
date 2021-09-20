import MessageOne from "./MessageOne";
import MessageTwo from "./MessageTwo";
import MessageThree from "./MessageThree";
import MessageFour from "./MessageFour";
import MessageFive from "./MessageFive";
import MessageSix from "./MessageSix";

const ShowMessage = (props) => {

    return (
        props.onStartPlay === true && props.onCase === 1 ? <MessageOne /> :
            props.onCase === 2 ? <MessageTwo /> :
                props.onCase === 3 ? <MessageThree /> :
                    props.onCase === 4 ? <MessageFour /> :
                        props.onCase === 5 ? <MessageFive /> :
                            props.onCase === 6 && <MessageSix />
    );
}
export default ShowMessage
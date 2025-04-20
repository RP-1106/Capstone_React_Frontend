import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Submit(props){
    return(
        <Button onClick={props.fun}>{props.content}
        </Button>
    );
}

export default Submit;
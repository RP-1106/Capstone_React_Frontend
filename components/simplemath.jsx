import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function CalculatorButtons(props) {
    return( 
        <Button variant={props.color}
        onClick={() => props.onClick(props.content)}
        >{props.content}</Button>
     );
}

export default CalculatorButtons;
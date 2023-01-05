import { ACTIONS } from "./App";
import './App.scss'

function DigitButton({ dispatch, digit }) {
    return(
        <button 
        onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit }})}
        className="calculatorGrid__btn"
        >
            {digit}
        </button>
    )
}

export default DigitButton;
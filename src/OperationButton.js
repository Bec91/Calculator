import { ACTIONS } from "./App";
import './App.scss'

function OperationButton({ dispatch, operation }) {
    return(
        <button 
        onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation }})}
        className="calculatorGrid__btn"
        >
            {operation}
        </button>
    )
}

export default OperationButton;
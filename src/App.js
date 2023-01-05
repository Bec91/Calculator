import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="calculatorGrid">
        <div className="calculatorGrid__output">
          <div className="calculatorGrid__previous">123,456 *</div>
          <div className="calculatorGrid__current">123,456</div>
        </div>
        <button className="calculatorGrid__btn calculatorGrid__spanTwo">AC</button>
        <button className="calculatorGrid__btn">DEL</button>
        <button className="calculatorGrid__btn">/</button>
        <button className="calculatorGrid__btn">1</button>
        <button className="calculatorGrid__btn">2</button>
        <button className="calculatorGrid__btn">3</button>
        <button className="calculatorGrid__btn">*</button>
        <button className="calculatorGrid__btn">4</button>
        <button className="calculatorGrid__btn">5</button>
        <button className="calculatorGrid__btn">6</button>
        <button className="calculatorGrid__btn">+</button>
        <button className="calculatorGrid__btn">7</button>
        <button className="calculatorGrid__btn">8</button>
        <button className="calculatorGrid__btn">9</button>
        <button className="calculatorGrid__btn">-</button>
        <button className="calculatorGrid__btn">.</button>
        <button className="calculatorGrid__btn">0</button>
        <button className="calculatorGrid__btn calculatorGrid__spanTwo">=</button>      
      </div>
    </div>
  );
}

export default App;

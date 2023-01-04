import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="calculator-grid">
        <div className="output">
          <div className="output__prevOperand">123,456 *</div>
          <div className="output__currentOperand">123,456</div>
        </div>
        <button className="calculator-grid__btn span-two">AC</button>
        <button className="calculator-grid__btn">DEL</button>
        <button className="calculator-grid__btn">/</button>
        <button className="calculator-grid__btn">1</button>
        <button className="calculator-grid__btn">2</button>
        <button className="calculator-grid__btn">3</button>
        <button className="calculator-grid__btn">*</button>
        <button className="calculator-grid__btn">4</button>
        <button className="calculator-grid__btn">5</button>
        <button className="calculator-grid__btn">6</button>
        <button className="calculator-grid__btn">+</button>
        <button className="calculator-grid__btn">7</button>
        <button className="calculator-grid__btn">8</button>
        <button className="calculator-grid__btn">9</button>
        <button className="calculator-grid__btn">-</button>
        <button className="calculator-grid__btn">.</button>
        <button className="calculator-grid__btn">0</button>
        <button className="calculator-grid__btn span-two">=</button>      
      </div>
    </div>
  );
}

export default App;

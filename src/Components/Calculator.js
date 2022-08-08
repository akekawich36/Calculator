import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
    const [inputValue, setInputValue] = useState("0");

    function display(value) {
        if (inputValue.toString().charAt(0) === "0") {
            setInputValue(value);
        } else {
            setInputValue(inputValue + value);
        }
    }

    function reset() {
        setInputValue("0");
    }

    function calculate() {
        let result = eval(inputValue);
        setInputValue(result);
    }

    function minusplus() {
        if (inputValue.charAt(0) === "-") {
            setInputValue(inputValue.substring(1));
        } else {
            setInputValue("-" + inputValue);
        }
    }

    function percentage() {
        setInputValue(String(parseFloat(inputValue) / 100));
    }

    return (
        <div className="Calculator">
            <div className="display">
                <h1>{inputValue}</h1>
            </div>
            <div className="button">
                <button className="spc" onClick={reset}>
                    AC
                </button>
                <button className="spc" onClick={minusplus}>
                    +/-
                </button>
                <button className="spc" onClick={percentage}>
                    %
                </button>
                <button className="operator" onClick={() => display("/")}>
                    ÷
                </button>
                <button onClick={() => display("7")}>7</button>
                <button onClick={() => display("8")}>8</button>
                <button onClick={() => display("9")}>9</button>
                <button className="operator" onClick={() => display("*")}>
                    x
                </button>
                <button onClick={() => display("4")}>4</button>
                <button onClick={() => display("5")}>5</button>
                <button onClick={() => display("6")}>6</button>
                <button className="operator" onClick={() => display("-")}>
                    -
                </button>
                <button onClick={() => display("1")}>1</button>
                <button onClick={() => display("2")}>2</button>
                <button onClick={() => display("3")}>3</button>
                <button className="operator" onClick={() => display("+")}>
                    +
                </button>
                <button className="Zero" onClick={() => display(0)}>
                    0
                </button>
                <button onClick={() => display(".")}>.</button>
                <button className="operator" onClick={calculate}>
                    =
                </button>
            </div>
        </div>
    );
}

export default Calculator;

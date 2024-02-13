import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      {/* each states on each component is isolated only on its parent component and will not affected by other component */}
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  // state composes of 2 elements the 1st is variable and 2nd is the function the can be called to manipulate the variable
  // dont set/change state manually
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // implementing a useState function on event handler
    // setStep(step > 1 ? step - 1 : step);
    // this is much better way to use arrow function inside the setter function of a state to avoid errors
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    // setStep(step < 3 ? step + 1 : step);
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button
        className="close"
        onClick={() => setIsOpen((isOpenOrClose) => !isOpenOrClose)}
      >
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import "./BMI.css";

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    let heightInMeters = 0;

    if (heightUnit === 'cm') {
      heightInMeters = height / 100;
    } else if (heightUnit === 'm') {
      heightInMeters = height;
    } else if (heightUnit === 'ft') {
      heightInMeters = height * 0.3048;
    }

    if (weight && heightInMeters) {
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage('You are underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('You have a healthy weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('You are overweight');
      } else {
        setMessage('You are obese');
      }
    } else {
      setMessage('Please enter valid values');
    }
  };

  return (
    <div id="BMI" className="BMI">
      <div className="bmi-header">
        <span className="stroke-text">UPDATE Your</span>
        <span>BMI</span>
        <span className="stroke-text">Now</span>
      </div>
      <div className="bmi-inputs">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <div className="height-input">
          <input
            type="number"
            placeholder={`Height (${heightUnit})`}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <select value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
            <option value="cm">cm</option>
            <option value="m">m</option>
            <option value="ft">ft</option>
          </select>
        </div>
        <button onClick={calculateBMI}>Update BMI</button>
      </div>
      {bmi && (
        <div className="bmi-result">
          <span>Your BMI is: {bmi}</span>
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};

export default BMI;

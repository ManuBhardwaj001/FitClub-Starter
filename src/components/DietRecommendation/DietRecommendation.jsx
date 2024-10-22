import React, { useState, useEffect } from "react";
import "./DietRecommendation.css";
import { dietData } from "../../data/dietData";

const DietRecommendation = () => {
  const [bmi, setBmi] = useState("");
  const [foodType, setFoodType] = useState("veg");
  const [recommendedDiet, setRecommendedDiet] = useState({
    breakfast: "",
    lunch: "",
    dinner: ""
  });

  // Fetch user BMI from localStorage when the component mounts
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.bmi) {
      setBmi(userData.bmi); // Set the BMI from the user's data
    }
  }, []);

  const handleBmiChange = (e) => {
    setBmi(e.target.value);
  };

  const handleFoodTypeChange = (e) => {
    setFoodType(e.target.value);
  };

  const getDietRecommendation = () => {
    const bmiValue = parseFloat(bmi);

    if (!bmiValue || isNaN(bmiValue)) {
      setRecommendedDiet({
        breakfast: "Please enter a valid BMI.",
        lunch: "",
        dinner: ""
      });
      return;
    }

    let dietRange;
    if (bmiValue < 18.5) {
      dietRange = "underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      dietRange = "normal";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      dietRange = "overweight";
    } else {
      dietRange = "obese";
    }

    const dietsForCategory = dietData[dietRange][foodType];

    const randomBreakfast = dietsForCategory.breakfast[Math.floor(Math.random() * dietsForCategory.breakfast.length)];
    const randomLunch = dietsForCategory.lunch[Math.floor(Math.random() * dietsForCategory.lunch.length)];
    const randomDinner = dietsForCategory.dinner[Math.floor(Math.random() * dietsForCategory.dinner.length)];

    setRecommendedDiet({
      breakfast: randomBreakfast,
      lunch: randomLunch,
      dinner: randomDinner
    });
  };

  return (
    <div id="DietRecommendation" className="diet-recommendation">
      <h2>Diet Recommendation System</h2>
      <div className="input-section">
        <label>BMI:</label>
        <input
          type="number"
          value={bmi}
          onChange={handleBmiChange}
          placeholder="Enter your BMI"
        />
        <label>Food Type:</label>
        <select value={foodType} onChange={handleFoodTypeChange}>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>
        <button onClick={getDietRecommendation}>Get Diet</button>
      </div>
      <div className="output-section">
        <h3>Recommended Diet:</h3>
        <p><strong>Breakfast:</strong> {recommendedDiet.breakfast}</p>
        <p><strong>Lunch:</strong> {recommendedDiet.lunch}</p>
        <p><strong>Dinner:</strong> {recommendedDiet.dinner}</p>
      </div>
    </div>
  );
};

export default DietRecommendation;

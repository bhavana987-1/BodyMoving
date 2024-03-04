
import React from 'react';
import Burrito from '../components/Burrito';
import ContactForm from '../components/login'; 
import FruitSalad from '../components/Fruitsalad';
import Fried from '../components/Fried';
import Navbar from '../components/Navbar';
import MealPlanTable from '../components/MealPlanTable';
import './Diet.css';



const Diet = () => {
  return (
    <div>
       <Navbar /> 
      <div className="diet-plan">
        <div className="subscribe-section">
          <img src="/piechart.png" alt="Piechart" />
          <h1>SCHEDULE FOR WEEK:</h1>
        </div>

         <MealPlanTable /> 
          <Burrito />  

        <div className="fruit-salad-section">
          <FruitSalad />
        </div>

        <div className="fried-section">
          <Fried />
        </div>

        <div className="contact-form-section">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Diet;





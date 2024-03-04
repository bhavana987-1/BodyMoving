// MealPlanTable.js
import React, { useState } from 'react';
import './MealPlanTable.css';

class MealPlanTable extends React.Component {
  constructor(props) {
    super(props);

    // Initial meal plan data
    this.state = {
      mealPlanData: [
        {
          meal: 'Breakfast',
          monday: 'Museli with Almonds & Fruits',
          tuesday: 'Bread, Egg & Sausage',
          wednesday: 'Kanda Poha with Chai',
          thursday: 'Museli with Almonds & Fruits',
          friday: 'French Toast Sandwich',
          saturday: 'Luchi, Aloo Sabzi, Suji Halwa',
          sunday: 'Handful of Almonds & Walnuts',
        },
        {
          meal: 'Lunch',
          monday: 'Sandwich & Coffee',
          tuesday: 'Rice, Dal, Fried Eggplant, Fish Curry',
          wednesday: 'Rice, Dal, Fried Eggplant, Fish Curry',
          thursday: 'Sandwich & Coffee',
          friday: 'Rice, Dal, Stir Fried Pumpkin, Fish Curry',
          saturday: 'Roti, Leftover Chicken Curry, Yogurt',
          sunday: 'Sweet Pulao, Mutton Curry, Fritters, Sweet Yogurt',
        },
        {
          meal: 'Snacks',
          monday: 'Masala Murmure & Chai',
          tuesday: 'Oats Muffin & Coffee',
          wednesday: 'Masala Murmure & Chai',
          thursday: 'Biscuits & Chai',
          friday: 'Masala Murmure & Chai',
          saturday: 'Biscuits & Chai',
          sunday: 'Biscuits & Chai',
        },
        {
          meal: 'Dinner',
          monday: 'Soup, Baked Chicken',
          tuesday: 'Roti, Egg, Tadka Dal',
          wednesday: 'Hakka Noodles with Chilli Chicken',
          thursday: 'Roti, Chicken Curry & Salad',
          friday: 'Baked Fish, Salad',
          saturday: 'Soup, Stir Fried Chicken',
          sunday: 'Soup, Stir Fried Chicken',
        },
      ],
    };
  }

  // Handle user input changes and update state
  handleInputChange = (meal, day, newValue) => {
    this.setState((prevState) => {
      const updatedMealPlanData = prevState.mealPlanData.map((mealData) => {
        if (mealData.meal === meal) {
          return {
            ...mealData,
            [day]: newValue,
          };
        }
        return mealData;
      });

      return {
        mealPlanData: updatedMealPlanData,
      };
    });
  };

  render() {
    return (
      <table className="meal-plan-table">
        <thead>
          <tr>
            <th>Meal</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>

        <tbody>
          {this.state.mealPlanData.map((mealData, index) => (
            <tr key={index}>
              <td>{mealData.meal}</td>
              
              <td>
                <input
                  type="text"
                  value={mealData.monday}
                  onChange={(e) =>
                    this.handleInputChange(mealData.meal, 'monday', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={mealData.tuesday}
                  onChange={(e) =>
                    this.handleInputChange(mealData.meal, 'tuesday', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={mealData.wednesday}
                  onChange={(e) =>
                    this.handleInputChange(mealData.meal, 'wednesday', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={mealData.thursday}
                  onChange={(e) =>
                    this.handleInputChange(mealData.meal, 'thursday', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={mealData.friday}
                  onChange={(e) =>
                    this.handleInputChange(mealData.meal, 'friday', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={mealData.saturday}
                  onChange={(e) =>
                    this.handleInputChange(mealData.meal, 'saturday', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={mealData.sunday}
                  onChange={(e) =>
                    this.handleInputChange(mealData.meal, 'sunday', e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MealPlanTable;

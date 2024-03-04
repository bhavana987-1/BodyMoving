import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/login';
import './Workout.css';

const Workout = () => {
    const [selectedLevel, setSelectedLevel] = useState('Beginner'); 
    const [gymTimeLimit, setGymTimeLimit] = useState(30);
    const [cyclingTimeLimit, setCyclingTimeLimit] = useState(45); 
    const [runningTimeLimit, setRunningTimeLimit] = useState(30); 
    const [swimmingTimeLimit, setSwimmingTimeLimit] = useState(20); 
    const [activityRecords, setActivityRecords] = useState([]); 

    const handleLevelChange = (event) => {
        setSelectedLevel(event.target.value); // Update the selected level based on the user's choice

        switch (event.target.value) {
            case 'Beginner':
                setGymTimeLimit(30);
                setCyclingTimeLimit(45);
                setSwimmingTimeLimit(20);
                setRunningTimeLimit(30);
                break;
            case 'Regular Workouts':
                setGymTimeLimit(45);
                setCyclingTimeLimit(60);
                setSwimmingTimeLimit(30);
                setRunningTimeLimit(40);
                break;
            case 'Expert':
                setGymTimeLimit(60);
                setCyclingTimeLimit(90);
                setSwimmingTimeLimit(40);
                setRunningTimeLimit(50);
                break;
            default:
                setGymTimeLimit(30);
                setCyclingTimeLimit(45);
                setSwimmingTimeLimit(20);
                setRunningTimeLimit(30);
                break;
        }
    };
    
    const recordActivity = () => {

        if (!selectedLevel) {
            alert('Please select an activity level.');
            return;
        }

        const newActivityRecord = {
            activity: selectedLevel,
            time: {
                gym: gymTimeLimit,
                cycling: cyclingTimeLimit,
                running: runningTimeLimit,
                swimming: swimmingTimeLimit,
            },
            date: new Date().toISOString().split('T')[0],
        };

        setActivityRecords([...activityRecords, newActivityRecord]);

       
        setSelectedLevel('Beginner');
        setGymTimeLimit(30);
        setCyclingTimeLimit(45);
        setRunningTimeLimit(30);
        setSwimmingTimeLimit(20);

    };

    return (
        <section>
            <Navbar />

            <div className="imagenew-container">
                <img src="/image1.png" alt="Image1" className="imgnew-fluid" style={{ width: '100%', height: 'auto' }} />
            </div>

            <select className="containernew mt-3 bg-success rounded">
                <option value="sg" disabled default>SELECT GOAL</option>
                <option value="bm">Build Muscle</option>
                <option value="wl">Weight Loss</option>
                <option value="ef">Enhance Flexibility</option>
                <option value="end">Endurance</option>
            </select>

            <br /><br />

            <div className="workout-level-container mt-3">
                <label for="workoutLevel" className="workout-level-label">Select Your Level:</label>
                <select
                    id="workoutLevel"
                    className="form-select workout-level-select"
                    value={selectedLevel}
                    onChange={handleLevelChange}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Regular Workouts">Intermediate</option>
                    <option value="Expert">Expert</option>
                </select>
            </div>

            <div className="mt-3">
                <label for="runningTimeLimit">Gym Time Limit (minutes):</label>
                <input type="number" id="runningTimeLimit" className="form-control" value={runningTimeLimit} onChange={(event) => setRunningTimeLimit(parseInt(event.target.value))} />
            </div>
            <br />
            <div className="mt-3">
                <label for="cyclingTimeLimit">Cycling Time Limit (minutes):</label>
                <input type="number" id="cyclingTimeLimit" className="form-control" value={cyclingTimeLimit} onChange={(event) => setCyclingTimeLimit(parseInt(event.target.value))} />
            </div>
            <br />
            <div className="mt-3">
                <label for="gymTimeLimit">Swimming Time Limit (minutes):</label>
                <input type="number" id="gymTimeLimit" className="form-control" value={gymTimeLimit} onChange={(event) => setGymTimeLimit(parseInt(event.target.value))} />
            </div>
            <br />
            <div className="mt-3">
                <label for="swimmingTimeLimit">Running Time Limit (minutes):</label>
                <input type="number" id="swimmingTimeLimit" className="form-control" value={swimmingTimeLimit} onChange={(event) => setSwimmingTimeLimit(parseInt(event.target.value))} />
            </div>

            <div>
            <button onClick={recordActivity} className="btn btn-primary mt-3">
                Record Activity
            </button>
         
            <div className="recorded-details mt-4">
                <h2>Recorded Details</h2>
                <ul>
                    {activityRecords.map((record, index) => (
                        <li key={index}>
                            <strong>Activity:</strong> {record.activity},{' '}
                            <strong>Time:</strong> Gym: {record.time.gym} min, Cycling: {record.time.cycling} min, Running: {record.time.running} min, Swimming: {record.time.swimming} min,{' '}
                            <strong>Date:</strong> {record.date}
                        </li>
                    ))}
                </ul>
            </div>
            </div>

            <div className="imagenew-container">
                <img src="/image2.png" alt="Image2" className="imgnew-fluid" style={{ width: '100%' }} />
            </div>
           <ContactForm/>
        </section>
    
    );
}
export default Workout;










import React from 'react';
import Navbar from '../components/Navbar';
import Clickable3 from '../components/Clickable3';
import ContactForm from '../components/login';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section>
      <Navbar />
      <div className="KYMB-image-container">
        <img
          src="/KPMG.png"
          alt="KYBM"
          className="img-fluid"
          style={{ width: '75%', height: 'auto' }}
        />
      </div>

      <hr className="black-line2" />

      <div className="d-flex justify-content-end mt-0 align-items-start position-relative home-container">
        <div className="card">
          <img
            src="/proud.png"
            className="card-img-top"
            alt="Feeling proud"
          />
          <div className="card-body">
          <a href="https://www.healthline.com/health/exercise-fitness/how-to-motivate-yourself-to-workout" class="btn btn-primary custom-button" target="_blank" rel="noopener noreferrer">
  Let's Go
</a>
          </div>
          <hr className="black-line1" />
        </div>

        <div className="image-container-aligned">
          <img
            src="/Featured.png"
            alt="Description of the featured image"
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <hr className="black-line1" />
        


        <div className="new-image-container">
          <img
            src="/secrect.png"
            alt="Description of the new image"
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <hr className="black-line2" />

        <div className="fitness-container-aligned">
          <img
            src="/fitness.png"
            alt="fitness"
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <hr className="black-line2" />

        <div className="card additional-card">
          <Link to="https://warwick.ac.uk/services/sport/content-hub/feed/hiit-workout-exercises-to-do-at-home/"> 
            <img
              src="/1.3.png"
              className="card-img-top"
              alt="watch"
            />
          </Link>
          <div className="card-body">
            <p className="card-text">
            Six simple high-intensity workouts
            </p>
          </div>
        </div>

        <div className="card additional2-card">
          <Link to="https://www.healthline.com/health/what-exercise-burns-the-most-calories/"> {/* Link to the destination page for image "2.3" */}
            <img
              src="/2.3.png"
              className="card-img-top"
              alt="watch"
            />
          </Link>
          <div className="card-body">
            <p className="card-text">
              Only 15 min- 5 exercises that burn the most calories
            </p>
          </div>
        </div>
        <Clickable3 />

        <hr className="black-line2" />

        <div className="nutrition-container-aligned">
          <img
            src="/nutrition.png"
            alt="nutrition"
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <hr className="black-line2" />

 <div className="card additional3-card">

<a href="https://www.cbsnews.com/texas/news/top-5-superfoods-youre-probably-not-eating/">
  <img src="/bowl.png" className="card-img-down" alt="bowl" />
</a>
<div className="card-body1">
  <p className="card-text2">
    5 superfoods you shouldn't skip
  </p>
</div>


</div>
<ContactForm/>
      </div>
    </section>
  );
};

export default Home;

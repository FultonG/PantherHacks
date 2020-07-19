
import React from 'react';
import './Home.css';

class Home extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    return(
      <div id='home-page-container'>
        <div class="row row-cols-1 row-cols-md-2 text-center">
          <div class="col mb-5">
            <div class="card shadow left-card">
              <i class="fas fa-money-bill-wave"></i>
              <div class="card-body">
                <h5 class="card-title">Gigs</h5>
                <p class="card-text">Check out some local gigs near you, whether you are looking for work or looking to make some extra cash check out some listings.</p>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card shadow right-card">
              <i class="fas fa-chart-pie"></i>
              <div class="card-body">
                <h5 class="card-title">COVID-19 Statistics</h5>
                <p class="card-text">Get a better understanding of COVID-19 by checking out some data on the statistics page.</p>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card shadow">
              <i class="fas fa-thermometer-quarter"></i>
              <div class="card-body">
                <h5 class="card-title">Testing Centers</h5>
                <p class="card-text">If you believe you are at risk of infection or perhaps are showing some symptoms, check out testing centers near you.</p>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card shadow">
              <i class="fas fa-book-medical"></i>
              <div class="card-body">
                <h5 class="card-title">COVID-19 Awareness</h5>
                <p class="card-text">Read more about COVID-19 and some frequently thought of questions answered by health institutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;

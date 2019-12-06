import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return   (<div class="fullscreen-bg">
    <video loop muted autoplay poster="img/aurora_lights_iceland_small.jpg" class="fullscreen-bg_video">
        <source src="video/aurora_lights_iceland.mp4" type="video/mp4">
    </video>
  </div>

  <!-- Centered div -->
  <div id="center_div_homepage">

    <h1> Welcome to Aurora Finder </h1>

    <p>Please input either a date of when you
      want to see an aurora or a location</p>

    <!-- Location input form -->
    <form id="location" action:"/dummy-server">
      <input type="text" placeholder="Location">
      <button type="submit">Submit</button>
    </form>

    <!-- Date input form -->
    <form id="date" action:"/dummy-server">
      <input type="text" placeholder="Date">
      <button type="submit">Submit</button>
    </form>

    <a href="https://www.swpc.noaa.gov/products/aurora-30-minute-forecast"
    target="_blank">
      <p>Live preview of the next 30 minutes of the Aurora Borealis</p>
    </a>

  <!-- End centered div -->
  </div>);
  }
}

export default App;

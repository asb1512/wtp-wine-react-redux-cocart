import React from 'react';
import './About.css';


export default function About() {
  return (
    <div className="about-cntr">

      <div className="about-banner-cntr">
        <img
          src="https://wethepeople.wine/wp-content/uploads/2021/08/homeabout.jpg"
          alt="We The People Wine: About Us"
          className="about-img"
        />
      </div>

      <h1 className="about-title">ABOUT US</h1>
      <div className="about-content">
        <p>
          <span className="about-emphasis">WE THE PEOPLE</span> is an American brand dedicated to Conservative values. Our wine is made for Americans by Americans. American exceptionalism, free markets, free people, free speech and limited government are what we stand for.
        </p>

        <p>
          We want to reflect what we see as the exceptionally diverse identity of Conservatives across the country – diversity of thought, diversity of experiences and diversity of everything that makes up our society. We are proud of the values that our brand stands for because those values unite people across every walk of life.
        </p>

        <p>
          WE THE PEOPLE takes things a step further – a portion of the profits from every sale goes directly to supporting causes that reflect the values our community stands for.
        </p>

        <p>
          Every sip is another step towards freedom. Drink up!
        </p>
      </div>
    </div>
  )
}

import React from 'react';
import { Link } from 'react-router';

// Component //

export default function About () {
  return (
        <div id="about-div" class="test">
          <h1 className="fancy-type caps" id="about-header">nice to meet you.</h1>
          <p className="fancy-type" id="about-text">I'm a New York based front-end developer & CSS enthusiast. When I'm not reading, playing video games, or hanging out with my cats, I'm learning new technologies and building applications. I have a wide range of skills from Node.js to Express, all the way to React, jQuery and UX design. I'm always looking to make the web a more beautiful place.</p>
            <Link className="link" to="/contact"><h3 className="fancy-type caps" id="about-link">Let's Work together</h3></Link>
        </div>
  );
}

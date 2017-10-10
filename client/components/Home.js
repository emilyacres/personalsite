import React from 'react';
import { Link } from 'react-router';

// Component //

export default function Home () {
  return (
        <Link to="/about"><div id="home-text">
          <h1 className="fancy-type caps" id="hi">hi my name is</h1>
          <h1 className="fancy-type caps" id="name">emily grace</h1>
        </div></Link>
  );
}

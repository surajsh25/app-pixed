import React from "react";
import "./about.css";
import InstagramIcon from '@material-ui/icons/Instagram';

const About = () => {
  return (
    <div className="root">
    <div className="card">
      <h2>Suraj Sharma</h2>
      <div className="title">Developer</div>
      <center>
      <a style={{color:'crimson'}} href="https://www.instagram.com/surajsh057/">
        <InstagramIcon />
      </a>
      </center>
   
      <div className="desc">
        Images are fetched from &nbsp;
        <a className="links" href="https://unsplash.com/">
          Unsplash Api
        </a>
        <br />
        <a style={{textDecoration: 'none'}} href="/"><p>return</p></a>
      </div>
    </div>
    </div>
  );
};

export default About;

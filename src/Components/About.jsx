import Home from "./Home"
import Img2 from "./../Images/img2.png"

function About() {
    return (
      <>
      <div >
        <Home name="Welcome to about page of " image={Img2} button="Contact" visit="/contact"/>
      </div>
      </>
    );
  }
  
  export default About;
  
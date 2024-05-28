import "./HomePage.css"

export default function Home() {
    return (
      <div className="container mt-5 text-center" id="homeContainer">
         <div className="row justify-content-center">
          <div className="col-6">
             <div className="rounded-space mx-auto">
              <img src="/avatar.jpg" className="img-fluid" alt="" />
             </div>
            </div>
           </div>
        <h1 className="fw-bold m-5" id="presentationContainer"><span id="presentationName">I'm Erik Gontijo</span>, a Full Stack Software Engineer. </h1>
        <p className="fw-bold m-5" id="presentationText">
        As a motivated Software Developer, I am dedicated to creating impactful digital solutions that enhance user experiences and drive business growth. Proficient in a range of technologies including React, Express, Node.js, and MongoDB, I excel in crafting innovative software solutions from concept to execution. With a keen eye for detail and a passion for problem-solving, I thrive in dynamic environments where collaboration and creativity flourish.
        </p>
      </div>
    );
  }
  
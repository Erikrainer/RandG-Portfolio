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
        <h1 className="fw-bold m-5" id="presentationContainer"><span id="presentationName">I'm Erik Gontijo</span>, a Software & Game Developer. </h1>
        <p className="fw-bold m-5" id="presentationText">
        As a motivated Software Developer and Game Developer, I am dedicated to creating impactful digital solutions and immersive gaming experiences that enhance user engagement and drive innovation. Proficient in a range of technologies, including React, Express, Node.js, and MongoDB, I excel in crafting innovative software solutions from concept to execution.

In addition to web development, I am currently expanding my expertise in game development by studying C++ for Unreal Engine, mastering Unreal Engine, and diving into Blueprint scripting. I am working on a game inspired by Final Fantasy Tactics, focused on creating a more realistic world with intricate mechanics and compelling gameplay.

With a keen eye for detail and a passion for problem-solving, I thrive in dynamic environments where collaboration, creativity, and technical excellence converge. I am eager to contribute to projects that challenge conventions and push the boundaries of technology and design.
        </p>
      </div>
    );
  }
  
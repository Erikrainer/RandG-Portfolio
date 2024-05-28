import React from "react";
import "./AboutPage.css";

function Home() {
  return (
    <div className="container text-center" id="aboutContainer">
      <p className="mt-5 fw-bold" id="aboutText">
        I`m a passionate web developer currently completing my bootcamp. I'm enthusiastic about learning new technologies and building exciting projects. Graduating in June 2024!
      </p>
      <section id="skillSection" className="container text-left">
      <div className="row">
        <div className="col-md-6">
          <h2 id="skillTitle">HTML & CSS</h2>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="col-md-6">
          <h2 id="skillTitle">MongoDB</h2>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <h2 id="skillTitle">JavaScript</h2>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="col-md-6">
          <h2 id="skillTitle">React</h2>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <h2 id="skillTitle">Express</h2>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="col-md-6">
          <h2 id="skillTitle">Node JS</h2>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </section>
    {/* https://static.thenounproject.com/png/5421603-200.png */}
      <section className="hobbies-section mt-5">
      <div className="d-flex justify-content-center flex-wrap">
        <div className="card hobby-card m-3 l-bg-blue-dark" id="hobbyCard">
          <img src="https://cdn-icons-png.flaticon.com/512/1391/1391364.png" className="card-img-top" alt="Anime" />
          <div className="card-body">
            <h2 className="card-title">Anime</h2>
            <p className="card-text">I love watching anime, especially One Piece!</p> 
          </div>
        </div>
        <div className="card hobby-card m-3 l-bg-blue-dark" id="hobbyCard">
          <img src="https://img.icons8.com/plasticine/100/000000/controller.png" className="card-img-top" alt="Games" />
          <div className="card-body">
            <h2 className="card-title">Games</h2>
            <p className="card-text">I'm an avid gamer and enjoy playing a variety of video games.</p>
          </div>
        </div>
        <div className="card hobby-card m-3 l-bg-blue-dark" id="hobbyCard">
          <img src="https://img.icons8.com/plasticine/100/000000/3d-printer.png" className="card-img-top" alt="3D Printing" />
          <div className="card-body">
            <h2 className="card-title">3D Printing</h2>
            <p className="card-text">I enjoy creating and printing 3D models.</p>
          </div>
        </div>
        <div className="card hobby-card m-3 l-bg-blue-dark" id="hobbyCard">
          <img src="https://img.icons8.com/plasticine/100/000000/computer.png" className="card-img-top" alt="Coding" />
          <div className="card-body">
            <h2 className="card-title">Coding</h2>
            <p className="card-text">Coding is my passion, and I love building new projects and learning new languages.</p>
          </div>
        </div>
      </div>
    </section>
  <section className="container">
    <div className="row ">
      <div className="col-xl-6 col-lg-6">
        <div className="card hobby-card m-3 l-bg-blue-dark">
          <div className="card-body">
            <h2 className="card-title">500+</h2>
            <p className="card-text" id="textAchievement">Hours of Training</p>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6">
        <div className="card hobby-card m-3 l-bg-blue-dark">
          <div className="card-body">
            <h2 className="card-title">20+</h2>
            <p className="card-text" id="textAchievement">Projects Completed</p>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6">
        <div className="card hobby-card m-3 l-bg-blue-dark">
          <div className="card-body">
            <h2 className="card-title">5000+</h2>
            <p className="card-text" id="textAchievement">Lines of Code Written</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}

export default Home;
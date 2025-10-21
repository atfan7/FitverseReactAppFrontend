import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">

            <div className="banner1">
                <h1>Move with purpose. Breathe with ease.</h1>
                <p>Feel balanced and grounded with every session.</p>
                 <Link to ={`/classes`}><button className='btn btn-outline-light'>Know More</button></Link>
                
              
            </div>
          </div>
          <div className="carousel-item">
            <div className="banner2">
              
                  <h1>Stronger every day — body & mind.</h1>
                  <p>Empower yourself through mindful movement.</p>
                  <Link to ={`/about`}><button className='btn btn-outline-light'>Know More</button></Link>
              
            </div>
          </div>
          <div className="carousel-item">
            <div className="banner3">
                  <h1>Your FitVerse journey starts now.</h1>
                  <p>Join a community that moves, grows, and thrives together.</p>
                  <Link to ={`/schedules`}><button className='btn btn-outline-light'>Know More</button></Link>
              
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}

export default Hero ;

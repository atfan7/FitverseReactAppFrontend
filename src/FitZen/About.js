import React from 'react'

import banner4 from './assets/banner4.jpg'

const About = () => {
  return (

<section id="about" class="py-5 bg-light text-dark " style={{height:'80vh'}}>
  <div class="container">
    <div class="row">
      
      
      <div class="col-md-6">
        <h2 class="mb-4 fw-bold">About FitVerse</h2>
        <p><strong>FitVerse</strong> is your go-to destination for mind-body transformation. Located in the heart of the city, our yoga and fitness studio offers a peaceful escape from the daily grind — a space to breathe, move, and grow.</p>
        <p>We combine ancient yoga traditions with modern functional fitness to support your journey toward physical strength, mental clarity, and emotional balance. Our expert instructors curate classes for all levels — from calming restorative yoga to dynamic power sessions and functional strength training.</p>
        <p>At FitVerse, we believe wellness is a lifestyle, not a luxury. Join our vibrant community, attend workshops, participate in outdoor sessions, and rediscover balance on your terms.</p>
        <p>Whether you're stepping onto the mat for the first time or deepening a long-time practice, you'll find a space that meets you where you are — supportive, non-judgmental, and growth-focused.</p>

        <ul class="list-unstyled mt-3">
          <li>✔ Certified, experienced instructors</li>
          <li>✔ Yoga, Pilates, HIIT, and mindfulness classes</li>
          <li>✔ Personalized coaching & community support</li>
          <li>✔ Modern, serene studio with natural light</li>
        </ul>

     
      </div>

      
      <div class="col-md-6 d-flex align-items-center justify-content-center ">
        <img src={banner4}
             alt="Yoga class at FitVerse studio" 
             class="img-fluid rounded shadow w-100 mx-auto"/>
      </div>
    </div>
  </div>
</section>




    
  )
}

export default About
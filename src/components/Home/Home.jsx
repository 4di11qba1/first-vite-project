import React from 'react'
import './Home.scss'
import Form from '../Form/Form'
import Agent from '../Agent/Agent'
import Features from '../Features/Features'
import Footer from '../Footer/Footer'
import Phone from '../Phone/Phone'
import { useState } from 'react'

function Home() {
  const [firstForm, setFirstForm] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    setFirstForm(!firstForm);
  }

  return (
    <div className='home-bg'>
      <div className='home-bg-img'></div>
      <div className='home'>
        <Phone />
        <div className='main'>
          <div className='form-logo-wrapper'>
            <img className='logo' src='logo.svg' />
            <Form firstForm={firstForm} handleClick={handleClick} />
          </div>
          <div className='hero-section'>
            <div className='happy-man-wrapper'>
              <img className='happy-man' src='happy-man.png' />
            </div>
            <div className='main-image-wrapper'>
              <img className='main-image' src='woman.png' />
            </div>
            <Agent />
          </div>
        </div>
        <Features />
        <Footer />
      </div>
    </div>
  )
}

export default Home
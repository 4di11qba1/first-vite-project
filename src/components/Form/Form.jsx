import React, { useState, useEffect } from 'react'
import './Form.scss'

function Form({ firstForm, handleClick }) {
  const styles = ({
    background: 'linear-gradient(to top right, #1EDFEC 5%, #121F20 95%)',
    color: 'white'
  })
  return (
    <div className='my-form-wrapper'>
      {firstForm ?
        <form className="my-form" style={styles}>
          <h4 className='my-form-header' style={{fontSize: '20px'}}>You're Pre-Selected up to <span>$100,000</span></h4>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '100%'}}>
            <label htmlFor='email' aria-label='email'>Email</label>
            <input id='email' name='email' className='my-form-input-elements' type='text' placeholder='Enter your email' />
          </div>
          <label htmlFor='mailer-code' aria-label='mailer-code'>Mailer Code</label>
          <div style={{display: 'flex', gap: '10px', width: '100%', alignItems: 'center'}}>
              <input id='mailer-code' className='my-form-input-elements' type='text' placeholder='C-13' style={{width: '50px'}} />
              -
              <input id='mailer-code2' className='my-form-input-elements' type='text' placeholder='Code' style={{width: '100%'}} />
          </div>
          <button className='btn2' onClick={(event) => handleClick(event)}>REDEEM OFFER</button>
          <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}><p>This will not affect your Credit Score</p></div>
        </form> 
        
        :
        
        <form className="my-form">
          <h4 className='my-form-header' style={{fontSize: '20px'}}><span>Hello Brandon,</span> Please ensure that your info on this form is correct.</h4>
          <div className='my-form-input'>
            <div className='my-form-input-div-wrapper'>
              <div className='my-form-input-div'>
                <label htmlFor='firstname' aria-label='firstname'>First Name</label>
                <input className='my-form-input-elements' type='text' placeholder='Enter your first name' />
              </div>
              <div className='my-form-input-div'>
                <label htmlFor='lastname' aria-label='lastname'>Last Name</label>
                <input className='my-form-input-elements' type='text' placeholder='Enter your last name' />
              </div>
              <div className='my-form-input-div'>
                <label htmlFor='address' aria-label='address'>Address</label>
                <input className='my-form-input-elements' type='text' placeholder='Enter your address' />
              </div>
              
            </div>

            <div></div>

            <div className='my-form-input-div-wrapper'>
              <div className='my-form-input-div'>
                <label htmlFor='city' aria-label='city'>City</label>
                <input className='my-form-input-elements' type='text' placeholder='Enter your city' />
              </div>
              <div className='my-form-input-div'>
                <label htmlFor='state' aria-label='state'>State</label>
                <select className='my-form-input-elements'>
                  <option value='New York'>New York</option>
                  <option value='London'>London</option>
                  <option value='Los Angeles'>Los Angeles</option>
                  <option value='Paris'>Paris</option>
                  <option value='Tokyo'>Tokyo</option>
                  <option value='Moscow'>Moscow</option>
                </select>
              </div>
              <div className='my-form-input-div'>
                <label htmlFor='phone' aria-label='phone'>Phone</label>
                <input className='my-form-input-elements' type='text' placeholder='Enter your phone' />
              </div>
            </div>
          </div>
          <button className='btn' onClick={(event) => handleClick(event)}>SUBMIT</button>
          <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <p style={{fontSize: '12px', fontWeight: 'lighter'}}>
              By clicking submit i agree that I will be contacted by Clear Credit via text message email, or
              phone call. Clear Credit IS NOT a marketing agency and your contact info WILL NOT be sold.
              Your contact information will ONLY be used by Clear Credit for the express and sole purpose
              of offering a loan or other financial products.
            </p>
          </div>
        </form>}
        
        {firstForm &&
          <div style={{display: 'flex', justifyContent: 'center', gap: '5px', width: '100%', alignItems: 'center'}}>
              <p>Don't have an offer? </p>
              <a>Click Here</a>
          </div>
        }
    </div>
  )
}

export default Form
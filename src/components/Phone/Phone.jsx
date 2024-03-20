import React from 'react'
import './Phone.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Phone() {
  return (
    <div className='phone-wrapper'>
        <button className="phone">
            <div className="phone-icon hoverable-element">
                <p className='phone-text'>Se Habla Esapñol</p>
            </div>
            <div className='phone-number'>
                <p className='phone-text'>1-412-267-0592</p>
            </div>
        </button>
        <button className="phone2">
            <div className="phone-icon hoverable-element">
                <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className='phone-number'>
                <p className='phone-text'>1-888-219-3797</p>
            </div>
        </button>
    </div>
  )
}

export default Phone
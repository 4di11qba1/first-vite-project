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
            <p className='phone-text'>1-412-267-0592</p>
        </button>
        <button className="phone2">
            <div className="phone-icon hoverable-element">
                <FontAwesomeIcon icon={faPhone} />
            </div>
            <p className='phone-text'>1-888-219-3797</p>
        </button>
        {/* <div className='phone2'>
            <p style={{color: '#04C8E8'}}>Se Habla Español</p>
            <p>1-412-267-0592</p>
        </div> */}
    </div>
  )
}

export default Phone
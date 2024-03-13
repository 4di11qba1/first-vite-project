import React from 'react'
import './Agent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Agent() {
  return (
    <div className='agent'>
        <div className='agent-phone'>
            <svg>
                <circle className='circle1' cx="50" cy="50" r="40" />
                <circle className='circle2' cx="50" cy="50" r="30" />
                <circle className='circle3' cx="50" cy="50" r="20" />
            </svg>
            <FontAwesomeIcon icon={faPhone} className='agent-phone-icon' />
        </div>
        <div className='div-element'>
            <span style={{color: '#1A4048'}}>SPEAK TO A</span>
            <span className='highlight-span'>LIVE AGENT</span>
        </div>
  </div>
  )
}

export default Agent
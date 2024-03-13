import React from 'react'
import './FeatureBox.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FeatureBox({ icon, text }) {
  return (
    <div className='feature-box'>
        <div className='feature-box-bg-image'></div>
        <div className='feature-box-icon-div'>
            <FontAwesomeIcon className='feature-box-icon' icon={icon} />
        </div>
        <p>{text}</p>
        <div className='feature-box-bg-gradient'></div>
    </div>
  )
}

export default FeatureBox
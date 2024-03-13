import React from 'react'
import './Features.scss'
import FeatureBox from '../FeaturesBox/FeatureBox'
import { faUnlockAlt, faDollarSign, faBox } from '@fortawesome/free-solid-svg-icons'

function Features() {
  return (
    <div className='features'>
        <h1>Why are we <span>different</span> from others</h1>
        <div className='features-wrapper'>
            {featuresData.map((feature, index) => {
                return <FeatureBox key={index} icon={feature.icon} text={feature.text} />
            })}
        </div>
    </div>
  )
}

export default Features

const featuresData = [
    {
        text: 'Unlock Financing Up To $80,000',
        icon: faUnlockAlt
    },
    {
        text: 'Pay Down Your High-Interest Debt',
        icon: faDollarSign
    },
    {
        text: 'Explore Offers Without Any Impact On Your Credit Score',
        icon: faBox
    }
]
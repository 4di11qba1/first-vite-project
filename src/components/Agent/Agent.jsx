// import React, { useState, useEffect } from 'react'
// import './Agent.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';

// function Agent() {
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => {
//         setWindowWidth(window.innerWidth);
//         };

//         window.addEventListener('resize', handleResize);

//         // Cleanup the event listener
//         return () => {
//         window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//   return (
//     <div className='agent'>
//         <div className='agent-phone'>
//             <svg className='phone-svg'>
//                 <circle className='circle1' cx="50" cy="50" r="40" style={{transform: `scale(${windowWidth * 0.0005})`}} />
//                 <circle className='circle2' cx="50" cy="50" r="30" style={{transform: `scale(${windowWidth * 0.0005})`}} />
//                 <circle className='circle3' cx="50" cy="50" r="20" style={{transform: `scale(${windowWidth * 0.0005})`}} />
//             </svg>
//             <FontAwesomeIcon icon={faPhone} className='agent-phone-icon' />
//         </div>
//         <div className='div-element'>
//             <span style={{color: '#1A4048'}}>SPEAK TO A</span>
//             <span className='highlight-span'>LIVE AGENT</span>
//         </div>
//   </div>
//   )
// }

// export default Agent

import React from 'react'
import './Agent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Agent() {
  return (
    <div className='agent'>
        <div className='agent-phone'>
            <div className='circle circle1'>
                <div className='circle circle2'>
                    <div className='circle circle3'>
                        <FontAwesomeIcon icon={faPhone} className='agent-phone-icon' />
                    </div>
                </div>
            </div>
        </div>
        <div className='div-element'>
             <span style={{color: '#1A4048'}}>SPEAK TO A</span>
             <span className='highlight-span'>LIVE AGENT</span>
         </div>
    </div>
  )
}

export default Agent
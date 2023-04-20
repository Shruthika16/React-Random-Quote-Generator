import { Facebook, Instagram, LinkedIn, Mail, Twitter } from '@mui/icons-material'
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
           <center><h2 style={{color:'white'}}>Contact: 
           <a href='https://twitter.com/'>
            <Twitter/>
           </a>
           <a href='https://www.linkedin.com/feed/'>
           <LinkedIn/>
           </a>
           <a href='https://www.facebook.com/'>
           <Facebook/> 
           </a>
           <a href='https://www.instagram.com/seleno._.phile__/?next=%2F'>
           <Instagram/>
           </a>
           </h2>
           </center>
      </div>
    </div>
  )
}

export default Footer
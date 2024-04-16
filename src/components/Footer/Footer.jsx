import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


export const Footer = () => {
   
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo}/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui fugiat optio veniam mollitia, adipisci ut non accusantium aperiam expedita eligendi.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt='facebook icon'/>
                    <img src={assets.twitter_icon} alt='twitter icon'/>
                    <img src={assets.linkedin_icon} alt='linkedin icon'/>

                </div>
            
            </div>
            
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivary</li>
                    <li>Privacy & Policy</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eaque.
        </p>
    </div>
  )
}

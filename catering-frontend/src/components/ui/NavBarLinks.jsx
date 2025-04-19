import React from 'react'

const NavBarLinks = () => {
  return (
    <>
      <li className="nav-item poppins-regular">
        <a className="nav-link footer-hover" href="/">Home</a>
      </li>
      <li className="nav-item poppins-regular">
        <a className="nav-link footer-hover" href="/menu">Menu</a>
      </li>
      <li className="nav-item poppins-regular">
        <a className="nav-link footer-hover" href="/catering">Catering</a>
      </li>
      <li className="nav-item poppins-regular">
        <a className="nav-link footer-hover" href="/gallery">Gallery</a>
      </li>
      <li className="nav-item poppins-regular">
        <a className="nav-link footer-hover" href="/about">About</a>
      </li>
      <li className="nav-item poppins-regular">
        <a className="nav-link footer-hover" href="/contact">Contact</a>
      </li>


      {/* Add Bootstrap-style hover effect */}
      <style jsx='true'>
        {
          `
            .footer-hover {
            color: black;
            text-decoration: none;
            transition: color 0.3s ease-in-out;  
            position: relative; /* Needed to position the ::after */
            display: inline-block; /* Prevents full width */
          }

          .footer-hover:hover{
          color: #9ca3af;  
        }
          .footer-hover::after{
            content: '';
            position: absolute;
            left: 0;
            bottom: -3px;
            height: 3px;
            width: 0%;
            background-color: #9ca3af;
            transition: width 0.3s ease-in-out;

          }
          .footer-hover:hover::after{
            width: 100%;
          }
          `
        }
      </style>
    </>

  )
}

export default NavBarLinks

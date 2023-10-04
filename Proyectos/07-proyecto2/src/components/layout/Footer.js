import React from 'react'

export const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className='footer'>
      Portafolio Jose Almiron - &copy; jose-016al - {year}
    </footer>
  )
}

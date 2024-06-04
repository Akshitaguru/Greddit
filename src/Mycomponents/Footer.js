import React from 'react'
import './footer.css'

export const Footer =() => {
  let footStyle = {
    position: "absolute",
    top: "94vh",
    width: "100%"
  }


  return (
    <footer className="footer py-3" style={footStyle}>
        <p className="text-center">
         copyright &copy; Gredit.com</p>
    </footer>
  )
}

export default Footer
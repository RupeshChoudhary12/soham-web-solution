import React from 'react'
import { Box, Container, Typography } from "@mui/material"


const IconSection = () => {
  return (
    <Box className="icon" sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
    <span className="d-flex justify-content-between w-75 mt-3">
         <div className="book">
              <li>
                   <a  href="">
                        <i className="fa-brands fa-facebook-f h6 icon aa"></i>
                   </a>
              </li>
         </div>
         <div className="book">
              <li>
                   <a href="">
                        <i className="fa-brands fa-instagram icon h6  "></i>
                   </a>
              </li>
         </div>
         <div className="book">
              <li><a href="">                                                  <i className="fa-brands fa-x-twitter icon h6"></i>
              </a></li>
         </div>
         <div className="book">
              <li><a href=""> <i className="fa-brands fa-youtube icon h6">
              </i> </a></li>
         </div>
         <div className="book">
              <li>
                   <a href="">                                                        <i className="fa-brands fa-wordpress icon h6"></i>
                   </a>
              </li>
         </div>



    </span>

</Box>
  )
}

export default IconSection

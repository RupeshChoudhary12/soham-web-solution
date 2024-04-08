import React from 'react'
import { Box, Container, Typography } from "@mui/material"


const IconSection = () => {
  return (
    <Box className="icon" sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
    <Box sx={{display : "flex" , justifyContent : "space-between" , width : "75%" , marginTop : '15px'}} >
         <Box className="book">
              <li>
                   <a  href="">
                        <i className="fa-brands fa-facebook-f h6 icon aa"></i>
                   </a>
              </li>
         </Box>
         <Box className="book">
              <li>
                   <a href="">
                        <i className="fa-brands fa-instagram icon h6  "></i>
                   </a>
              </li>
         </Box>
         <Box className="book">
              <li><a href="">                                                  <i className="fa-brands fa-x-twitter icon h6"></i>
              </a></li>
         </Box>
         <Box className="book">
              <li><a href=""> <i className="fa-brands fa-youtube icon h6">
              </i> </a></li>
         </Box>
         <Box className="book">
              <li>
                   <a href="">                                                        <i className="fa-brands fa-wordpress icon h6"></i>
                   </a>
              </li>
         </Box>



    </Box>

</Box>
  )
}

export default IconSection

import React from 'react'
import { Box, Container, Typography } from "@mui/material"
import { Facebook, Instagram, LinkedIn,  X, YouTube } from '@mui/icons-material'


const IconSection = () => {
     return (
          <Box className="icon" sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
               <Box sx={{ display: "flex", justifyContent: "space-between", width: "75%", marginTop: '15px' }} >
                    <Box className="book">
                         <li>
                              <a href="">

                                   <Facebook  className='icon'/>
                              </a>
                         </li>
                    </Box>
                    <Box className="book">
                         <li>
                              <a href="">
                                   <Instagram className='icon'/>
                              </a>
                         </li>
                    </Box>
                    <Box className="book">
                         <li><a href="">                                                
                           <X className='icon'/>
                         </a></li>
                    </Box>
                    <Box className="book">
                         <li>
                              <a href=""> 
                         <YouTube className='icon'/>
                         </a></li>
                    </Box>
                    <Box className="book">
                         <li>
                              <a href="">             
                             <LinkedIn className='icon'/>
                             
                              </a>
                         </li>
                    </Box>



               </Box>

          </Box>
     )
}

export default IconSection

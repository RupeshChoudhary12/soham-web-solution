import { Box, Typography } from "@mui/material"
import Message from "../assets/phonemess.svg"
import Call from "../assets/fone.svg"
import {  Button, Container } from "@mui/material"
import IconSection from "./IconSection"
import Soham from "../assets/soham.svg"
import { Link } from "react-router-dom"



const Navbar = () => {
    return (
      < Box className="nav-bar">
      <Box className="white"  sx={{width:"62%" , height:"55px"
      ,display:"flex", alignItems:"center", 
       position:"absolute", top:"0" ,right:"0" , justifyContent : "space-between"
       }}>
          <Box sx={{display:"flex" ,alignItems:"center" , justifyContent:"center", marginLeft:"50px",}}>
            <a href="">            <img  className="phone-img"  src={Message} />
</a>
            <Typography className="foott"   sx={{margin:"10px", fontSize:"90%"}}>contact@sohamsolution@gmail.com</Typography>  
          </Box>

          <Box sx={{  display:"flex" , alignItems:"center" , justifyContent:"center" ,marginLeft:"30px",}}>
            <a href="">            <img className="phone-img" src={Call} alt="" /> 
</a>
            <Typography sx={{margin:"10px ", fontSize:"90%"}}>7984740805</Typography>
            </Box>

            <Box className="foot" sx={{width : "100%" ,    marginBottom : "35px"    }}>
    <Box  sx={{ display : "flex"  , justifyContent : "center" ,   marginTop : "30px"}} >
         <Box className="bookk">
              <li>
                   <a  href="">
                        <i className="fa-brands fa-facebook-f h6 icon aa"></i>
                   </a>
              </li>
         </Box>
         <Box className="bookk">
              <li>
                   <a href="">
                        <i className="fa-brands fa-instagram icon h6  "></i>
                   </a>
              </li>
         </Box>
         <Box className="bookk">
              <li><a href="">                                                
                <i className="fa-brands fa-x-twitter icon h6"></i>
              </a></li>
         </Box>
         <Box className="bookk">
              <li><a href=""> <i className="fa-brands fa-youtube icon h6">
              </i> </a></li>
         </Box>
         <Box className="bookk">
              <li>
                   <a href="">                                                        <i className="fa-brands fa-wordpress icon h6"></i>
                   </a>
              </li>
         </Box>



    </Box>

            </Box>


      </Box>
    
      </Box>
    )
  }
  export default Navbar;
  
  
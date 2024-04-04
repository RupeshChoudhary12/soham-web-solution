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
       position:"absolute", top:"0" ,right:"0" 
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
            <Box className="foot" sx={{width : "100%" ,    marginBottom : "35px"  , }}>
            <Box className="iconn" sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
    <span className="d-flex justify-content-between w-75 mt-3">
         <div className="bookk">
              <li>
                   <a  href="">
                        <i className="fa-brands fa-facebook-f h6 icon aa"></i>
                   </a>
              </li>
         </div>
         <div className="bookk">
              <li>
                   <a href="">
                        <i className="fa-brands fa-instagram icon h6  "></i>
                   </a>
              </li>
         </div>
         <div className="bookk">
              <li><a href="">                                                  <i className="fa-brands fa-x-twitter icon h6"></i>
              </a></li>
         </div>
         <div className="bookk">
              <li><a href=""> <i className="fa-brands fa-youtube icon h6">
              </i> </a></li>
         </div>
         <div className="bookk">
              <li>
                   <a href="">                                                        <i className="fa-brands fa-wordpress icon h6"></i>
                   </a>
              </li>
         </div>



    </span>

</Box>
            </Box>

          </Box>

      </Box>
      {/* <div className="ooff">
         <nav class="navbar  fixed-top ">
  <div class="container-fluid">
    <a href=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header bg-primary">
      <img className="nav-logo-new ms-3 mt-3" src={Soham} alt="" />
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body bg-dark">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      <div className="down text-dark">
            
      <Link to="/"  sx={{margin:"10px" ,border : "0" ,  border: "0" , fontSize:"100%" , color : "Black" }}>
            HOME
          </Link>
          <Link  to="/about"  sx={{margin:"10px", fontSize:"100%"}}>
            ABOUT
          </Link>
          <Link to="/service"  sx={{margin:"10px", fontSize:"100%"}}>
            SERVICE
          </Link>
          <Link to="/pages"  sx={{margin:"10px", fontSize:"100%"}}>
            PAGES
          </Link>
          <Link to="/blog"   sx={{margin:"10px", fontSize:"100%" , color : "Black"}}>
            BLOG
          </Link>
          <Link to="/form"   sx={{margin:"10px", fontSize:"100%"}}>
              FORM
          </Link>
          <Link to="/contact"    sx={{margin:"10px", fontSize:"100%"}}>
            CONTACT
          </Link>

          <Link to="/contact"    sx={{margin:"10px", fontSize:"100%"}}>
            PROJECT
          </Link>
       
         
         
      </div>
          
      <Typography sx={{margin:"10px ", fontSize:"90%"}}>7984740805</Typography>
      <IconSection/>


    
        </ul>
        
        
      </div>
    </div>
  </div>
</nav>
         </div> */}
      </Box>
    )
  }
  export default Navbar;
  
  
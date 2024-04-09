import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import Nave from "../assets/nav.png"
import Orange from "../assets/orange-nav.png"
import Search from "../assets/search.png"
import Menu from "../assets/menu.png"
import Soham from "../assets/soham.svg"
import { Link } from "react-router-dom"
import IconSection from "./IconSection"




const Nav = () => {
  return (
    <>
      <img className="nav" src={Nave} alt="" />
      <Box className='soham' sx={{
         width: "35%", height: "80px", display: "flex",
        alignItems: "center", justifyContent: "center", flexDirection: "column",
        position: "absolute"
        , top: "45px", left:"50px"
      }}>
          <img className="nav-logo-new" src={Soham} alt="" />
          
      
      </Box>
      <img className="orange-nav" src={Orange} alt="" />
      
     
      
       <Box className="nav-or h-50">
        
          
      <Box className= "homee" sx={{  
        width: "60%", display: "flex",border: "0" ,
        alignItems: "center", justifyContent: "center", position: "relative", top: "-100px", right:"-38%",
      }} >

        <Box sx={{
        position : "absolute",
          
          display: "flex", alignItems: "center", justifyContent: "space-around"
          , width: "100%", flexWrap:"wrap"  , border:"0" , textDecoration: "none"
        }} >

          

         <Box sx={{display : "flex" , alignItems : "center" , justifyContent : "space-around" , flexWrap : "wrap" , width : "100%" , fontSize : "15px" }} className="home ">
         <Link className="xy" to="/" sx={{margin:"10px" , fontSize:"100%" , }}>
            HOME
          </Link>
          <Link  className="xy" to="/about"  sx={{margin:"10px", fontSize:"100%"}}>
            ABOUT
          </Link>
          <Link className="xy" to="/service" sx={{margin:"10px", fontSize:"100%"}}>
            SERVICE
          </Link>
          <Link className="xy" to="/pages"   sx={{margin:"10px", fontSize:"100%"}}>
            PAGES
          </Link>
          <Link className="xy" to="/blog"   sx={{margin:"10px", fontSize:"100%"}}>
            BLOG
          </Link>
          <Link className="xy" to="/form"  sx={{margin:"10px", fontSize:"100%"}}>
              FORM
          </Link>
          <Link className="xy" to="/contact"  sx={{margin:"10px", fontSize:"100%"}}>
            CONTACT
          </Link>
          <Link className="xy" to="/project"  sx={{margin:"10px", fontSize:"100%"}}>
            PROJECT
          </Link>
       
          <Button  className="bttt"  variant="contained" sx={{ width: "130px", borderRadius: "20px",
          fontSize:"80%"
          }}>GET STARTED</Button>
         </Box>

   

    


        </Box>
      </Box>
       </Box>
            <Box className="ooff ">
         {/* <nav class="navbar  fixed-top">
  <div class="container">
    <a href=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="  offcanvas-header bg-primary ">
      <img className=" nav-logo-new ms-3 mt-3" src={Soham} alt="" />
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body downn">
      <div className="down ">
            
      <Link to="/"  sx={{margin:"10px" ,border : "0" ,  border: "0" , fontSize:"100%" , color : "Black" }}>
            HOME
          </Link>
          <Link  to="/about"  sx={{margin:"10px", fontSize:"100%" }}>
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

          <Link to="/project"    sx={{margin:"10px", fontSize:"100%"}}>
            PROJECT
          </Link>

         
         
      </div>
          
      <IconSection/>


    
        
        
      </div>
    </div>
  </div>
</nav> */}

         </Box> 
       


      

    </>
  )
}
export default Nav 


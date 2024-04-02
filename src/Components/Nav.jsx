import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import Nave from "../assets/nav.png"
import Orange from "../assets/orange-nav.png"
import Search from "../assets/search.png"
import Menu from "../assets/menu.png"
import Soham from "../assets/soham.svg"
import { Link } from "react-router-dom"



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
     
      
       <Box className="nav-or">
          
      <Box  sx={{ 
        width: "60%", height: "70px", display: "flex",border: "0" ,
        alignItems: "center", justifyContent: "center", position: "relative", top: "-100px", right:"-38%",
      }} >

        <Box sx={{
          display: "flex", alignItems: "center", justifyContent: "space-around"
          , width: "100%", flexWrap:"wrap"  , border:"0" , textDecoration: "none"
        }} >

          <Link to="/" variant="" color="inherit" component="div" sx={{margin:"10px" ,border : "0" ,  border: "0" , fontSize:"100%"}}>
            HOME
          </Link>
          <Link  to="/about" variant="" color="inherit" component="div"  sx={{margin:"10px", fontSize:"100%"}}>
            ABOUT
          </Link>
          <Link to="/service" variant="" color="inherit" component="div"  sx={{margin:"10px", fontSize:"100%"}}>
            SERVICE
          </Link>
          <Link to="/" variant="" color="inherit" component="div"  sx={{margin:"10px", fontSize:"100%"}}>
            PAGES
          </Link>
          <Link to="/blog" variant="" color="inherit" component="div"  sx={{margin:"10px", fontSize:"100%"}}>
            BLOG
          </Link>
          <Link to="/form" variant="" color="inherit" component="div"  sx={{margin:"10px", fontSize:"100%"}}>
              FORM
          </Link>
          <Link to="/contact" variant="" color="inherit" component="div"  sx={{margin:"10px", fontSize:"100%"}}>
            CONTACT
          </Link>
          <img className="search" src={Search} alt=""  sx={{margin:"5px"}}/>
          <img className="search"  src={Menu} alt=""  sx={{margin:"5px"}} />
          <Button  className="bttt"  variant="contained" sx={{ width: "130px", borderRadius: "20px",
          fontSize:"80%"
          }}>GET STARTED</Button>

        </Box>
      </Box>
       </Box>




    </>
  )
}
export default Nav


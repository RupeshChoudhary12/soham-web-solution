import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import Nave from "../assets/nav.png"
import Orange from "../assets/orange-nav.png"
import Search from "../assets/search.png"
import Menu from "../assets/menu.png"
import Soham from "../assets/soham.svg"


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

          <a href="/" variant="" color="inherit" component="div" sx={{margin:"10px" ,border : "0" ,  border: "0" , fontSize:"100%"}}>
            HOME
          </a>
          <a  href="/about" variant="" color="inherit" component="div"  sx={{margin:"10px", fontSize:"100%"}}>
            ABOUT
          </a>
          <a href="/service" variant="" color="inherit" component="div"  sx={{margin:"10px", fontSize:"100%"}}>
            SERVICE
          </a>
          <a href="/" variant="" color="inherit" component="div"  sx={{margin:"10px", fontSize:"100%"}}>
            PAGES
          </a>
          <a href="/blog" variant="" color="inherit" component="div"  sx={{margin:"10px", fontSize:"100%"}}>
            BLOG
          </a>
          <a href="/form" variant="" color="inherit" component="div"  sx={{margin:"10px", fontSize:"100%"}}>
              FORM
          </a>
          <a href="/contact" variant="" color="inherit" component="div"  sx={{margin:"10px", fontSize:"100%"}}>
            CONTACT
          </a>
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


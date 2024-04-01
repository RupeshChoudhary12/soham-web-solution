import { Box, Typography } from "@mui/material"
import Message from "../assets/phonemess.svg"
import Call from "../assets/fone.svg"

const Navbar = () => {
    return (
      < Box className="nav-bar" sx={{width:"100%"}}>
      <Box className="white"  sx={{width:"62%" , height:"55px"
      ,display:"flex", alignItems:"center", 
       position:"absolute", top:"0" ,right:"0" 
       }}>
          <Box sx={{display:"flex" ,alignItems:"center" , justifyContent:"center", marginLeft:"50px",}}>
            <img className="phone-img"  src={Message} />
            <Typography sx={{margin:"10px", fontSize:"90%"}}>contact@sohamsolution@gmail.com</Typography>  
          </Box>

          <Box sx={{  display:"flex" , alignItems:"center" , justifyContent:"center" ,marginLeft:"30px",}}>
            <img className="phone-img" src={Call} alt="" /> 
            <Typography sx={{margin:"10px 0px", fontSize:"90%"}}>7984740805</Typography>
          </Box>
      </Box>
      </Box>
    )
  }
  export default Navbar;
  
  
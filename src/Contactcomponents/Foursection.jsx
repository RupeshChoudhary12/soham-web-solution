import { Box, Container, Typography } from "@mui/material"
import Location from "../assets/location10.svg"
import Call from "../assets/call10.svg"
import Message from "../assets/message10.svg"

const Foursection = () => {
  return (
  <Box sx={{background:"#ebebe0"}}>
      <Container>
         <Box sx={{display:"flex", alignItems:"center" , justifyContent:"center" , 
         flexDirection:"column", padding:"40px 0px 0px 0px"}}>
             <Typography sx={{color:"#0160E7" , fontSize:"28px" ,fontWeight:"700"}}>Contact Us</Typography>
             <Box sx={{display:"flex", alignItems:"center" , justifyContent:"center"}}>
                 <Typography sx={{color:" #FE4C1C" , fontWeight:"700" , margin:"5PX"}}>HOME </Typography>
                <Typography sx={{fontWeight:"700", margin:"5PX"}}>Contact Us</Typography>
             </Box>
         </Box>

      <Box sx={{
        gridGap: "20px", width: "100%", height: "100%",
        display: "FLEX", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap", padding: "80px 50px"
      }}>

        <Box sx={{
          color: "white", width: "330px", borderRadius: "5px", height: "300px",
          background: " #FE4C1C", display: "FLEX", alignItems: "center",
          justifyContent: "center", flexDirection: "column"
        }}>
          <img className="icon-contact" src={Location} alt="" />
          <Typography sx={{fontSize:"20px" , fontWeight:"700"}}> Office Address</Typography>
          <Typography sx={{fontSize:"16px" ,fontWeight:"600", padding:"5px 50px 10px 50px"}}>12, Civil Lines, Chamunda Complex, Dewas</Typography>
        </Box>



        <Box sx={{
          color: "white", width: "330px", borderRadius: "5px", height: "300px",
          background: "#0160E7", margin: "px", display: "FLEX", alignItems: "center",
          justifyContent: "center", flexDirection: "column"
        }}>
          <img className="icon-contact" src={Call} alt="" />
          <Typography sx={{fontSize:"20px" , fontWeight:"700"}}>   Make A Call</Typography>
          <Typography sx={{fontSize:"16px" ,fontWeight:"600"}}> +91 78792-31700</Typography> 
          <Typography sx={{fontSize:"16px" ,fontWeight:"600"}}> +91 70003-35673</Typography>
           <Typography sx={{fontSize:"16px" ,fontWeight:"600"}}> +91 77480-18188</Typography>
        </Box>

        <Box sx={{
          color: "white", width: "330px", borderRadius: "5px", height: "300px",
          border: "1px solid   #FE4C1C", display: "FLEX", alignItems: "center",background: "#FFFF" ,
          justifyContent: "center", flexDirection: "column"
        }}>
          <img className="icon-contact" src={Message} alt="" />
          <Typography sx={{fontSize:"20px" , fontWeight:"700" , color : "black"}}>24/7 Supports</Typography>
          <Typography sx={{fontSize:"16px" ,fontWeight:"600" , color : "black"}}> Contact@sohamsolution.com</Typography> 
          <Typography sx={{fontSize:"16px" ,fontWeight:"600" , color : "black"}}>hr@sohamsolution.com</Typography>
           <Typography sx={{fontSize:"16px" ,fontWeight:"600" , color : "black"}}>soham.solution@  yahoo.com</Typography>
        </Box>


      </Box>
    </ Container>
  
  </Box>
  )
}
export default Foursection


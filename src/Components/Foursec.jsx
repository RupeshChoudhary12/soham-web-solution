import { Box, Typography } from "@mui/material"
import Happy from "../assets/happy.png"
import Project from "../assets/project.png"
import Exp from "../assets/exp.png"
import Sat from "../assets/sat.png"
const Foursec = () => {
  return (
    <>
      <Box  sx={{  gridGap:"20px", width: "100%", height: "100%", 
      display: "FLEX", alignItems: "center", justifyContent: "center"  ,flexWrap:"wrap"}}>

        <Box  className="hover" sx={{ color: "white", width: "272px", borderRadius: "10px", height: "195px",
         background: " #0160e7",  display: "FLEX", alignItems: "center",
          justifyContent: "center",  flexDirection:"column" }}>
          <img className="icon" src={Happy} alt="" />
          HAPPY CLIENTS
        </Box>

        <Box className="hover" sx={{ color: "white", width: "272px", borderRadius: "10px", height: "195px",
         background: "#0160E7", margin: "px", display: "FLEX", alignItems: "center", 
         justifyContent: "center",  flexDirection:"column"}}>
          <img className="icon" src={Project} alt="" />
          PROJECT 6200+
        </Box>

        <Box className="hover" sx={{ color: "white", width: "272px", borderRadius: "10px", height: "195px",
         background: "#0160E7", margin: "px", display: "FLEX", alignItems: "center", 
         justifyContent: "center",  flexDirection:"column"}}>
          <img className="icon" src={Exp} alt="" />
          9+ YEAR OF EXPERIENCE
        </Box>

        <Box className="hover" sx={{ color: "white", width: "272px", borderRadius: "10px", height: "195px", 
        background: "#0160E7", margin: "px", display: "FLEX", alignItems: "center",
         justifyContent: "center",  flexDirection:"column"}}>
          <img className="icon" src={Sat} alt=""/>
          100% SATISFICATION
        </Box>

      </Box>
    </>
  )
}
export default Foursec


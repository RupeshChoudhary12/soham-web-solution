
import { Box, Container, Typography } from "@mui/material"
import Quato from "../assets/quato.png"
import Rating from "../assets/rating.png"
import ramesh from "../assets/ramesh.png"
import ravi from "../assets/ravi.png"
import joy from "../assets/joy.png"
import Sorabh from "../assets/sorabh.png"



const Clients = () => {
    return (
        <Box sx={{  }}>
            <Box sx={{ paddingTop: "70px" , width:"60%" , height:"100%"}}>
                <Container sx={{ width: "70%" }}>
                    <Typography sx={{ fontWeight: "900" , color:"#0160E7" , fontSize  : "23px" , padding : "10px"}}>
                        WHAT OUR CLIENT SAY
                    </Typography>
                     <Typography className="agency" sx={{  fontWeight: "650"
                      ,color:"black", fontSize:"25px",flexWrap:"wrap",
                     width:"100%", height:"100%" , padding : "10px"}}>
                        We Are More Than Digital Agency</Typography> 
                              
                      
                </Container>
            </Box>
            <Container >
                <Box className="client-c" sx={{   width: "100%", height: "100%", display: "FLEX", 
                alignItems: "center", justifyContent: "space-between" ,flexWrap:"wrap" , padding : "15px" }}>
                    <Box  className="client-cc" sx={{ padding:"40px 20px", border:"1px solid blue",width: "270px", borderRadius: "5px",
                     height: "100%", background: "white",  display: "FLEX" , margin:"5px",
                      alignItems: "start", justifyContent: "center", flexDirection: "column"  }}>
                        <img className="quato" src={Quato} alt="" />

                        <Typography sx={{fontSize : "13px"}}>A value passed to any given breakpoint also applies to all wider breakpoints (if they have no values explicitly defined). For example, xs={12} sizes a component to occupy the full width of its parent container, regardless of the viewport size.</Typography>
                       <img src={Rating} alt="" />
                       <Box className="panda">
                        <img src={ramesh} alt="" />
                        <Typography   sx={{fontSize : "15px"}}>Ramesh kohli</Typography>
                        <Typography >web desigenr</Typography>
                
                       </Box>
                    </Box>
                    <Box className="client-cc" sx={{  padding:"40px 20px",border:"1px solid blue", width: "270px",  background: "white",
                    borderRadius: "5px", 
                    height: "100%", margin:"5px",
                    display: "FLEX", alignItems: "start", justifyContent: "space-between", flexDirection: "column" }}>
                        <img className="quato" src={Quato} alt="" />
                        <Typography sx={{fontSize : "13px"}}>A value passed to any given breakpoint also applies to all wider breakpoints (if they have no values explicitly defined). For example, xs={12} sizes a component to occupy the full width of its parent container, regardless of the viewport size.</Typography>
                        <img src={Rating} alt="" />
                        <Box className="pandaa ">
                        <img src={ravi} alt="" />
                        <Typography  sx={{fontSize : "15px"}}>Ravi Yadav</Typography>
                        <Typography>web desigenr</Typography>
                
                       </Box>
                    </Box>
                    <Box  className="client-cc" sx={{ padding:"40px 20px",border:"1px solid blue",  width: "270px", 
                    borderRadius: "5px",
                     height: "100%", background: "white", display: "FLEX", margin:"5px", 
                     alignItems: "start", justifyContent: "center", flexDirection: "column" }}>
                        <img className="quato" src={Quato} alt="" />
                        <Typography sx={{fontSize : "13px"}}>A value passed to any given breakpoint also applies to all wider breakpoints (if they have no values explicitly defined). For example, xs={12} sizes a component to occupy the full width of its parent container, regardless of the viewport size.</Typography>
                        <img src={Rating} alt="" />
                        <Box className="panda">
                        <img src={joy} alt="" />
                        <Typography sx={{fontSize : "15px"}}>Devid Joy</Typography>
                        <Typography >web desigenr</Typography>
                
                       </Box>
                        
                    </Box>

                    <Box  className="client-cc" sx={{ padding:"40px 20px",border:"1px solid blue",  width: "270px", borderRadius: "5px",
                     height: "100%", background: "white",  display: "FLEX",  margin:"5px",
                     alignItems: "start", justifyContent: "center", flexDirection: "column" }}>
                        <img  className="quato" src={Quato} alt="" />
                        <Typography sx={{fontSize : "13px"}}>A value passed to any given breakpoint also applies to all wider breakpoints (if they have no values explicitly defined). For example, xs={12} sizes a component to occupy the full width of its parent container, regardless of the viewport size.</Typography>
                        <img src={Rating} alt="" />
                        <Box className="panda">
                        <img src={Sorabh} alt="" />
                        <Typography sx={{fontSize : "15px"}}>Sorabh Sharma</Typography>
                        <Typography>web desigenr</Typography>
                
                       </Box>
                        
                    </Box>
                  
                </Box>

            </Container>

        </Box>
    )
}
export default Clients


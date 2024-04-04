
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
                    <Typography sx={{ fontWeight: "900" , color:"#0160E7" , fontSize  : "23px"}}>
                        WHAT OUR CLIENT SAY
                    </Typography>
                     <Typography className="agency" sx={{ marginTop: "20px", fontWeight: "650"
                      ,color:"black", fontSize:"25px",flexWrap:"wrap",
                     width:"100%", height:"100%"}}>
                        We Are More Than Digital Agency</Typography> 
                              
                      
                </Container>
            </Box>
            <Container >
                <Box className="client-c" sx={{ margin:"100px 0px",  width: "100%", height: "100%", display: "FLEX", 
                alignItems: "center", justifyContent: "space-between" ,flexWrap:"wrap" }}>
                    <Box  className="client-cc" sx={{ padding:"40px 20px", border:"1px solid blue",width: "270px", borderRadius: "5px",
                     height: "100%", background: "white",  display: "FLEX" , margin:"5px",
                      alignItems: "start", justifyContent: "center", flexDirection: "column"  }}>
                        <img className="quato" src={Quato} alt="" />

                        <p className="p">A value passed to any given breakpoint also applies to all wider breakpoints (if they have no values explicitly defined). For example, xs={12} sizes a component to occupy the full width of its parent container, regardless of the viewport size.</p>
                       <img src={Rating} alt="" />
                       <div className="panda">
                        <img src={ramesh} alt="" />
                        <h2 className="h6">Ramesh Kohli</h2>
                        <p >web desigenr</p>
                
                       </div>
                    </Box>
                    <Box className="client-cc" sx={{  padding:"40px 20px",border:"1px solid blue", width: "270px",  background: "white",
                    borderRadius: "5px", 
                    height: "100%", margin:"5px",
                    display: "FLEX", alignItems: "start", justifyContent: "space-between", flexDirection: "column" }}>
                        <img className="quato" src={Quato} alt="" />
                        <p className="p">A value passed to any given breakpoint also applies to all wider breakpoints (if they have no values explicitly defined). For example, xs={12} sizes a component to occupy the full width of its parent container, regardless of the viewport size.</p>
                        <img src={Rating} alt="" />
                        <div className="pandaa ">
                        <img src={ravi} alt="" />
                        <h2 className="h6">Ravi Yadav</h2>
                        <p>web desigenr</p>
                
                       </div>
                    </Box>
                    <Box  className="client-cc" sx={{ padding:"40px 20px",border:"1px solid blue",  width: "270px", 
                    borderRadius: "5px",
                     height: "100%", background: "white", display: "FLEX", margin:"5px", 
                     alignItems: "start", justifyContent: "center", flexDirection: "column" }}>
                        <img className="quato" src={Quato} alt="" />
                        <p className="p">A value passed to any given breakpoint also applies to all wider breakpoints (if they have no values explicitly defined). For example, xs={12} sizes a component to occupy the full width of its parent container, regardless of the viewport size.</p>
                        <img src={Rating} alt="" />
                        <div className="panda">
                        <img src={joy} alt="" />
                        <h2 className="h6">Devid Joy</h2>
                        <p >web desigenr</p>
                
                       </div>
                        
                    </Box>

                    <Box  className="client-cc" sx={{ padding:"40px 20px",border:"1px solid blue",  width: "270px", borderRadius: "5px",
                     height: "100%", background: "white",  display: "FLEX",  margin:"5px",
                     alignItems: "start", justifyContent: "center", flexDirection: "column" }}>
                        <img  className="quato" src={Quato} alt="" />
                        <p className="p">A value passed to any given breakpoint also applies to all wider breakpoints (if they have no values explicitly defined). For example, xs={12} sizes a component to occupy the full width of its parent container, regardless of the viewport size.</p>
                        <img src={Rating} alt="" />
                        <div className="panda">
                        <img src={Sorabh} alt="" />
                        <h2 className="h6">Sorabh Sharma</h2>
                        <p className="h6">web desigenr</p>
                
                       </div>
                        
                    </Box>
                  
                </Box>

            </Container>

        </Box>
    )
}
export default Clients


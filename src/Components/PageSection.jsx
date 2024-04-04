import React from 'react'
import { Box, Button, Container, Typography } from "@mui/material"
import Clients from './Clients'
import Quato from "../assets/quato.png"
import Rating from "../assets/rating.png"
import ramesh from "../assets/ramesh.png"
import ravi from "../assets/ravi.png"
import joy from "../assets/joy.png"
import Sorabh from "../assets/sorabh.png"
import Parteners from './Parteners'
import Footer from './Footer'



const PageSection = () => {
  return (
    <>
    <Box  sx={{background: "#d9d9d9",  display: "flex", alignItems: "center",  justifyContent: "center", flexDirection: "column", width: "100%", height : "150px" }}>
                <Typography variant="h4" sx={{ color: "#0160E7" , fontWeight : "500" }}>Our Clients Say</Typography>
                <Box sx={{ display: "flex" }}>
                    <Typography sx={{ marginRight: "15PX", color: "#FE4C1C"  , fontWeight : "600"}}>HOME <i class="bi bi-caret-right"></i> </Typography>
                    <Typography>
                    Our Clients Say

                    </Typography>
                </Box>
            </Box>

           <div className='coloo'>
           <Clients />
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
            <Container >
                <Box className="client-c" sx={{ margin:"100px 0px",  width: "100%", height: "100%", display: "FLEX",  background: "white",
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
                    <Box className="client-cc" sx={{  padding:"40px 20px",border:"1px solid blue", width: "270px", 
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
           </div>

           <Box sx={{marginTop : "25px"}}></Box>

           <Parteners/>
           <Box sx={{marginTop : "65px"}}></Box>

           <Footer/>

            
    </>
  )
}

export default PageSection

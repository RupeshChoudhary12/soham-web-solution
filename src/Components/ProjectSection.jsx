import React from 'react'
import { Box, Container, Typography } from "@mui/material"
import First1 from "../assets/pro1.png"
import First2 from "../assets/pro2.png"
import First3 from "../assets/pro3.png"
import First4 from "../assets/pro4.png"
import First5 from "../assets/Rec140.png"
import First6 from "../assets/pro5.png"
import Parteners from './Parteners'
import Footer from './Footer'


const ProjectSection = () => {
  return (
    <>
       <Box  sx={{background: "#d9d9d9",  display: "flex", alignItems: "center",  justifyContent: "center", flexDirection: "column", width: "100%", height : "150px" }}>
                <Typography variant="h4" sx={{ color: "#0160E7" , fontWeight : "500" }}>Our Projects</Typography>
                <Box sx={{ display: "flex" }}>
                    <Typography sx={{ marginRight: "15PX", color: "#FE4C1C"  , fontWeight : "600"}}>HOME <i class="bi bi-caret-right"></i> </Typography>
                    <Typography>
                        Our Projects

                    </Typography>
                </Box>
            </Box>

            <Box className="project" sx={{}}>
                <Container sx={{ width: "80%px", padding: "80px 0px" }}>
             

                    <Box className="name" sx={{
                        marginTop: "15px", width: "30%", display: "flex", alignItems: "center ", height:"100%",
                        justifyContent: "space-between" , flexWrap:"wrap"
                    }}>
                       
                       <Typography sx={{fontSize : "18px" , fontWeight  : "600" ,  }}><a href="#">All</a></Typography>
                                <Typography sx={{ fontSize : "18px" , fontWeight : "600"}}><a href="https://www.youtube.com/">Branding</a></Typography>
                                <Typography sx={{fontWeight : "600" , fontSize : "18px"}}><a href="#">Ilutration</a></Typography>
                                <Typography sx={{fontSize : "18px", fontWeight  : "600"}}><a href="#">Web Design</a></Typography>




                  

                    </Box>

                </Container>
            </Box>
            <Container >

<Box sx={{
      width: "100%", height: "100%",
      display: "flex", alignItems: "center",  justifyContent : "space-evenly" , 
       flexWrap: "wrap"
}}>

 


    <Box className="pro" sx={{  textAlign: "center", marginTop : "10px"}}>
        <img className="project-img2" src={First1} alt="" />

    </Box>
    <Box className="pro" sx={{ textAlign: "center" , marginTop : "10px"}}>
        <img className="project-img2" src={First2} alt="" />

    </Box>
    <Box className="pro" sx={{ textAlign: "center" , marginTop : "10px"}}>
        <img className="project-img2" src={First3} alt="" />

    </Box>



</Box>
<Box sx={{
      width: "100%", height: "100%",
      display: "flex", alignItems: "center", justifyContent : "space-evenly" , marginTop : "10px" ,
      flexWrap : "wrap"
}}>

 


    <Box className="pro " sx={{marginTop : "10px"}}>
        <img className="project-img2 mt-3" src={First4} alt="" />

    </Box>
    <Box className="pro" sx={{ textAlign: "center" , marginTop : "10px" }}>
        <img className="project-img2" src={First5} alt="" />

    </Box>
    <Box className="pro" sx={{ textAlign: "center" , marginTop : "10px"}}>
        <img className="project-img2" src={First6} alt="" />

    </Box>



</Box>



</Container>

<Box sx={{marginTop : "50px"}}></Box>
<Parteners/>
<Box sx={{marginTop : "50px"}}></Box>
<Footer/>

      
    </>
  )
}

export default ProjectSection

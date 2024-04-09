import { Box, Container, Typography } from "@mui/material"
import React from "../assets/Rectangle 134.png"
import Ract2 from "../assets/rectangle2.png"
import Ract3 from "../assets/rectangle3.png"

const Blog = () => {
    return (
        <Box  sx={{marginTop : "40px"}}>
            <Container >
            <Box className="blog-child" sx={{  width: "70%", padding: "70px 0px"}}>
                
                    <Typography sx={{ color:" #FE4C1C",fontWeight: "900" , fontSize : "23px" , padding : "13px 0px 0px 20px" }}>OUR BLOG</Typography>
                    <Typography variant="h5" sx={{ marginTop: "20px", fontSize:"30px", fontWeight: "650" ,color:"black" , padding : "12px 0px 0px 20px"}}>Latest From The Blog</Typography>
                
            </Box >
            </Container>

         <Container>
         <Box sx={{display:"flex", alignItems:"center" ,justifyContent:"space-between" , flexWrap:"wrap" , padding : "12px 0px 0px 10px"}}>
                <Box sx={{  textAlign: "center" ,display:"flex",
                 alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                    <img className="blog-img" src={React} alt="" />
                    <Typography variant=""  sx={{color:" #FE4C1C",fontSize:"18px" ,fontWeight:"700", 
                   padding:"10px 20px" ,width:"330px" ,boxShadow: "3px 2px 20px 1px  #ccf2ff" }}  >Composite Mterial - Application for the Future</Typography>
                </Box>

                <Box sx={{ textAlign: "center" ,display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                    <img className="blog-img" src={Ract2} alt="" />
                    <Typography variant="" sx={{color:" #FE4C1C",fontSize:"18px" ,fontWeight:"700" 
                    , padding:"10px 20px" ,width:"330px", boxShadow: "3px 2px 20px 1px  #ccf2ff"}}  >
                        The Impact of technology on construction finance</Typography>
                </Box>

                <Box sx={{  textAlign: "center",display:"flex", alignItems:"center", 
                justifyContent:"center", flexDirection:"column" }}>
                    <img className="blog-img" src={Ract3} alt="" />
                    <Typography variant=""  sx={{color:" #FE4C1C",fontSize:"18px" ,fontWeight:"700" 
                   , padding:"10px 20px" ,width:"330px", boxShadow: "3px 2px 20px 1px  #ccf2ff" }}  >The Importance of healthy Buildings in a pandemic</Typography>
                </Box>
            </Box>
         </Container>

        </Box>
    )
}
export default Blog


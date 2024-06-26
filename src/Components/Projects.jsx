import { Box, Container, Typography , Button} from "@mui/material"
import First1 from "../assets/first1.png"
import First2 from "../assets/first2.png"
import First3 from "../assets/first3.png"
import First4 from "../assets/first4.png"
import First5 from "../assets/first5.png"
import First6 from "../assets/first6.png"
import First7 from "../assets/first7.png"

const Projects = () => {
    return (
        <Box  className="project1" sx={{ width:"100%", background: " #F0F6FF", margin: "70px 0px" }}>
            <Box className="project" sx={{}}>
                <Container sx={{ width: "80%px", padding: "80px 0px" }}>
                    <Typography sx={{ fontWeight: "900", color:'#0160e7', fontSize : "23px"  , padding : "12px  0px 0px 12px"  , marginBottom : "20px"}}>OUR PROJECT LIST</Typography>
                    <Typography  variant="" sx={{ marginTop: "70px" , fontSize: "30px", 
                    fontWeight: "650" ,color:"black"  ,padding : "12px  0px 0px 12px" }}>What We Did</Typography>

                    <Box className="name" sx={{
                        marginTop: "15px", width: "30%", display: "flex", alignItems: "center ", height:"100%",
                        justifyContent: "space-between" , flexWrap:"wrap" , padding : "12px  0px 0px 12px" 
                    }}>
                       
                   
                                <Typography sx={{fontSize : "18px"    }}><a href="#">All</a></Typography>
                                <Typography sx={{ fontSize : "18px" }}><a href="#">Branding</a></Typography>
                                <Typography sx={{fontWeight : "600" }}><a href="#">Ilutration</a></Typography>
                                <Typography sx={{fontSize : "18px"}}><a href="#">Web Design</a></Typography>



                  

                    </Box>

                </Container>
            </Box>
            <Container sx={{}}>

                <Box sx={{
                    width: "100%", height: "100%",
                    display: "FLEX", alignItems: "center", marginBottom: "10px", flexWrap: "wrap"
                }}>

                    <Box  sx={{ width: "25%", textAlign: "center", margin: "10px" }}>
                        <img className="project-img1" src={First1} alt="" />
                        <img className="project-img1" src={First2} alt="" />
                    </Box>

                    <Box sx={{ width: "400px", textAlign: "center", margin: "10px" }}>
                        <img className="project-img2" src={First3} alt="" />

                        <Button className="mark" variant="contained" sx={{backgroundColor : "#0160E7"}}>Marketing Research</Button>



                    </Box>


                    <Box sx={{ width: "400px", textAlign: "center", margin: "10px" }}>
                        <img className="project-img2" src={First4} alt="" />

                    </Box>



                </Box>

                <Box sx={{
                    width: "100%", height: "100%",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                     flexWrap: "wrap"
                    , paddingBottom: "50px"
                }}>


                    <Box sx={{ width: "355px", textAlign: "center", margin: "10px" }}>
                        <img className="project-img3" src={First5} alt="" />

                    </Box>

                    <Box sx={{ width: "355px", textAlign: "center", margin: "10px" }}>
                        <img className="project-img3" src={First6} alt="" />

                    </Box>

                    <Box sx={{ width: "355px", textAlign: "center", margin: "10px" }}>
                        <img className="project-img3" src={First7} alt="" />

                    </Box>


                </Box>
            </Container>

        </Box>
    )
}
export default Projects


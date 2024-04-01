import { Box, Button, Container, Typography } from "@mui/material"
import Forword from "../assets/for.png"
import about from '../assets/about_us.png'


const About = () => {
    return (
        <Container>
            <Box className="About" sx={{ margin:"130px 0px", width: "100%", height: "100%", display: "flex", alignItems:
             "center", justifyContent: "space-between", flexWrap:"wrap" }}>
                <Box sx={{ background: "white", width: "50%", height: "100%", display: "flex",
                 alignItems: "start", justifyContent: "space-around", flexDirection: "column", margin:"20px" }}>
                    <Typography variant="" sx={{
                        color: " #FE4C1C",
                        marginBottom: "30px", fontWeight: "900"
                    }} ><li>ABOUT US</li>
                    </Typography>

                    <Typography variant="" sx={{
                        lineHeight: "40px", fontSize: "30px", 
                        marginTop: "10px", marginBottom:"10px", fontWeight: "650" ,color:"black"  }} >
                        We Are Committed To Providing Our Costumers with Exceptional.
                    </Typography>

                    <Typography sx={{ fontSize: "17px", color: "gray", marginTop: "10px"  ,width:"100%"}} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam scelerisque luctus tincidunt. In hac habitasse platea dictumst.
                        Praesent vitae elementum nisl,
                    </Typography>

                    <Box  className="of" sx={{ marginTop: "18px" }}>

                        <li className="about-li fw-bold">Price of additional materials operators (if needed)</li>

                        <li className="about-li fw-bold"> Transportation cost of carrying new matrial/part</li>


                        <li className="about-li fw-bold">Interpreting service is our specialty</li>

                    </Box>



                    <Box sx={{ marginTop: "10px" }}>

                        <Button variant="contained" sx={{ height: "50px", background: " #FE4C1C", width:"195px",
                         fontSize: "15px", borderRadius: "30px" }}>
                            KNOW  More
                            <img className="forword" src={Forword} alt="" />
                        </Button>
                    </Box>
                </Box>
                <Box sx={{margin:"10px"}} className="about-image">
                    <img  className="about-image" src={about} alt="" />

                </Box>
            </Box>
        </Container>
    )
}
export default About


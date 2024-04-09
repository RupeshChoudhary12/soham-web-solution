import { Box, Button, Container, Typography } from "@mui/material"
import Forword from "../assets/for.png"
import about from '../assets/about_us.png'
import frame from '../assets/reactframe7.png'
// import frame1 from '../assets/react9.png'
import img from "../assets/raect9.png"
import frame2 from '../assets/react8.png'
import Happy from "../assets/happy.png"
import Project from "../assets/project.png"
import Exp from "../assets/exp.png"
import Sat from "../assets/sat.png"
import Service from "./Service"
import Foursec from "./Foursec"
import Team from "./Team"
import Parteners from "./Parteners"
import Footer from "./Footer"
import { ArrowForward, CheckCircleOutline, ChevronRight, Circle, Forward } from "@mui/icons-material"


const About = () => {
    return (

        <>
            <Box sx={{ background: "#d9d9d9", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100%", height: "150px" }}>
                <Typography variant="h4" sx={{ color: "#0160E7", fontWeight: "500" }}>About</Typography>
                <Box sx={{ display: "flex" }}>
                    <Typography sx={{ marginRight: "15PX", color: "#FE4C1C", fontWeight: "600" }}>HOME 
                    <ChevronRight/>
                    </Typography>
                    <Typography >
                        About

                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className="company">
                <Box sx={{ display: "flex", justifyContent: "center", position: "relative" }} className="cost" >
                    <Box sx={{ position: "absolute" }} className="x ">
                        <img src={frame} alt="" />

                    </Box>
                    <Box sx={{ position: "absolute" }} className="y">
                        <img src={img} alt="" />
                    </Box>
                    <Box sx={{ position: "absolute" }} className="z">
                        <img src={frame2} alt="" />

                    </Box>

                </Box>




                <Box sx={{ marginLeft: "10px" }} className="new">
                    <Typography variant="" sx={{
                        color: " #FE4C1C",
                    }} ><li className="com">ABOUT COMPANY</li>
                    </Typography>
                    <Typography variant="" sx={{
                        fontSize: "35px",
                        fontWeight: "650", color: "black", marginTop : "10px"
                    }} >
                        9+Years Works Working <br /> <span className="exp" >Expriance.</span>
                    </Typography>
                    <Typography sx={{marginTop : "15px"}}>The are many variations of Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Magni corporis veniam voluptatum rem, nesciunt quasi voluptatibus, placeat <br /> repellat rerum tenetur officiis eos dignissimos, laboriosam impedit?</Typography>
                    <Box className="off" sx={{ marginTop: "18px" }}>
                        <span>
                        <CheckCircleOutline htmlColor="red"/>

                        <Typography sx={{fontWeight : "600", fontSize : "25px"}}>Creative Conceptions</Typography>

                        <CheckCircleOutline htmlColor="red"/>

<Typography sx={{fontWeight : "600", fontSize : "25px"}}>Business & Solution</Typography>





                        </span>
                        <span>
                        <CheckCircleOutline htmlColor="red"/>

<Typography sx={{fontWeight : "600", fontSize : "25px"}}>Corporate Reationship</Typography>
<CheckCircleOutline htmlColor="red"/>

<Typography sx={{fontWeight : "600", fontSize : "25px"}}>Mission & Wision</Typography>




                        </span>



                    </Box>

                    <Box sx={{ marginTop: "10px" }}>

                        <Button variant="contained" sx={{
                            height: "50px", background: " #FE4C1C", width: "195px",
                            fontSize: "15px", borderRadius: "30px" , marginTop : "25px"
                        }}>
                            Read  More
                            <ArrowForward className="forword"/>
                        </Button>
                    </Box>

                </Box>


            </Box>


            <Foursec />

            <Service />

            <Container>


                <Box className="About" sx={{
                    margin: "130px 0px", width: "100%", height: "100%", display: "flex", alignItems:
                        "center", justifyContent: "space-between", flexWrap: "wrap"
                }}>
                    <Box sx={{
                        background: "white", width: "50%", height: "100%", display: "flex",
                        alignItems: "start", justifyContent: "space-around", flexDirection: "column", margin: "20px"
                    }}>
                        <Typography variant="" sx={{
                            color: " #FE4C1C",
                            marginBottom: "30px", fontWeight: "900", fontSize: "23px"
                        }} >ABOUT US
                        </Typography>

                        <Typography variant="" sx={{
                            lineHeight: "40px", fontSize: "30px",
                            marginTop: "10px", marginBottom: "10px", fontWeight: "650", color: "black"
                        }} >
                            We Are Committed To Providing Our Costumers with Exceptional.
                        </Typography>

                        <Typography sx={{ fontSize: "17px", color: "gray", marginTop: "10px", width: "100%" }} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nam scelerisque luctus tincidunt. In hac habitasse platea dictumst.
                            Praesent vitae elementum nisl,
                        </Typography>

                        <Box className="of " sx={{ marginTop: "18px" }}>

                            <Typography sx={{color : "black" , fontWeight : "500" ,margin : "10px"}} gutterBottom> <Circle sx={{fontSize : "8px" }} />   Price of additional mater operators(if needed)</Typography>

                            <Typography sx={{color : "black" , fontWeight : "500" ,margin : "10px"}}><Circle sx={{fontSize : "8px" }} />  Transportation cost of carrying new matrial/Part</Typography>

                            <Typography sx={{color : "black" , fontWeight : "500", margin : "10px"}}><Circle sx={{fontSize : "8px" }} />  Interpreting service is our specialty </Typography>


                        </Box>



                        <Box sx={{ marginTop: "10px" }}>

                            <Button variant="contained" sx={{
                                height: "50px", background: " #FE4C1C", width: "195px",
                                fontSize: "15px", borderRadius: "30px"
                            }}>
                                KNOW  More
                                <ArrowForward className="forword"/>
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ margin: "10px" }} className="about-image">
                        <img className="about-image" src={about} alt="" />

                    </Box>
                </Box>
            </Container>

            <Team />
            <Parteners />
            <Box sx={{ marginTop: "60px" }}></Box>
            <Footer />
        </>

    )
}
export default About


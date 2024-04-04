import { Box, Button, Container, Typography } from "@mui/material"
import Forword from "../assets/for.png"


const App = () => {
    return (
        <Container>
            <Box className="homeSection" sx={{
                width: "100%", minHeight: "600px", display: "flex",
                alignItems: "center", justifyContent: "space-between", marginBottom: "50px" ,
            }}>
                <Box sx={{ background: "white", width: "55%", height: "100%", display: "flex", alignItems: "start", justifyContent: "space-around", flexDirection: "column" }}>
                    <Typography variant="" sx={{ color: " #FE4C1C", marginBottom: "20px", fontWeight: "700" }} >INNOVATIVE FEATURES & SUPPORT</Typography>
                    <Typography variant="h3" sx={{ color: " #0160E7", fontWeight: "900" }} >Soham Web Solution</Typography>
                    <Typography variant="" sx={{ fontSize: "40px", color:  " #0160E7", fontWeight: "700", marginBottom: "25px" }} >Website Development company</Typography>
                    <Typography sx={{ fontSize: "12.5px", color: "black" }} >  
                        We are speciallizes in building website and application using various platforms and frameworks. We have expert
                        team of developers in web development using Larave, Codelgniter, Wordpress, WooCommerce, and Shopify. In addition
                        to these platforms, Soham Web Solution also speciallizes in working with React js and APIS.
                    </Typography>
                    <Box className="ned" sx={{ marginTop: "25px" }}>
                        <Button variant="contained" sx={{  marginRight: "20px", fontSize: "16px",
                         height: "50px", width: "190px", background:"#0160E7",
                            borderRadius: "30px"
                        }}>
                            Get Started
                            <img className="forword" src={Forword} />
                        </Button>
                        <Button variant="contained" sx={{
                            height: "50px", width: "190px", 
                            background: " #FE4C1C", fontSize: "16px", borderRadius: "30px", fontWeight: "400"
                        }}>
                            Learn More
                            <img className="forword" src={Forword} alt="" />
                        </Button>
                    </Box>
                </Box>


                <Box className="home-image">

                </Box>

            </Box>
        </  Container>
    )
}
export default App


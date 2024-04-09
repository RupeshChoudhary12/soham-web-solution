
import { Box, Container, Typography } from "@mui/material"
import Ford from "../assets/ford.png"
import Bank from "../assets/bank.png"
import Laravel from "../assets/laravel.png"
import Svelte from "../assets/svelte.png"
import Oneplus from "../assets/oneplus.png"
import Crocs from "../assets/crocs.png"



const Parteners = () => {
    return (
        <Box className="part" sx={{ background: "#f4f0f0" }}>
            <Box sx={{ paddingTop: "70px", display: "flex", alignItems: "start", justifyContent: "start" }}>
                <Container sx={{ width: "80%" }}>
                    <Typography sx={{ fontWeight: "900", color: " #FE4C1C" , fontSize : "23px" }}>
                        OUR PARTNERS
                    </Typography>
                    <Typography variant="" sx={{
                        marginTop: "20px", fontWeight: "650", color: "black",
                        fontSize: "30px"
                    }}>People Who Trust You</Typography>
                </Container>
            </Box>
            <Container >
                <Box sx={{
                    width: "100%", height: "100%", display: "FLEX", alignItems: "center",
                    justifyContent: "space-between", flexWrap: "wrap", padding: "20px",
                }}>
                    <Box sx={{ width: "150px", borderRadius: "3px", height: "60px", background: "white", margin: "15px", display: "FLEX", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <a href="">  
                         <img className="pt-img" src={Ford} alt="" />
                        </a>
                    </Box>
                    <Box sx={{ width: "150px", borderRadius: "3px", height: "60px", background: "white", margin: "15px", display: "FLEX", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <a href="">  <img className="pt-img" src={Bank} alt="" />
                        </a>
                    </Box>
                    <Box sx={{ width: "150px", borderRadius: "3px", height: "60px", background: "white", margin: "15px", display: "FLEX", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <a href=""><img className="pt-img" src={Laravel} alt="" />
                        </a>
                    </Box>
                    <Box sx={{ width: "150px", borderRadius: "3px", height: "60px", background: "white", margin: "15px", display: "FLEX", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <a href=""><img className="pt-img" src={Svelte} alt="" />
                        </a>
                    </Box>
                    <Box sx={{ width: "150px", borderRadius: "3px", height: "60px", background: "white", margin: "15px", display: "FLEX", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <a href=""> <img className="pt-img" src={Oneplus} alt="" />
                        </a>
                    </Box>
                    <Box sx={{ width: "150px", borderRadius: "3px", height: "60px", background: "white", margin: "15px", display: "FLEX", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <a href=""><img className="pt-img" src={Crocs} alt="" />
                        </a>
                    </Box>
                </Box>

            </Container>

        </Box>
    )
}
export default Parteners


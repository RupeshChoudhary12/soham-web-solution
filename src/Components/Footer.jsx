import { Box, Button, Container, Typography } from "@mui/material"

import Call from "../assets/call.svg"

import screen from '../assets/screen.png'
import IconSection from "./IconSection"
import { AddLocation, Email, Phone, Smartphone } from "@mui/icons-material"


const Footer = () => {
     return (
          <Box className="footer" sx={{ width: "100%", background: " #00001a" }}>
               < Container>
                    <Box sx={{ color: "white", padding: "100px 0px" }}>

                         <Typography className="get" variant="h6" sx={{ fontWeight: "900", width: "20%", display: "flex", color: "#FE4C1C", alignItems: "center", justifyContent: "start" }}> GET CONECTED </Typography>
                         <Box className="align" sx={{
                              paddingBottom: "100px", display: "flex", alignItems: "center",
                              justifyContent: "space-evenly", height: "70%", width: "100%"
                         }}>
                              <Box sx={{ width: "50%" }}>
                                   <Typography variant="h5" sx={{
                                        marginTop: "20px", width: "100%", fontSize: "30px",
                                        fontWeight: "650"
                                   }}>Subscribe To Newsletter <br /> And Stay Updated</Typography>
                              </Box>

                              <Box className="fib" sx={{ width: "50%", height: "100%", marginLeft: "10px", marginTop: "20px", display: "flex", alignItems: "end" }}>
                                   <input className="footer-input" placeholder="Enter Your Email" />
                                   <Button className="btns" variant="contained"
                                        sx={{
                                             background: "#FE4C1C", marginLeft: "-40px",
                                             borderRadius: "30px", height: "50px",
                                             width: " 10%", padding: "0px 70px"
                                        }}>Submit</Button>
                              </Box>


                         </Box>


                         <Box className="hr" sx={{}}><hr /></Box>


                         <Box sx={{
                              width: "100%", paddingTop: "100px ", display: "flex", alignItems: "start",
                              justifyContent: "space-between", flexWrap: "wrap"
                         }}>
                              <Box id="footer-sec" sx={{ width: "310px", margin: "10px" }}>
                                   <img src={screen} className="footer-logo" />
                                   <Typography sx={{ fontSize: "14px", mt: "10px" }}>At Soham Web Solution we endeavour to
                                        provide innovative, cost effective and
                                        optimum solutions that drive the growth of
                                        your businesses across the world. </Typography>

                                <IconSection/>
                                  
                              </Box>

                              <Box className="Our " sx={{ width: "200px", margin: "10px" }}>
                                   <Typography variant="h6" sx={{ fontWeight: "900", marginBottom: "10px" }}>Quick Links</Typography>

                                   <Typography sx={{margin : "8px"}}> <a href="">About</a> </Typography>
                                   <Typography sx={{margin : "8px"}}> <a href="">Services</a> </Typography>
                                   <Typography sx={{margin : "8px"}}> <a href="">Career</a> </Typography>
                                   <Typography sx={{margin : "8px"}}> <a href="">Contact Us</a> </Typography>
                                   <Typography sx={{margin : "8px"}} > <a href="">Blog</a> </Typography>

                              </Box>

                              <Box className="Our" sx={{ width: "280px", margin: "10px" }}>
                                   <Typography variant="h6" sx={{ fontWeight: "900", marginBottom: "10px" }}>Our Policies</Typography>

                                   <Typography sx={{margin : "8px"}} > <a href="">Privacy Policy</a> </Typography>
                                   <Typography sx={{margin : "8px"}}> <a href="">Terms Conditions</a> </Typography>
                                   <Typography sx={{margin : "8px"}}> <a href="">Support and Mantainance Package</a> </Typography>
                                   <Typography sx={{margin : "8px"}}> <a href="">Shipping and delivery Policy</a> </Typography>
                                   <Typography sx={{margin : "8px"}}> <a href="">Cancelation and refund policy</a> </Typography>


                              </Box>

                              <Box className="footer-sec" sx={{ width: "260px", margin: "10px" }}>
                                   <Typography variant="h6" sx={{
                                        fontWeight: "900",
                                        marginBottom: "10px", width: "100%"
                                   }} >Our Policies</Typography>
                                   <Box sx={{ display: "flex" }}>
                                        <Phone htmlColor="#FE4C1C"/>

                                        <Typography sx={{ fontSize: "13px", margin: "10px", width: "100%" }}> <a href="">+91 78792-31700</a> </Typography>
                                   </Box>

                                   <Box sx={{ display: "flex", alignItems: "center" }}>
                                   <Smartphone  htmlColor=" #FE4C1C"/>

                                        <Typography sx={{ fontSize: "13px", margin: "10px", width: "100%" }}> <a href="">+91 70003-35673</a></Typography>
                                   </Box>

                                   <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <Smartphone  htmlColor=" #FE4C1C"/>

                                        <Typography sx={{ fontSize: "13px", margin: "10px", width: "100%" }}> <a href="">+91 77480-18188</a></Typography>
                                   </Box>

                                   <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <Email htmlColor=" #FE4C1C"/>

                                        <Typography sx={{ fontSize: "13px", margin: "10px", width: "100%" }}> <a href="">Contact@sohamsolution.com</a> </Typography>
                                   </Box>

                                   <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <AddLocation htmlColor="#FE4C1C"/>

                                        <Typography sx={{ fontSize: "13px", margin: "10px", width: "100%" }}> <a href="">12 , Civil Line, Chamunda complex, Dewas</a> </Typography>
                                   </Box>


                              </Box>



                         </Box>
                    </Box>

               </Container>

          </Box>
     )
}
export default Footer


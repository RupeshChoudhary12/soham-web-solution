import { Box, Container, Typography } from "@mui/material"
import Php from "../assets/php.png"
import Design from "../assets/design.svg"
const Service = () => {
   return (
      <Box className="servi" sx={{ width:"100%", background: "#F0F6FF  ", padding: "70px 0px" , marginTop : "40px"}} >
         <Container >
         <Typography sx={{ fontWeight: "900", fontSize : "23px" ,  color:"#0160E7" ,  textAlign: "start"}}>OUR BEST SERVICES</Typography>

            <Box className="service" sx={{
               padding : "20px 0px",
               width: "100%",
           
               
            }}>

               <Typography   variant="" sx={{ marginTop: "30px", fontSize: "30px", alignItems :"center ",fontWeight: "650" ,color:"black" }}>
                  We Are Committed To Providding Our <br /> Costumers With Exptional.</Typography>

            </Box>
         </Container>
         <Container-fluid  >
            <Box sx={{  
               width: "100%", height: "100%", display: "FLEX", alignItems: "center",
               justifyContent: "center" ,flexWrap:"wrap"
            }}>
               <Box className="hoverr" sx={{
                  padding: "30px", width: "350px", borderRadius: "3px", height: "350px",
                  background: "white", margin: "20px", display: "FLEX", alignItems: "center",
                  justifyContent: "center", flexDirection: "column"
               }}>
                  <img src={Php} alt="" />
                  <Typography variant="" sx={{ fontWeight: "900" }} >PHP Development</Typography>
                  <Typography sx={{ fontSize: "18px", padding: "10px" }}>
                     PHP development services focus on
                     implementing secure and powerful
                     server-sides web applications. Our
                     company deliver robust CMSs, and
                     web-based solutions, we manage
                     complex databases
                  </Typography>
               </Box>
               <Box  className="hoverr" sx={{ padding: "30px", width: "350px", borderRadius: "3px",
               height: "350px", background: "white", margin: "15px", display: "FLEX", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                  <img src={Design}  alt="" />
                  <Typography variant="" sx={{ fontWeight: "900" }}>Web Designing</Typography>
                  <Typography  sx={{ fontSize: "18px", padding: "10px" , marginTop: "10px" , }}>
                     Web designing services are
                     professional services that involve the
                     creation, development, and
                     maintenance of websites for
                     individuals, businesses,
                     organizations, or institutions
                  </Typography>
               </Box>
               <Box className="hoverr" sx={{  padding: "30px", width: "350px", borderRadius: "3px",
                height: "100%", background: "white", margin: "15px", display: "FLEX", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                  <img src={Php} alt="" />
                  <Typography variant="" sx={{ fontWeight: "900" }}>Graphic Designing</Typography>
                  <Typography sx={{ fontSize: "15px", padding: "10px" }}>
                     Expert Graphic Design Services for a
                     Wide Range of Industries. Our team
                     of experienced graphic designers is
                     here to help you stand out in your
                     industry and drive business growth.
                     Make a statement with professionally
                     designed graphics that reflect your
                     brand’s personality                 </Typography>
               </Box>
            </Box>
            <Box sx={{
               width: "100%", height: "100%", display: "FLEX", alignItems: "center",
               justifyContent: "center", flexWrap:"wrap"
            }}>
               <Box className="hoverr" sx={{
                   padding: "30px", width: "350px", borderRadius: "3px", height: "100%",
                  background: "white", margin: "15px", display: "FLEX", alignItems: 
                  "center", justifyContent: "center", flexDirection: "column"
               }}>
                  <img src={Php} alt="" />
                  <Typography variant="" sx={{ fontWeight: "900" }}>WordPress Development</Typography>
                  <Typography sx={{ fontSize: "15px", padding: "10px" }}>
                     We offers all possible WordPress
                     services, ranging from custom
                     WordPress theme development,
                     plugin customization, WordPress
                     speed optimization, SEO, and
                     integration with 3rd party modules
                     and applications with your
                     WordPress website. to meet your
                     business needs
                  </Typography>
               </Box>
               <Box className="hoverr" sx={{
                   padding: "30px", width: "350px", borderRadius: "3px", height: "350px",
                  background: "white", margin: "15px", display: "FLEX", alignItems: "center",
                  justifyContent: "center", flexDirection: "column",
               }}>
                  <img src={Php} alt="" />
                  <Typography variant="" sx={{ fontWeight: "900" }}>Shopify Development</Typography>
                  <Typography sx={{ fontSize: "15px", padding : "10px" ,marginTop : "8px"}}>
                     Armed with a team of efficient UI/UX
                     designers and Shopify certified
                     developers, our Shopify web
                     development service will help you
                     with responsive, user-friendly and
                     interactive Shopify themes for your
                     store.
                  </Typography>
               </Box>
               <Box className="hoverr" sx={{
                  margin: "20px", padding: "30px", width: "350px", borderRadius:
                     "3px", height: "100%", background: "white", display: "FLEX", alignItems: "center", justifyContent: "center", flexDirection: "column"
               }}>
                  <img src={Php} alt="" />
                  <Typography variant="" sx={{ fontWeight: "900" }}>Shopify Development</Typography>
                  <Typography sx={{ fontSize: "15px", padding: "10px" }}>
                     Ecommerce Development
                     We develop e-commerce platforms
                     that feature personalized chatbots
                     and payment gateway integration
                     with PayPal, Authorize.Net, and
                     FirstData. In addition, our services
                     include custom e-commerce website
                     design and shopping cart
                     developmen
                  </Typography></Box>

            </Box>

         </Container-fluid>

      </Box>
   )
}
export default Service


import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from "@mui/material"


import Plus from "../assets/plus.svg"
import Insta from "../assets/Vectorinsta.svg"
import Facbook from "../assets/facebook-blue.svg"
import Twitter from "../assets/twitter.png"

const Team = () => {
  return (
    <Container>


      <Box className="team-new"  sx={{ paddingTop: "70px", width: "500" }}>

        <Typography sx={{ fontWeight: "900", color: "#0160E7", }}><li>Our Team</li></Typography>
        <Typography variant="" sx={{  fontSize: "30px", fontWeight: "650" ,color:"black", margin: "20px 0px" }}>Our Creative Minds</Typography>
        <Typography sx={{ width: "45%", fontSize: "13px" }}>Get th most of  Reducton in your  opreating Costs for  the whole product which creates amazing UI/UXexperence</Typography>

      </Box>

      <Box className="team-new1" sx={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "80px 0PX", flexWrap: "wrap"
      }}>
        <Card sx={{ maxWidth: 345, boxShadow: "3px 2px 20px 1px  #ccf2ff", margin: "10PX" }} >

          <CardActionArea>
          <Box  sx={{ width:"50px", height:"200px", position: "absolute", top: "20px", left: "15px" , display:"flex" , alignItems:"center" , justifyContent:"space-between" ,flexDirection:"column"  }} >
  
          <img className="plus" src={Plus} alt="" />
              


               <ul className="mt-4">
  <li className="mt-4">
    <a href="#">
    <i className="fa-brands fa-instagram icon "></i>    </a>
  </li>
  <li className="mt-2">
    <a href="#">
    <i className="fa-brands fa-facebook-f icon"></i>
    </a>
  </li>
  <li className="mt-2">
    <a href="#">
      <i className="fab fa-linkedin-in icon"></i>
      </a></li>
  <li className="mt-2">
    <a href="#">
    <i className="fa-brands fa-x-twitter icon"></i>    
      </a></li>
</ul>

            </Box>
            <img className="team" alt="" />
            <CardContent sx={{ width: "410px", padding: "30px", height: "150px" }}>
              <Typography color="#0160E7" gutterBottom variant="h6" component="div" 
              sx={{ fontWeight: "800" }}>
                Neeraj Malakar
              </Typography>

              <Typography >
                Founder & Ceo
              </Typography>

            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, boxShadow: "3px 2px 20px 1px  #ccf2ff", margin: "10PX" }}>
          <CardActionArea>
          <Box sx={{ width:"50px", height:"200px", position: "absolute", top: "20px", left: "15px" , display:"flex" , alignItems:"center" , justifyContent:"space-between" ,flexDirection:"column"  }} >
              <img src={Plus} alt="" />
<ul className="mt-4">
  <li className="mt-4">
    <a href="#">
    <i className="fa-brands fa-instagram icon "></i>    </a>
  </li>
  <li className="mt-2">
    <a href="#">
    <i className="fa-brands fa-facebook-f icon"></i>
    </a>
  </li>
  <li className="mt-2">
    <a href="#">
      <i className="fab fa-linkedin-in icon"></i>
      </a></li>
  <li className="mt-2">
    <a href="#">
    <i className="fa-brands fa-x-twitter icon"></i>    
      </a></li>
</ul>

          
            </Box>
            <img className="team" />
            <CardContent sx={{ width: "410px", padding: "30px", height: "150px" }}>
              <Typography color="#0160E7" gutterBottom variant="h6" component="div"
               sx={{ fontWeight: "800" }}>
                Ravi Yadav
              </Typography>
              <Typography component="div">
                Founder & CEO
              </Typography>


            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, boxShadow: "3px 2px 20px 1px  #ccf2ff", margin: "10PX" }}>
          <CardActionArea>
          <Box sx={{ width:"50px", height:"200px", position: "absolute", top: "20px", left: "15px" , display:"flex" , alignItems:"center" , justifyContent:"space-between" ,flexDirection:"column"  }} >
              <img src={Plus} alt="" />
              <ul className="mt-4">
  <li className="mt-4">
    <a href="#">
    <i className="fa-brands fa-instagram icon "></i>    </a>
  </li>
  <li className="mt-2">
    <a href="#">
    <i className="fa-brands fa-facebook-f icon"></i>
    </a>
  </li>
  <li className="mt-2">
    <a href="#">
      <i className="fab fa-linkedin-in icon"></i>
      </a></li>
  <li className="mt-2">
    <a href="#">
    <i className="fa-brands fa-x-twitter icon"></i>    
      </a></li>
</ul>       
                </Box>
            {/* <img className="team1" /> */}
            <CardContent sx={{ width: "410px", padding: "30px", height: "150px" }}>
              <Typography color="#0160E7" gutterBottom variant="h6" component="div" sx={{ fontWeight: "800" }}>
                Anil Meena
              </Typography>
              <Typography component="div">
                  CTO & COO
              </Typography>


            </CardContent>
          </CardActionArea>
        </Card>
      </Box>





    </Container>
  )
}
export default Team


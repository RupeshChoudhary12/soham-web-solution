import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from "@mui/material"


import Plus from "../assets/plus.svg"

import { AddCircleOutlined, Facebook, Instagram, LinkedIn, X } from "@mui/icons-material"

const Team = () => {
  return (
    <Container>


      <Box className="team-new" sx={{ paddingTop: "70px", width: "500" }}>

        <Typography sx={{ fontWeight: "900", color: "#0160E7", fontSize: "23px" }}>Our Team</Typography>
        <Typography variant="" sx={{ fontSize: "30px", fontWeight: "650", color: "black", margin: "20px 0px" }}>Our Creative Minds</Typography>
        <Typography sx={{ width: "45%", fontSize: "13px", marginTop: "20px" }}>Get th most of  Reducton in your  opreating Costs for  the whole product which creates amazing UI/UXexperence</Typography>

      </Box>

      <Box className="team-new1" sx={{
        width : "100%" ,
        display: "flex", alignItems: "center", justifyContent: "space-between", 
        padding: "80px 0PX", flexWrap: "wrap"
      }}>
        <Card  sx={{ maxWidth: 345, boxShadow: "3px 2px 20px 1px  #ccf2ff", margin: "10PX" }} >

          <CardActionArea  >
            <Box sx={{ width: "50px", height: "200px", position: "absolute", top: "20px", left: "15px", display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column" }} >

              <img className="plus" src={Plus} alt="" />



              <Box sx={{}}>

              <img src={Plus} alt="" />
              <ul className="plyaa">
                <li>
                  <a href="#">
                    <Instagram className="icon" />
                      </a>
                </li>
                <li >
                  <a href="#">
                    <Facebook className="icon"/>

                  </a>
                </li>
                <li >
                  <a href="#">
                    <LinkedIn className=" icon"/>
                  </a></li>
                <li >
                  <a href="#">
                    <X className="icon"/>
                  </a></li>
              </ul>

              </Box>

            </Box>
            <img className="team" alt="" />
            <CardContent sx={{ width: "340x", padding: "30px", height: "150px" }}>
              <Typography color="#0160E7" gutterBottom variant="h6" component="div"
                sx={{ fontWeight: "700", textAlign: "center" }}>
                Neeraj Malakar
              </Typography>

              <Typography sx={{ textAlign: "center" }}>
                Founder & CEO
              </Typography>

            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, boxShadow: "3px 2px 20px 1px  #ccf2ff", margin: "10PX" }}>
          <CardActionArea>
            <Box sx={{ width: "50px", height: "200px", position: "absolute", top: "20px", left: "15px", display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column" }} >
              <img src={Plus} alt="" />
              <ul className="plyaa">
                <li>
                  <a href="#">
                    <Instagram className="icon" />
                      </a>
                </li>
                <li >
                  <a href="#">
                    <Facebook className="icon"/>

                  </a>
                </li>
                <li >
                  <a href="#">
                    <LinkedIn className=" icon"/>
                  </a></li>
                <li >
                  <a href="#">
                    <X className="icon"/>
                  </a></li>
              </ul>



            </Box>
            <img className="team" />
            <CardContent sx={{ width: "340px", padding: "30px", height: "150px" }}>
              <Typography color="#0160E7" gutterBottom variant="h6" component="div"
                sx={{ fontWeight: "700", textAlign: "center" }}>
                Ravi Yadav
              </Typography>
              <Typography component="div" sx={{ textAlign: "center" }}>
                Founder & CEO
              </Typography>


            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, boxShadow: "3px 2px 20px 1px  #ccf2ff", margin: "10PX" }}>
          <CardActionArea >
            <Box sx={{ width: "50px", height: "200px", position: "absolute", top: "20px", left: "15px", display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column" }} >
              <img src={Plus} alt="" />

              <img src={Plus} alt="" />
              <ul className="plyaa">
                <li>
                  <a href="#">
                    <Instagram className="icon" />
                      </a>
                </li>
                <li >
                  <a href="#">
                    <Facebook className="icon"/>

                  </a>
                </li>
                <li >
                  <a href="#">
                    <LinkedIn className=" icon"/>
                  </a></li>
                <li >
                  <a href="#">
                    <X className="icon"/>
                  </a></li>
              </ul>


            </Box>
            {/* <img className="team1" /> */}
            <CardContent sx={{ width: "340px", padding: "30px", height: "150px" }}>
              <Typography color="#0160E7" gutterBottom variant="h6" component="div" sx={{ fontWeight: "700", textAlign: "center" }}>
                Anil Meena
              </Typography>
              <Typography component="div" sx={{ textAlign: "center" }}>
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


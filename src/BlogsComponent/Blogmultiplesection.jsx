import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material"
import Footer from "../Components/Footer"
import Card1 from "../blogsimg/card1.png"
import Card2 from "../blogsimg/card2.png"
import Card3 from "../blogsimg/card3.png"

import Left from "../blogsimg/left.png"
import Right from "../blogsimg/right.png"
import Search from "../blogsimg/search.png"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchcontents } from "../features/contents/contentSlice"
import Blog1 from '../assets/Blog1.png'
import Blog2 from '../assets/blog2.png'
import Blog3 from '../assets/blog3.png'
import Blog4 from '../assets/blog4.png'
import Blog5 from '../assets/blog5.png'
import Blog6 from '../assets/blog6.png'
import Blog7 from '../assets/blog7.png'
import Blog8 from '../assets/blog8.png'
import Blog9 from '../assets/blog9.png'
import Blog10 from '../assets/blog10.png'




const Blogmultiplesection = () => {
    const { isLoading, isError, isSuccess, message, contents  } = useSelector(state => state.content)
    const dispatch = useDispatch();


    useEffect(() => {
        const res = dispatch(fetchcontents());
           console.log(contents);
    }, []);







  if(isLoading){
    return(
        <Container sx={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%"}}>
            <div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
        </Container>
    )
  }

  

    return (
        <>
            <Box  sx={{background: "#d9d9d9",  display: "flex", alignItems: "center",  justifyContent: "center", flexDirection: "column", width: "100%", height : "150px" }}>
                <Typography variant="h4" sx={{ color: "#0160E7" , fontWeight : "500" }}>Blogs</Typography>
                <Box sx={{ display: "flex" }}>
                    <Typography sx={{ marginRight: "15PX", color: "#FE4C1C"  , fontWeight : "600"}}>HOME <i class="bi bi-caret-right"></i> </Typography>
                    <Typography>
                        Blogs

                    </Typography>
                </Box>
            </Box>

            <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 50px", flexWrap: "wrap" }}>
            
                <Box sx={{
                    width: "700px", height: "100%", display: "flex",
                    alignItems: "center", justifyContent: "center", flexDirection: "COLUMN"
                }}>
                    <Box sx={{ width: "100%" }}>
                        <img className="blogimg1" src={contents.jetpack_featured_media_url} alt="" />
                        {/* <img className="blogimg1" sx={{width : "100%"}}   src={Blog1} alt="" /> */}

                    </Box>
                    <Box sx={{ marginTop: "10px", width: "100%" }}>
                    <Box className="howw mt-3">
                    <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px", fontWeight : "500" }}>
                    <i class="bi bi-calendar3">09 Ma 2024</i>
                        </Button>

                        <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" , fontWeight : "400" }}>
                            WEBDEVELOPMENT
                        </Button>

                        <Button variant="contained" sx={{ width: "50px", height: "28px", fontSize: "10px", margin: "3px" , fontWeight : "400"}}>
                            SHOPIFY
                        </Button>

                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "3px" , fontWeight : "400"}}>
                            WOOCOMERCE
                        </Button>

                        <Button variant="contained" sx={{ width: "80px", height: "28px", fontSize: "10px", margin: "3px", fontWeight : "400" }}>
                            WORDPRESS
                        </Button>

                        <Button variant="contained" sx={{ width: "125px", height: "28px", fontSize: "10px", margin: "3px" , fontWeight : "400"}}>
                            WORDPRESSPLUGINS
                        </Button>

                    
                    </Box>


                    </Box>
                    <Typography sx={{ fontSize: "25px", color: "black", fontWeight: "600" , marginTop : "35px"}}>
                            The Ultimate Guide to Shopiyf SEO:How to Rank Higher and Drive more
                        </Typography>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "400" , marginTop : "10px"}}>
                            Are you Shopify store owner looking to boose your online visiblity and drive more trafic to your website? Look no further in thus ultimate guide to Shopify SEO
                        </Typography>




                    <Box sx={{ width: "100%" , marginTop : "20px" }}>
                        <img className="blogimg1" src={contents.jetpack_featured_media_url} alt="" />

                    </Box>

                    <Box sx={{ marginTop: "10px", width: "100%" }}>
                     
                      <Box className="howw mt-3">
                      <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" , fontWeight : "400"}}>
                      <i class="bi bi-calendar3">02 Ma 2024</i>
                        </Button>

                        <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px", fontWeight : "400" }}>
                            WEBDEVELOPMENT
                        </Button>

                        <Button variant="contained" sx={{ width: "50px", height: "28px", fontSize: "10px", margin: "3px", fontWeight : "400" }}>
                            SHOPIFY
                        </Button>

                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "3px", fontWeight : "400" }}>
                            WOOCOMERCE
                        </Button>

                        <Button variant="contained" sx={{ width: "80px", height: "28px", fontSize: "10px", margin: "3px", fontWeight : "400" }}>
                            WORDPRESS
                        </Button>

                        <Button variant="contained" sx={{ width: "125px", height: "28px", fontSize: "10px", margin: "3px" , fontWeight : "400"}}>
                            WORDPRESSPLUGINS
                        </Button>

                      </Box>
                    


                    </Box>
                    <Typography sx={{ fontSize: "25px", color: "black", fontWeight: "600" , marginTop : "35px"}}>
                        How to create a Modern Web App Using Wordpress and React?
                        </Typography>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "400" , marginTop : "10px"}}>
                        Are you looking to develop a modern web app that combiness the power of wordPress and React? Look no further in this article we will guide you through the
                        </Typography>





                    <Box sx={{ width: "100%" , marginTop : "20px" }}>
                        <img className="blogimg1" src={contents.jetpack_featured_media_url} alt="" />

                    </Box>

                    <Box sx={{ marginTop: "10px", width: "100%" }}>

                        <div className="howw mt-3">
                        <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                        <i class="bi bi-calendar3">24 Feb 2024</i>
                        </Button>

                        <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WEBDEVELOPMENT
                        </Button>

                        <Button variant="contained" sx={{ width: "50px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            SHOPIFY
                        </Button>

                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WOOCOMERCE
                        </Button>

                        <Button variant="contained" sx={{ width: "80px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESS
                        </Button>

                        <Button variant="contained" sx={{ width: "125px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESSPLUGINS
                        </Button>

                    
                        </div>
                  


                    </Box>
                    <Typography sx={{ fontSize: "25px", color: "black", fontWeight: "600" , marginTop : "35px"}}>
                       Shopify vs WooCommerce: Which one is Better for Your Online Store
                        </Typography>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "400" , marginTop : "10px"}}>
                         Are you torn between Shopify and WooCommerce ffor your online store ? your not alone Both platforms have their making it chlanenging to decide which one is better 
                        </Typography>





                    <Box sx={{ width: "100%" , marginTop : "20px"}}>
                        <img className="blogimg1" src={contents.jetpack_featured_media_url} alt="" />

                    </Box>
                    <Box sx={{ marginTop: "10px", width: "100%" }}>
                       <div className="howw mt-3">
                       <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                       <i class="bi bi-calendar3">20 Feb 2024</i>
                        </Button>

                        <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WEBDEVELOPMENT
                        </Button>

                        <Button variant="contained" sx={{ width: "50px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            SHOPIFY
                        </Button>

                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WOOCOMERCE
                        </Button>

                        <Button variant="contained" sx={{ width: "80px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESS
                        </Button>

                        <Button variant="contained" sx={{ width: "125px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESSPLUGINS
                        </Button>

                       </div>
                    


                    </Box>
                    <Typography sx={{ fontSize: "25px", color: "black", fontWeight: "600" , marginTop : "35px"}}>
                        Vashant Panchmi 2024
                        </Typography>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "400" , marginTop : "10px"}}>
                            Get ready to immerse yourself in the vibrant colores and joyous celebrations of vasnt Panchami 2024! this auspicious Hindu festival, also known as Sarswati Puja marks the arrival of  
                        </Typography>




                    <Box sx={{ width: "100%" , marginTop : "20px" }}>
                        <img className="blogimg1" src={contents.jetpack_featured_media_url} alt="" />

                    </Box>

                    <Box sx={{ marginTop: "10px", width: "100%" }}>
                    <div className="howw mt-3">
                       <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                       <i class="bi bi-calendar3">14 Feb 2024</i>
                        </Button>

                        <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WEBDEVELOPMENT
                        </Button>

                        <Button variant="contained" sx={{ width: "50px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            SHOPIFY
                        </Button>

                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WOOCOMERCE
                        </Button>

                        <Button variant="contained" sx={{ width: "80px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESS
                        </Button>

                        <Button variant="contained" sx={{ width: "125px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESSPLUGINS
                        </Button>

                       </div>
                    


                    </Box>
                    <Typography sx={{ fontSize: "25px", color: "black", fontWeight: "600" , marginTop : "35px"}}>
                        What are the challenges and opprtunities for PHP develop[ers and business in the future?]
                        </Typography>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "400" , marginTop : "10px"}}>
                            PHP developers face challenges in technilogy advancements and security but the demand for their skills presents significant opprtunities for PHP developers Lerveraging PHP development enables business to create robust
                        </Typography>



                    <Box sx={{ width: "100%" ,marginTop : "20px" }}>
                        <img className="blogimg1" src={contents.jetpack_featured_media_url} alt="" />

                    </Box>

                    <Box sx={{ marginTop: "10px", width: "100%" }}>
                    <div className="howw mt-3">
                       <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                       <i class="bi bi-calendar3">10 Feb 2024</i>
                        </Button>

                        <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WEBDEVELOPMENT
                        </Button>

                        <Button variant="contained" sx={{ width: "50px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            SHOPIFY
                        </Button>

                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WOOCOMERCE
                        </Button>

                        <Button variant="contained" sx={{ width: "80px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESS
                        </Button>

                        <Button variant="contained" sx={{ width: "125px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESSPLUGINS
                        </Button>

                       </div>
                    


                    </Box>
                    <Typography sx={{ fontSize: "25px", color: "black", fontWeight: "600" , marginTop : "35px"}}>
                            What will be New features in WordPress 6.5: Eveerything You Need to know
                        </Typography>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "400" , marginTop : "10px"}}>
                            Get ready to immerse yourself in the vibrant colore and joyouns celebrations of vasant Panchami 2024! this  auspicious Hindu festival also know as Saraswati ji puja marks the arrival of 
                        </Typography>


                        <Box sx={{ width: "100%" , marginTop : "20px" }}>
                        <img className="blogimg1" src={contents.jetpack_featured_media_url} alt="" />

                    </Box>

                    <Box sx={{ marginTop: "10px", width: "100%" }}>
                    <div className="howw mt-3">
                       <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                       <i class="bi bi-calendar3">31 DEC 2024</i>
                        </Button>

                        <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WEBDEVELOPMENT
                        </Button>

                        <Button variant="contained" sx={{ width: "50px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            SHOPIFY
                        </Button>

                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WOOCOMERCE
                        </Button>

                        <Button variant="contained" sx={{ width: "80px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESS
                        </Button>

                        <Button variant="contained" sx={{ width: "125px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESSPLUGINS
                        </Button>

                       </div>
                    
                    


                    </Box>
                    <Typography sx={{ fontSize: "25px", color: "black", fontWeight: "600" , marginTop : "35px"}}>
                            9 Staps to Creative a Plugin for Beginners
                        </Typography>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "400" , marginTop : "10px"}}>
                            A WordPress plugin is a software that can be added to a WordPress website to enhace its functionality and add new fetures it acts as an add-on eliminting the 
                        </Typography>




                        <Box sx={{ width: "100%" , marginTop : "20px" }}>
                        <img className="blogimg1" src={contents.jetpack_featured_media_url} alt="" />

                    </Box>

                    <Box sx={{ marginTop: "10px", width: "100%" }}>
                    <div className="howw mt-3">
                       <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                       <i class="bi bi-calendar3">25 Dec 2024</i>
                        </Button>

                        <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WEBDEVELOPMENT
                        </Button>

                        <Button variant="contained" sx={{ width: "50px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            SHOPIFY
                        </Button>

                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WOOCOMERCE
                        </Button>

                        <Button variant="contained" sx={{ width: "80px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESS
                        </Button>

                        <Button variant="contained" sx={{ width: "125px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESSPLUGINS
                        </Button>

                       </div>
                    
                    


                    </Box>
                    <Typography sx={{ fontSize: "25px", color: "black", fontWeight: "600" , marginTop : "35px" }}>
                        Merry Cristmas
                        </Typography>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "400" , marginTop : "10px"}}>
                            Christmas is an annual festival commermorting the birth of jessus Christ primarliy abserved on December 25 as a religios and culturl celebration amoung billons of people around the world A feast central to the  Cristmas iltugical year it follows the season of Advent (which begins........
                        </Typography>





                        <Box sx={{ width: "100%" , marginTop : "20px" }}>
                        <img className="blogimg1" src={contents.jetpack_featured_media_url} alt="" />

                    </Box>

                    <Box sx={{ marginTop: "10px", width: "100%" }}>
                    <div className="howw mt-3 ">
                       <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                       <i class="bi bi-calendar3">10 Dec 2023</i>
                        </Button>

                        <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WEBDEVELOPMENT
                        </Button>

                        <Button variant="contained" sx={{ width: "50px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            SHOPIFY
                        </Button>

                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WOOCOMERCE
                        </Button>

                        <Button variant="contained" sx={{ width: "80px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESS
                        </Button>

                        <Button variant="contained" sx={{ width: "125px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESSPLUGINS
                        </Button>

                       </div>
                    
                    


                    </Box>
                    <Typography sx={{ fontSize: "25px", color: "black", fontWeight: "600" , marginTop : "35px" }}>
                        Human Rights Day
                        </Typography>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "400" , marginTop : "10px"}}>
                            Human Rights Day is celebrated annully around the world on 10 December every year The date was chosen to honor the United Nations Geneal Assemblis adoption and proclamation on 10 December 1984 of......
                        </Typography>


                        <Box sx={{ width: "100%" , marginTop : "20px" }}>
                        <img className="blogimg1" src={contents.jetpack_featured_media_url} alt="" />
                    </Box>

                    <Box sx={{ marginTop: "10px", width: "100%" }}>
                           <div className="howw mt-3">
                       <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                       <i class="bi bi-calendar3">4 Dec 2023</i>
                        </Button>

                        <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WEBDEVELOPMENT
                        </Button>

                        <Button variant="contained" sx={{ width: "50px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            SHOPIFY
                        </Button>

                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WOOCOMERCE
                        </Button>

                        <Button variant="contained" sx={{ width: "80px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESS
                        </Button>

                        <Button variant="contained" sx={{ width: "125px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            WORDPRESSPLUGINS
                        </Button>

                       </div>
                    
                    


                    </Box>
                    <Typography  sx={{ fontSize: "25px", color: "black", fontWeight: "600" , marginTop : "35px" }}>
                        Human Rights Day
                        </Typography>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "400" , marginTop : "10px"}}>
                            Human Rights Day is celebrated annully around the world on 10 December every year The date was chosen to honor the United Nations Geneal Assemblis adoption and proclamation on 10 December 1984 of......
                        </Typography>







                </Box>

                
                

                


              



                <Box className="blog-button-section" sx={{ width: "350px", height: "100%",  padding: "40px 20px" }}>
                    <Box sx={{ width: "230px", display: "flex", alignItems: "center", margin: "10px 0px" }}>
                        <input className="search-input" placeholder="search " />
                        <img className="search-img" src={Search} alt="" />
                    </Box>

                    <Box sx={{ width: "100%" }}>
                        <Typography sx={{ fontSize: "18px", color: "black", fontWeight: "800" }}>Categories</Typography>
                        <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "600" }}><i class="fa-solid fa-right-long ght"></i>   Festival</Typography>
                        <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "600" }}><i class="fa-solid fa-right-long ght"></i>   On This Day</Typography>
                        <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "600" }}><i class="fa-solid fa-right-long ght"></i>   Shopify</Typography>
                        <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "600" }}><i class="fa-solid fa-right-long ght"></i>   Web Development</Typography>
                        <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "600" }}><i class="fa-solid fa-right-long ght"></i>  Web Development Tool</Typography>
                        <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "600" }}><i class="fa-solid fa-right-long ght"></i>   WooCommerce</Typography>
                        <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "600" }}><i class="fa-solid fa-right-long ght"></i>   Wordpress</Typography>
                        <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "600" }}><i class="fa-solid fa-right-long ght"></i>   Wordpress Plugins</Typography>
                        
                    </Box>

                    <Box>
                        <Typography sx={{ fontSize: "19px", color: "black", fontWeight: "800" , mt : 5 }}>RECENTS POSTS</Typography>


                        <Box sx={{ display: "flex", alignItems: "center", margin: "20px 0px" }}>
                            <img className="blogimg51" src="" alt="" />
                            <Box sx={{ margin: "10px" }}>
                                <Typography sx={{ fontSize: "13px", color: "black" ,fontWeight : "600" }}>The Ultimate Guide to Shopify SEO:How to Rank higer and Drive More</Typography>
                                <Typography sx={{ fontSize: "13px", color: "gray" }}> Febuary 11,2023</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", margin: "20px 0px" }}>
                            <img className="blogimg52" src="" alt="" />
                            <Box sx={{ margin: "10px" }}>
                                <Typography sx={{ fontSize: "13px", color: "black" ,fontWeight : "600" }}>Shofify vs WooCommerce Which One is Better for Your onlien Store</Typography>
                                <Typography sx={{ fontSize: "13px", color: "gray" }}> Febuary 11,2023</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", margin: "20px 0px" }}>
                            <img className="blogimg53" src="" alt="" />
                            <Box sx={{ margin: "10px" }}>
                                <Typography sx={{ fontSize: "13px", color: "black" ,fontWeight : "600" }}>Shofify vs WooCommerce Which One is Better for Your onlien Store</Typography>
                                <Typography sx={{ fontSize: "13px", color: "gray" }}> Febuary 11,2023</Typography>
                            </Box>
                        </Box>

                        <Box >
                        <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "700" }}>Archives</Typography>
                        <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}><i class="fa-solid fa-right-long ght"></i>  March 2024</Typography>
                        <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}><i class="fa-solid fa-right-long ght"></i> February 2024</Typography>
                        <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}><i class="fa-solid fa-right-long ght"></i>  December 2023</Typography>
                            <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}><i class="fa-solid fa-right-long ght"></i> November 2023</Typography>
                            {/* <ul className="listItem">
                                <li>February 2024</li>
                                <li>December 2023</li>
                                <li>November 2023</li>
                            </ul> */}
                        </Box>


                    </Box>

                    <Box >
                        <Typography sx={{
                            fontSize: "16px", color: "black", fontWeight: "700"
                            , padding: "20px 0px"
                        }}>Tegs</Typography>

                        <div className="how">
                        <Button  variant="contained" sx={{ width: "130px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            #Word Press
                        </Button>
                        <Button variant="contained" sx={{ width: "140px", height: "28px", fontSize: "10px", margin: "5px  3px" }}>
                            #Word Press2024
                        </Button>
                        <Button variant="contained" sx={{ width: "180px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            #WordPressPressPlugin
                        </Button>
                        <Button variant="contained" sx={{ width: "110px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            aidswareness
                        </Button>
                        <Button variant="contained" sx={{ width: "150px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            Bashantpanchmi2024
                        </Button>
                        <Button variant="contained" sx={{ width: "80px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            bhidooj
                        </Button>
                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            bhaidooj2023
                        </Button>
                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            DHANTERAS2023
                        </Button>
                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            diwali2023
                        </Button>
                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            docker
                        </Button>
                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            FESTIVAL
                        </Button>
                        <Button variant="contained" sx={{ width: "50px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            gift
                        </Button>
                        <Button variant="contained" sx={{ width: "50px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            github
                        </Button>
                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            graphql
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            gurunanak
                        </Button>
                        <Button variant="contained" sx={{ width: "150px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            gurunanakdevji
                        </Button>
                        <Button variant="contained" sx={{ width: "140px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            gurunanakjanti
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            happybhaidooj
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            HAPPYDHANTERAS
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            HAPPYDIWALI
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            humanrights
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            indiannavy
                        </Button>
                        <Button variant="contained" sx={{ width: "100px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            indiannavy2023
                        </Button>
                        <Button variant="contained" sx={{ width: "80px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            LetestWP
                        </Button>
                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            indiannavy2023
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            WOOCOMERCE
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            LetestWP
                        </Button>
                        <Button variant="contained" sx={{ width: "140px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            Merrychristmas
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: " 5px 3px" }}>
                            nationalnavyday
                        </Button>
                        <Button variant="contained" sx={{ width: "80px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            node js
                        </Button>
                        <Button variant="contained" sx={{ width: "90px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            postman
                        </Button>
                        <Button variant="contained" sx={{ width: "100px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            React
                        </Button>
                        <Button variant="contained" sx={{ width: "100px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            shopify
                        </Button>
                        <Button variant="contained" sx={{ width: "180px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            soham web solution
                        </Button>
                        <Button variant="contained" sx={{ width: "180px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            sohamwebsolution
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            vasntpanchami
                        </Button>
                        <Button variant="contained" sx={{ width: "150px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            vasntpanchami2024
                        </Button>
                        <Button variant="contained" sx={{ width: "180px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            visual studio code
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            vue js
                        </Button>
                        <Button variant="contained" sx={{ width: "170px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            webdevlopment tools
                        </Button><Button variant="contained" sx={{ width: "140px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            WooCommerce
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
                            Wordpress
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            Wordpress6.5
                        </Button>
                        <Button variant="contained" sx={{ width: "160px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            Wordpress features
                        </Button>
                        <Button variant="contained" sx={{ width: "140px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            Wordpressplugins
                        </Button>
                        <Button variant="contained" sx={{ width: "100px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            Wordaidsday
                        </Button>
                        <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            Wordaidsday2023
                        </Button>

                        </div>
     
                    </Box>

                </Box>

                <Box sx={{}}>
                    <Box sx={{ padding: "40px 0px 20px  0px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography sx={{ fontSize: "20px", color: "#FE4C1C", fontWeight: "750" }}>
                            Reacted Post
                        </Typography>

                        <Box sx={{ width: "120px", display: "flex", alignItems: "center", justifyContent: "space-around" }} >
                            <img src={Left} alt="" />
                            <img src={Right} alt="" />
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <Card sx={{ maxWidth: 300, margin: "10px" }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={Card1}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="" sx={{ fontWeight: "800" }} component="div">
                                    Shopify vs WooCommerce: Witch One is Better for  Your onlien Store?
                                </Typography>
                                <Typography sx={{ fontSize: "11px" }} variant="body2" color="text.secondary">
                                    Shopify vs WooCommerce: Witch One is Better for  Your onlien Store?
                                </Typography>

                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Typography sx={{ fontSize: "12px" }}>February 20,2024</Typography>
                                    <Button variant="outlined" sx={{ width: "90px", height: "25px", border: "1px solid #FE4C1C", color: "#FE4C1C" }}>Primary</Button>
                                </Box>


                                <Button size="small" sx={{ backgroundColor: "#FE4C1C", color: "white", marginTop: "5px", padding: "3px 15px", fontSize: "12px" }}>Read More</Button>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 300, margin: "10px" }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={Card2}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="" sx={{ fontWeight: "800" }} component="div">
                                    Shopify vs WooCommerce: Witch One is Better for  Your onlien Store?
                                </Typography>
                                <Typography sx={{ fontSize: "11px" }} variant="body2" color="text.secondary">
                                    Shopify vs WooCommerce: Witch One is Better for  Your onlien Store?
                                </Typography>

                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Typography sx={{ fontSize: "12px" }}>February 20,2024</Typography>
                                    <Button variant="outlined" sx={{ width: "90px", height: "25px", border: "1px solid #FE4C1C", color: "#FE4C1C" }}>Primary</Button>
                                </Box>


                                <Button size="small" sx={{ backgroundColor: "#FE4C1C", color: "white", marginTop: "5px", padding: "3px 15px", fontSize: "12px" }}>Read More</Button>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 300, margin: "10px" }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={Card3}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="" sx={{ fontWeight: "800" }} component="div">
                                    Shopify vs WooCommerce: Witch One is Better for  Your onlien Store?
                                </Typography>
                                <Typography sx={{ fontSize: "11px" }} variant="body2" color="text.secondary">
                                    Shopify vs WooCommerce: Witch One is Better for  Your onlien Store?
                                </Typography>

                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Typography sx={{ fontSize: "12px" }}>February 20,2024</Typography>
                                    <Button variant="outlined" sx={{ width: "90px", height: "25px", border: "1px solid #FE4C1C", color: "#FE4C1C" }}>Primary</Button>
                                </Box>


                                <Button size="small" sx={{ backgroundColor: "#FE4C1C", color: "white", marginTop: "5px", padding: "3px 15px", fontSize: "12px" }}>Read More</Button>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>

            </Container>
            <Footer />
        </>
    )
}
export default Blogmultiplesection


import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material"
import Footer from "../Components/Footer"
import Card1 from "../blogsimg/card1.png"
import Card2 from "../blogsimg/card2.png"
import Card3 from "../blogsimg/card3.png"
import Icon1 from "../blogsimg/icon1.png"
import Icon2 from "../blogsimg/icon2.png"
import Icon3 from "../blogsimg/icon3.png"
import Icon4 from "../blogsimg/icon4.png"
import Icon5 from "../blogsimg/icon5.png"
import Icon6 from "../blogsimg/icon6.png"
import Icon7 from "../blogsimg/icon7.png"
import Left from "../blogsimg/left.png"
import Right from "../blogsimg/right.png"
import Search from "../blogsimg/search.png"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchcontents } from "../features/contents/contentSlice"


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
            <Typography variant="h1"  sx={{color:"gray"}}>
                    Loading..........
            </Typography>
        </Container>
    )
  }

  

    return (
        <>
            <Box sx={{ paddingTop: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100%" }}>
                <Typography variant="h4" sx={{ color: "#0160E7" }}>Blogs</Typography>
                <Box sx={{ display: "flex" }}>
                    <Typography sx={{ marginRight: "15PX", color: "#FE4C1C" }}>HOME</Typography>
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
                    </Box>

                    <Box sx={{ marginTop: "10px", width: "90%" }}>
                        <Button variant="contained" sx={{ width: "95px", height: "28px", fontSize: "10px", margin: "3px" }}>
                            22 Feb 2024
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

                        <Box>
                            <Typography sx={{ padding: "10px 0px", fontSize: "29px", color: "black", fontWeight: "700" }}>
                                {contents.title.rendered}
                            </Typography>

                            <Typography sx={{ width: "75%", fontSize: "15px" }}>
                             {contents.excerpt.rendered} 
                            </Typography>


                            <img className="blogimg2" src="" alt="" />

                            <Box sx={{ width: "80%", background: "pink", padding: "30px 10px 30px 0px", color: "gray" }}>
                                <Typography sx={{ fontSize: "15px" }}>Are you a Shopify store owner looking to boost your online
                                    visibility and drive looking to boost your online </Typography>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                                <Box> <img className="blogimg3" src="" alt="" /></Box>

                                <Box sx={{ width: "45%", padding: "4px", fontSize: "13px", color: "gray" }}>Are you a Shopify store owner looking to boost your online visibility and drive  your online visibility and drive
                                    more traffic to your website? Look no further! In this ultimate guide to Shopify SEO, more traffic to your website? Look no further! In this ultimate guide to Shopify SEO,
                                </Box>


                            </Box>
                        </Box>

                        <Box>
                            <ul>
                                <li> the majority have   suffered</li>
                                <li> the ipsun available</li>
                                <li>alteration some form</li>
                            </ul>

                            <Box>
                                <Typography sx={{ padding: "10px 0px", width: "80%", color: "gray", fontSize: "14px" }}>
                                    Are you a Shopify store owner looking to boost your online visibility and drive
                                    more traffic to your website? Look no further! In this ultimate guide to Shopify SEO,...Are
                                    you a Shopify store owner looking to boost your online visibility
                                </Typography>

                                <Typography sx={{ padding: "10px 0px", fontSize: "28px", color: "black" }}> Simply dummt text of the printing</Typography>

                                <Typography sx={{ padding: "10px 0px", width: "80%", color: "gray", fontSize: "14px" }}>
                                    Are you a Shopify store owner looking to boost your online visibility and drive
                                    more traffic to your website? Look no further! In this ultimate guide to Shopify SEO,...Are
                                    you a Shopify store owner looking to boost your online visibility
                                </Typography>

                                <Box sx={{ padding: "10px 5px", display: "flex ", alignItems: "center", justifyContent: "space-between" }}>
                                    <Typography sx={{ color: "gray", fontSize: "15px" }}>Tag fashion health</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px" }}>Tag fashion health</Typography>
                                </Box>
                                <Box sx={{ padding: "10px 5px", display: "flex ", alignItems: "center", justifyContent: "space-between" }}>
                                    <Typography sx={{ color: "gray", fontSize: "15px" }}>prev post</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px" }}>Next </Typography>
                                </Box>
                                <Box sx={{ padding: "10px 5px", display: "flex ", alignItems: "center", justifyContent: "space-between" }}>
                                    <Typography sx={{ fontSize: "15px" }}>How to increase Business Through SEM</Typography>
                                    <Typography sx={{ fontSize: "15px" }} >How to increase Business Through SEM</Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap   " }}>
                                    <img className="blogimg4" src="" alt="" />
                                    <img className="blogimg5" src="" alt="" />

                                </Box>

                                <Box>   <Button variant="contained" sx={{ width: "95px", height: "28px", fontSize: "10px", margin: "3px" }}>
                                    22 Feb 2024

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

                                    <Button variant="contained" sx={{ width: "120px", height: "28px", fontSize: "10px", margin: "3px" }}>
                                        WORDPRESSPLUGINS
                                    </Button>
                                </Box>



                                <Box sx={{ marginTop: "20px", width: "300px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <img src={Icon1} alt="" />
                                    <img src={Icon2} alt="" />
                                    <img src={Icon3} alt="" />
                                    <img src={Icon4} alt="" />
                                    <img src={Icon5} alt="" />
                                    <img src={Icon6} alt="" />
                                    <img src={Icon7} alt="" />
                                </Box>




                            </Box>
                        </Box>


                    </Box>
                </Box>




                <Box className="blog-button-section" sx={{ width: "330px", height: "100%", padding: "30px 20px" }}>
                    <Box sx={{ width: "230px", display: "flex", alignItems: "center", margin: "10px 0px" }}>
                        <input className="search-input" placeholder="search " />
                        <img className="search-img" src={Search} alt="" />
                    </Box>

                    <Box sx={{ width: "100%" }}>
                        <Typography sx={{ fontSize: "18px", color: "black", fontWeight: "700" }}>Categories</Typography>
                        <ul className="listItem" >
                            <li >Fastival</li>
                            <li >On this day</li>
                            <li >Shopify</li>
                            <li >Web Development</li>
                            <li >Web Development Tool</li>
                            <li >WooCommerce</li>
                            <li >Wordpress</li>
                            <li >Wordpress Plugins</li>
                        </ul>
                    </Box>

                    <Box>
                        <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "700" }}>RECENTS POSTS</Typography>


                        <Box sx={{ display: "flex", alignItems: "center", margin: "20px 0px" }}>
                            <img className="blogimg51" src="" alt="" />
                            <Box sx={{ margin: "10px" }}>
                                <Typography sx={{ fontSize: "13px", color: "black" }}>Shofify vs WooCommerce Which One is Better for Your onlien Store</Typography>
                                <Typography sx={{ fontSize: "13px", color: "gray" }}> Febuary 11,2023</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", margin: "20px 0px" }}>
                            <img className="blogimg51" src="" alt="" />
                            <Box sx={{ margin: "10px" }}>
                                <Typography sx={{ fontSize: "13px", color: "black" }}>Shofify vs WooCommerce Which One is Better for Your onlien Store</Typography>
                                <Typography sx={{ fontSize: "13px", color: "gray" }}> Febuary 11,2023</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", margin: "20px 0px" }}>
                            <img className="blogimg53" src="" alt="" />
                            <Box sx={{ margin: "10px" }}>
                                <Typography sx={{ fontSize: "13px", color: "black" }}>Shofify vs WooCommerce Which One is Better for Your onlien Store</Typography>
                                <Typography sx={{ fontSize: "13px", color: "gray" }}> Febuary 11,2023</Typography>
                            </Box>
                        </Box>

                        <Box >
                            <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "700" }}>Archives</Typography>
                            <ul className="listItem">
                                <li>February 2024</li>
                                <li>December 2023</li>
                                <li>November 2023</li>
                            </ul>
                        </Box>


                    </Box>

                    <Box >
                        <Typography sx={{
                            fontSize: "16px", color: "black", fontWeight: "700"
                            , padding: "20px 0px"
                        }}>Tegs</Typography>
                        <Button variant="contained" sx={{ width: "130px", height: "28px", fontSize: "10px", margin: "5px 3px" }}>
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


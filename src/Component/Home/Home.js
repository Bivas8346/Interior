
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OneKkIcon from '@mui/icons-material/OneKk';
import CalculateIcon from '@mui/icons-material/Calculate';
import './Home.css'
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';



const Home = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            {/* Carousel */}
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="../../../../Assats/Store/carousel1.jpg" height="100%"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='hcarh'>A home so Good, You'ill love the way you liv</h3>
                        <button className='hcarb'>Consult Our Designer</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="../../../../Assats/Store/carousel4.jpg" height="100%"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='hcarh'>Introducing new Design of Living Room</h3>
                        <button className='hcarb'>Consult Our Designer</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="../../../../Assats/Store/carousel5.jpg" height="100%"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='hcarh'>Best office model Interior</h3>
                        <button className='hcarb'>Consult Our Designer</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="../../../../Assats/Store/carousel6.jpg" height="100%"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='hcarh'>Moduler kitchen designe</h3>
                        <button className='hcarb'>Consult Our Designer</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="../../../../Assats/Store/carousel7.jpg" height="100%"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='hcarh'>One of the best choise for your bed Room</h3>
                        <button className='hcarb'>Consult Our Designer</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* First home Interior part */}

            <Container className='hcard1'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                            <Link to={"/Room"} className='hcardlink'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="../../../../Assats/home1/card5.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Scandinavian Interior Design.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                This is a minimalistic style using a blend of textures and soft hues to make sleek, modern décor feel warm and inviting.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Link to={"/Room"} className='hcardlink'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="../../../../Assats/home1/card6.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Modern New Coloured Interior Design.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                This is an interior design style characterized by a monochromatic color palette, clean lines, minimalism, natural materials, and natural light.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Link to={"/Room"} className='hcardlink'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="../../../../Assats/home1/card7.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Contemporary Interior Design.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                This style embraces minimalistic elements highlighting grays, beiges and shades of white. Sleek, thoughtful .
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Link to={"/Room"} className='hcardlink'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="../../../../Assats/home1/card8.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Art Moderne Interior Design.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                This design was loosely inspired by a combination of Art Deco motifs and Minimalist themes.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Link to={"/Room"} className='hcardlink'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="../../../../Assats/home1/card9.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Mid-Century Interior Design.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Elements of mid-century modern interior design include clean lines, muted tones, a combination of natural....
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Link to={"/Room"} className='hcardlink'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="../../../../Assats/home1/card10.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Eclectic Interior Design.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                This design is about bringing together disparate patterns, textures, colors, sizes and proportions on one platform.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container >

            {/* Second home Interiior part */}

            < Container className='hcard2' >
                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: 750 }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                We produce a range of work covering brand identity,art direction,
                                product design,interior design,custom furniture and febrication.
                                Explore our work through one of our case studies and explore our
                                website.
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Our desiginer  here to help you
                            </Typography>
                        </CardContent>
                    </Box>
                    <CardMedia
                        component="video"
                        sx={{ width: 751 }}
                        video src='../../../../Assats/home1/video1.mp4' width="751" height="300" controls="controls" autoplay="false"
                        alt="Live from space album cover"
                    />
                </Card>
            </Container >
            <div>
                <div className="blog-card">
                    <div className="meta">
                        <div className="photo"><img src='../../../../Assats/Store/carousel2.jpg' height={250} width={400} /></div>
                        <ul className="details">
                            <li className="author"><a href="#">Best Moduler Design</a></li>
                            <li className="tags">
                                <ul>
                                    <li><Link to={"Room"}>Living Room</Link></li>
                                    <li><Link to={"Room"}>kitchen</Link></li>
                                    <li><Link>Tarrese</Link></li>
                                    <li><Link to={"/blog"}>Blogs</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="description">
                        <h1>Modulier Interiors</h1>
                        <h2>Trendy comes right before tacky.</h2>
                        <p>Modern design is an interior design style characterized by a monochromatic color palette, clean lines, minimalism, natural materials, and natural light. It refers specifically to a historical aesthetic movement that took place during the early to mid-twentieth century.</p>
                        <p className="read-more">
                            <Link to={"/Room"} >Read More</Link>
                        </p>
                    </div>
                </div>
                <div className="blog-card alt">
                    <div className="meta">
                        <div className="photo"><img src='../../../../Assats/Store/carousel3.jpg' height={250} width={400} alt='photo' /></div>
                        <ul className="details">
                            <li className="author"><a href="#">Choose Design</a></li>
                            <li className="tags">
                                <ul>
                                    <li><Link to={"/Room"}>Bed Room</Link></li>
                                    <li><a href="#">Side Wall</a></li>
                                    <li><Link to={"/blog"}>Blogs</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="description">
                        <h1>Full Home Interiors</h1>
                        <h2>“Good design doesn’t date.”</h2>
                        <p>Full home interior design involves an interior designer or design team managing your entire project, from initial concept to installation to magazine-worthy finishing touches.</p>
                        <p className="read-more">
                            <Link to={"Room"} >Read More</Link>
                        </p>
                    </div>
                </div>
            </div>
            {/* thard home interior part */}
            <div>
                <Container className='hcard3'>
                    <p className='hcard3p'>Why to Choose US?</p>
                    <Row>
                        <Col xs={6} md={3}>
                            <EventRepeatIcon />
                            <p>16day Replacemant Guarantee</p>
                        </Col>
                        <Col xs={6} md={3}>
                            <FactCheckIcon />
                            <p>450 Quality Check</p>
                        </Col>
                        <Col xs={6} md={3}>
                            <OneKkIcon />
                            <p>10k+ Offline Store</p>
                        </Col>
                        <Col xs={6} md={3}>
                            <CalculateIcon />
                            <p>Easy EMI plan</p>
                        </Col>
                    </Row>
                </Container>
                <div className="hero-section">
                    <div className="home-grid">
                        <Link to={"/Store"} className="hcard" >
                            <div className="hcard__background"><img src='../../../../Assats/home1/card2.jpg' height={420} width={280} alt='photo' /></div>
                            <div className="hcard__content">
                                <p className="hcard__category">New designe product</p>
                                <h3 className="hcard__heading">For Every Room</h3>
                            </div>
                        </Link>
                        <Link to={"/Store"} className="hcard" >
                            <div className="hcard__background"><img src='../../../../Assats/home1/card3.jpg' height={420} width={280} alt='photo' /></div>
                            <div className="hcard__content">
                                <p className="hcard__category">New designe product</p>
                                <h3 className="hcard__heading">For Every Room</h3>
                            </div>
                        </Link>
                        <Link to={"/Store"} className="hcard" >
                            <div className="hcard__background"><img src='../../../../Assats/home1/hover.jpg' height={420} width={280} alt='photo' /></div>
                            <div className="hcard__content">
                                <p className="hcard__category">New designe product</p>
                                <h3 className="hcard__heading">For Every Room</h3>
                            </div>
                        </Link>
                        <Link to={"/Store"} className="hcard">
                            <div className="hcard__background"><img src='../../../../Assats/home1/card4.jpg' height={420} width={280} alt='photo' /></div>
                            <div className="hcard__content">
                                <p className="hcard__category">New designe product</p>
                                <h3 className="hcard__heading">For Every Room</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* fourth home interior part */}
            <Container className='hcard5'>
                <p className='hcard3p'>Interior promise</p>
                <Row>
                    <Col xs={12} md={4}>
                        <div className='hcard5d'>
                            <img src='../../../../Assats/Footer/designer.png.webp' alt='Designer' />
                            <h6> Expart Interior Designer</h6>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='hcard5d'>
                            <img src='../../../../Assats/Footer/booking.png.webp' alt='Designer' />
                            <h6>Free delivery And Installation</h6>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='hcard5d'>
                            <img src='../../../../Assats/Footer/location.png.webp' alt='Designer' />
                            <h6>Large Store Net-Work</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
                <Container className='hcard6'>
                    <p className='hcard3p'>FAQ:</p>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography> Why do I need an Interior Designer ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                An interior designer provides you with a specialized professional assessment of your
                                home's current state, allowing you to build a well-researched plan of action. They
                                decide the order of events in your home renovation or makeover, and they know what
                                should be repaired or what can be re-purposed.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>What services are included under home interior design ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Full-service design basically means that the interior design studio manages
                                the bulk of the work involved in a renovation or decoration project on behalf of
                                their client.

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>How much does home interiors cost ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You will need to budget INR 20,000 – 50,000 approximately for a living room with basic
                                interiors and furniture. And for a premium one it can range between INR
                                75,000 – 1,00,000 Lakh.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>What will be the timelines for project completion ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                A research proposal timeline is a plan that shows how you will conduct your
                                research project, from the initial idea to the final report. It helps you
                                organize your tasks, set deadlines, and track your progress. A realistic and
                                flexible timeline can also help you avoid stress, delays, and scope creep.

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography> What are the trending interior design styles ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Transitional design will continue to be popular for homeowners in 2022," says
                                interior designer Maggie Stephens. "Expect to see traditional elements mixed with
                                clean lines and contemporary upholstery. Light color schemes, neutrals, and natural
                                wood tones feature strongly in this style.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>What if you present something client don't like ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Listen carefully to the complaint. This helps you understand the problem better.
                                Their wants and needs first must be uncovered and defined to see if the features and
                                benefits of your company's product or services can satisfy those wants and needs.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Container>
                {/* fifth home interior part */}
                <div className='hcard7'>
                    <img src='../../../../Assats/home1/ff.jpg' alt='photo' width={1500} />
                    <p className='hcardlp'>Make Your Dream Home As You Like</p>
                    <Link to={"/Contact"}> <button className='hcardlpb'>JOURNEY WITH US</button> </Link>
                </div>
            </div>

        </>
    )
}

export default Home
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const About = () => {


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>

            <img src='../Assats/home1/card7.jpg' alt='img' width={500} height={400}/>
            <img src='../Assats/home1/about.jpg' alt='img' width={500} height={400}/>
            <img src='../Assats/home1/card5.jpg' alt='img' width={500} height={400}/>
            <Container>
                <h1>How it started !</h1>
                <p>
                    Our core team of design professionals and associates believes in the ethic of 'aesthetic' that work.
                    Thus,they ensure that our inovative design solutions meet the heighest standards in term of contemporary
                    looks and functionlity, we offers customers a distinctive advantage over competitors by incorporating
                    the latest developments in home furnishing.
                    For our customers,this offer value in terms of designe,color and contemporary trends.
                    Product differentiation is also assured throughed our customers design services.
                    Each design is patented and offered in a variety of unconventional color combinations,which
                    are finalised after extensive sampling.

                </p>
            </Container>


            <Container>
                <h1>We'll let our clients do the talking</h1>
                <Row className='rdr'>
                    <Col>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        M
                                    </Avatar>
                                }
                                title="Rounak & Mimli | 4BHK,kolkata"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="../../../../Assats/Store/client2.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Hats off to the entire team.They finished the project ahead of time.
                                    They said 45 days bt finished it much earlier.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                        aside for 10 minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                        stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Col>
                    <Col>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        T
                                    </Avatar>
                                }
                                title="Mainak Sen | 2BHK,Gurugram"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="../../../../Assats/Store/client1.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This house is part of me.We reached out to them and they designed the
                                    house that we really wanted.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                        aside for 10 minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                        stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Col>
                    <Col>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        B
                                    </Avatar>
                                }
                                title="Swati & Gourav | 2BHK,Bangalore"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="../../../../Assats/Store/client3.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Our experience was very nice thanks to the project managers.
                                    They worked so muchon this project,and finished iton time.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                        aside for 10 minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                        stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className='hcard5'>
                <p className='hcard3p'>Interior promise</p>
                <Row>
                    <Col xs={12} md={4}>
                        <div className='hcard5d'>
                            <img src='../../../../Assats/Footer/designers.png' alt='Designer' />
                            <h6>35k Interiors Assistance</h6>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='hcard5d'>
                            <img src='../../../../Assats/Footer/customers.webp' alt='Designer' />
                            <h6>1Lack+ Happy Customers</h6>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='hcard5d'>
                            <img src='../../../../Assats/Footer/2countries.webp' alt='Designer' />
                            <h6>2 Years of Mile Stone</h6>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default About
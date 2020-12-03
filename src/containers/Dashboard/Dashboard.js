import React, { Fragment, useState } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { useMediaQuery, Avatar } from "@material-ui/core";
import { GridList, GridListTile } from "@material-ui/core";
import { Grid, Button, Box, Typography, Paper } from "@material-ui/core";

import { BrightnessHigh, TrendingUp, School } from "@material-ui/icons";

import Carousel from "react-material-ui-carousel";
import Image from "material-ui-image";
import CountUp from "react-countup";

import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

import CourseList from "../../components/CourseList/CourseList";

import heroImage from "../../assets/images/home-hero.jpg";

import course1 from "../../assets/images/episodes/1.png";
import course2 from "../../assets/images/episodes/2.png";
import course3 from "../../assets/images/episodes/3.png";
import course4 from "../../assets/images/episodes/4.png";
import course5 from "../../assets/images/episodes/5.png";
import course6 from "../../assets/images/episodes/6.png";

import tileimage1 from "../../assets/images/blog/img-1.jpg";
import tileimage2 from "../../assets/images/blog/img-2.jpg";
import tileimage3 from "../../assets/images/blog/img-3.jpg";
import tileimage4 from "../../assets/images/blog/img-4.jpg";
import tileimage5 from "../../assets/images/blog/img-5.jpg";

const useStyles = makeStyles((theme) => ({
  heroText: {
    position: "absolute",
    margin: "0 10% 0 10%",
    color: "white",
  },
  header: {
    height: "60vh",
    backgroundSize: "cover",
    backgroundPosition: "100% 100%",
    backgroundAttachment: "fixed",
    backgroundImage: `url(${heroImage})`,
  },
  avatar: {
    backgroundColor: "#479689",
    margin: "0 10%",
  },
  feature: {
    color: "black",
    minHeight: "10vh",
    position: "relative",
  },
  intro: {
    position: "relative",
    background:
      "linear-gradient(86deg, rgba(0,0,0,1) 21%, rgba(41,128,185,1) 75%)",
    animation: `3s ease 0s infinite normal none running Gradient`,
    color: "white",
  },

  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "wrap",
    transform: "translateZ(0)",
  },
  titleNumber: {
    lineHeight: "85%",
    "@media (max-width: 1274px)": {
      lineHeight: "100%",
    },
    "@media (max-width: 600px)": {
      fontSize: "4rem",
    },
  },
}));

const slideItems = [
  {
    media: course1,
    title: "This is a very cool feature",
    subtitle: "Just using this will blow your mind.",
  },
  {
    media: course2,
    title: "Ever wanted to be popular?",
    subtitle: "Well just mix two colors and your are good to go!",
  },
  {
    media: course3,
    title: "May the force be with you",
    subtitle:
      "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.",
  },
  {
    media: course4,
    title: "May the force be with you",
    subtitle:
      "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.",
  },
  {
    media: course5,
    title: "May the force be with you",
    subtitle:
      "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.",
  },
  {
    media: course6,
    title: "May the force be with you",
    subtitle:
      "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.",
  },
];

const tileData = [
  {
    img: tileimage1,
    cols: 1,
  },
  {
    img: tileimage2,
    cols: 1,
  },
  {
    img: tileimage3,
    cols: 1,
  },
  {
    img: tileimage4,
    cols: 1,
  },
  {
    img: tileimage5,
    cols: 2,
  },
];

const featureList = [
  {
    icon: <School />,
    title: "+",
    subtitle: "Udacity graduations and counting",
    count: <CountUp end={1000} duration={2} style={{ marginRight: 4 }} />,
  },
  {
    icon: <BrightnessHigh />,
    title: "+",
    subtitle: "Industry experts partnering to build our content",
    count: <CountUp end={200} duration={2} style={{ marginRight: 4 }} />,
  },
  {
    icon: <TrendingUp />,
    title: "+",
    subtitle: "Enterprise customers world-wide",
    count: <CountUp end={100} duration={3} style={{ marginRight: 4 }} />,
  },
];

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
  return (
    <div>
      <AutoRotatingCarousel
        label="Get started"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        hideArrows={false}
        mobile={isMobile}
      >
        {slideItems.map((item) => (
          <Slide
            key={item.title}
            media={<img src={item.media} alt={item.title} />}
            title={item.title}
            subtitle={item.subtitle}
            mediaBackgroundStyle={{
              background: "black",
            }}
            style={{
              background: "black",
            }}
          />
        ))}
      </AutoRotatingCarousel>
    </div>
  );
};

function Dashboard({ darkTheme }) {
  const classes = useStyles();
  const matchSM = useMediaQuery("(min-width:600px)");
  const matchMD = useMediaQuery("(min-width:1000px)");
  const matchLG = useMediaQuery("(min-width:1400px)");
  const user = JSON.parse(localStorage.getItem("user"));
  const localTheme = JSON.parse(localStorage.getItem("darkTheme"));
  const [handleOpen, setHandleOpen] = useState({ open: false });

  let isTheme = darkTheme;
  if (!darkTheme) {
    isTheme = localTheme;
  }

  const handleClick = () => {
    setHandleOpen({ open: true });
  };

  return (
    <Fragment>
      <Grid container alignItems="center" className={classes.header}>
        <Grid item className={classes.heroText}>
          <Typography variant="h4" gutterBottom>
            Bootcamp Quality at 1/10 of the Cost
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Udacity is the world’s fastest, most efficient way to master the
            skills tech companies want. 100% online, part-time & self-paced.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleClick}>
            LEARN MORE
          </Button>
          <Typography variant="subtitle1" gutterBottom>
            Industry leading programs built and recognized by top companies
            worldwide
          </Typography>
          <AutoRotatingCarouselModal
            isMobile={matchSM}
            handleOpen={handleOpen}
            setHandleOpen={setHandleOpen}
          />
        </Grid>
      </Grid>

      <Box my={5} style={{ minHeight: 520 }}>
        <Box mx={6} py={3} textAlign ="center">
          <Typography variant="h4" gutterBottom>
            <strong>Explore our schools to find your perfect program</strong>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Choose from 1000 online video courses with new additions published
            every decade
          </Typography>
        </Box>
        <CourseList />
      </Box>

      <Box className={classes.intro}>
        <Box
          display="flex"
          flexDirection="column"
          flexWrap="nowrap"
          pt={matchLG ? 20 : matchMD ? 15 : 10}
          pb={5}
        >
          <Box alignSelf="flex-start" maxWidth={500} m={5}>
            <Box display="flex">
              <Typography variant="h1" className={classes.titleNumber}>
                1
              </Typography>
              <Box ml={1} display="flex" flexDirection="column">
                <Typography variant="h4">
                  Easy to search the topic you want to learn or teaching
                </Typography>
                <Typography style={{ marginTop: 16 }}>
                  UDacity is collect on many resourses. People who study at
                  the  UDacity  can archive knowledge by join suitable topic.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box alignSelf="flex-end" maxWidth={500} m={5}>
            <Box display="flex">
              <Typography variant="h1" className={classes.titleNumber}>
                2
              </Typography>
              <Box ml={1} display="flex" flexDirection="column">
                <Typography variant="h4">
                  Join us to help share knowledge for the community
                </Typography>
                <Typography style={{ marginTop: 16 }}>
                  We have an enthusiastic and responsible team of teachers from
                  many companies and corporations with many years of experience.
                  Join us to grow together.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box alignSelf="flex-start" maxWidth={500} m={5}>
            <Box display="flex">
              <Typography variant="h1" className={classes.titleNumber}>
                3
              </Typography>
              <Box ml={1} display="flex" flexDirection="column">
                <Typography variant="h4">
                  FullStack users easy to achieve the desired skills
                </Typography>
                <Typography style={{ marginTop: 16 }}>
                  FullStack system is meticulously built to enhance the
                  interaction between students and teachers. It provides an
                  authentic and easy experience to gain knowledge as well as
                  help teachers easily access students
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box pb={7} className={classes.feature}>
        <Box mx={4} py={3}
          textAlign ="center"
          minHeight="10vh">
          <Typography variant="h4" gutterBottom>
            <strong>Strength in numbers</strong>
          </Typography>
        </Box>
        <Grid container justify="space-between" alignItems="center">
          {featureList.map((item) => (
            <Box m={2} display="flex" alignItems="center" key={item.title}>
              <Avatar className={classes.avatar}>{item.icon}</Avatar>
              <Box ml={1} display="flex" flexDirection="column">
                <Box display="flex" alignItems="center">
                  {item.count ? item.count : null}
                  <Typography variant="subtitle1">{item.title}</Typography>
                </Box>
                <Typography variant="caption">{item.subtitle}</Typography>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
      <Box className={classes.intro}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          minHeight="40vh"
        >
          <Box mx={5} minWidth={315} alignSelf="center">
            <Box>
              <Typography variant="h4" color="inherit">
                Don't waste your valuable time or money
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography>
                Only Udacity has all the critical factors to deliver real
                results
              </Typography>
            </Box>
            {user ? null : (
              <Box mt={3} alignSelf="center">
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={"/sign-up"}
                  style={{ width: 150 }}
                >
                  Đăng ký
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  to={"/sign-in"}
                  style={{ width: 150, marginLeft: 8, color: "inherit" }}
                >
                  Đăng nhập
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <Box my={5} display="flex" alignContent="center" justifyContent="center">
        <Box width="100vh">
          <Carousel
            animation={"slide"}
            timeout={500}
            indicators={false}
            className={classes.carousel}
          >
            {slideItems.map((item) => (
              <Paper key={item.title}>
                <Image src={item.media} aspectRatio={16 / 9} />
              </Paper>
            ))}
          </Carousel>
        </Box>
      </Box>

      <Box my={5} display="flex" alignContent="center" justifyContent="center">
        <Box width="100vh">
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </Box>
      </Box>

      <Box className={classes.intro}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          minHeight="30vh"
        >
          <Box mx={5} mt={5} minWidth={315} alignSelf="center">
            <Box>
              <Typography variant="h4" color="inherit">
                A bunch of topics are waiting you
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography>What are you waiting for? join us now!</Typography>
            </Box>
            {user ? null : (
              <Box mt={2}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  component={Link}
                  to={"/sign-up"}
                  style={{ width: 150 }}
                  justifyContent="center"
                >
                  Đăng ký
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    darkTheme: state.ui.darkTheme,
  };
};

export default connect(mapStateToProps)(Dashboard);

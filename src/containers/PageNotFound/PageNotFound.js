import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Box, CssBaseline, Typography } from "@material-ui/core";

import image404 from "../../assets/images/pageNotFound/image404.svg";


import moon from "../../assets/images/pageNotFound/moon.svg";
import astronaut from "../../assets/images/pageNotFound/astronaut.svg";
import overlay_stars from "../../assets/images/pageNotFound/overlay_stars.svg";
// import bg_purple from "../../assets/images/pageNotFound/bg_purple.png";

const useStyles = makeStyles((theme) => ({
  logo:{

  },

  bg: {
    backgroundColor: "000000",
    backgroundRepeat: "repeat-x",
    backgroundSize: "cover",
    backgroundPosition: "left top",
    height: "100vh",
    overflow: "hidden",
  },
  centralBody: {
    padding: "17% 5% 10% 5%",
    textAlign: "center",
  },

  image404: {
    position: "relative",
    zIndex: 100,
    pointerEvents: "none",
  },

  btnGoHome: {
    position: "relative",
    zIndex: 200,
    margin: "15px auto",
    width: 170,
    padding: "10px 15px",
    border: "1px solid #FFCB39",
    borderRadius: 100,
    fontWeight: 400,
    display: "block",
    color: "black",
    textAlign: "center",
    textDecoration: "none",
    letterSpacing: 2,
    fontSize: 11,
    transition: "all 0.3s ease-in",

    "&:hover": {
      backgroundColor: "#FFCB39",
      color: "#fff",
      transform: "scale(1.05)",
      boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.1)",
    },
  },

  "objects img": {
    zIndex: 90,
    pointerEvents: "none",
  },


  objectAstronaut: {
    animation: `$rotateAstronaut 200s infinite linear both alternate`,
  },



  "@media only screen and (max-width: 600px)": {
    boxAstronaut: {
      top: "70%",
    },

    centralBody: {
      paddingTop: "25%",
    },
  },
}));

const PageNotFound = ({ history }) => {
  const styles = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user && user.maLoaiNguoiDung === "Admin";
  const [isAdminRouter, setIsAdminRouter] = useState(null);
  const pathName = history.location.pathname;

  if (!isAdminRouter) {
    if (pathName === "/courses-management") {
      setIsAdminRouter(true);
    } else if (pathName === "/users-management") {
      setIsAdminRouter(true);
    }
  }

  if (isAdminRouter && isAdmin) {
    window.location.reload();
  }

  return (
    <Box className={styles.bgPurple}>
      <CssBaseline />
      {isAdminRouter && isAdmin ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={"100vh"}
        >
          <Typography variant="h5" style={{ color: "black" }}>
            Granting permission to admin...
          </Typography>
        </Box>
      ) : (
        <Box className={styles.notFound}>
          <Box className={styles.centralBody}>
            <img
              className={styles.image404}
              src={image404}
              alt="image404"
              width="300px"
            />
            <Typography>404
            Sorry, we can't seem to find
            the page you are looking for.</Typography>
            <Link to="/" className={styles.btnGoHome}>
              <Typography>UDACITY HOME</Typography>
            </Link>

          </Box>
         
        </Box>
      )}
    </Box>
  );
};

export default withRouter(PageNotFound);

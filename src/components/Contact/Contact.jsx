import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
import styles from "./Contact.module.css";
import { SocialIcon } from "react-social-icons";

// destructured the data which coming as props
const Contact = () => {
  // three diffrenet cards showing the current data
  return (
    <div className={styles.container2}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent className={styles.content}>
            {" "}
            <Typography variant="h5" component="h2" className={styles.name}>
              {" "}
              Mark Magdy{" "}
            </Typography>
            <Typography color="textSecondary"> Software Developer </Typography>
            <Typography variant="body2" component="p">
              <br></br>
            </Typography>
            <span>
              {" "}
              <SocialIcon
                className={styles.SocialIcon}
                url="https://github.com/MarkMagdyAziz"
                target="_blank"
              />
            </span>
            <span>
              {" "}
              <SocialIcon
                className={styles.SocialIcon}
                url="https://www.linkedin.com/in/mark-magdy-a6475116a/"
                target="_blank"
              />
            </span>
            <span>
            {" "}
              <SocialIcon
                className={styles.SocialIcon}
                url="https://twitter.com/Mark37731505"
                target="_blank"
                bgColor="#ff5a01"
              />
            </span>
            <span>
              {" "}
              <SocialIcon
                className={styles.SocialIcon}
                url="https://www.facebook.com/1MarkMagdy"
                target="_blank"
              />
            </span>
          </CardContent>
        </Grid>
         </Grid>
    </div>
  );
};
export default Contact;

import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const About = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ mt: 4, mb: 2 }}>
          About
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <b>
            Successful chef who went to university and culinary school at the
            same time.<br></br> Now I have a passion for web development and I
            want to show you what I can do. Get a job as well and make a career
            out of it.
          </b>
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1598712584766-7056fc260118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1155&q=80"
                alt="Life before IT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Life before IT
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Worked in a few high end restaurants in Croatia and Michelin
                  starred restaurants in France. I am always eager to learn and
                  hardworking by nature, which undoubtedly facilitates the work
                  with me. In a very brief time, managed to climb the ladder
                  from a line cook to a chef of some posts, having to organize
                  and control small-scale teams.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Pre Web Dev era"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pre Web Development era - Telecommunications
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  In 2020 landed a job as Certified Solution delivery consultant
                  working for an US telecommunications company called 8x8 as a
                  contractor. There I established 8x8 SaaS and CCaaS CloudBased
                  PBX system configurations and the integrations with Salesforce
                  and MS teams.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ width: 942 }}>
              <CardMedia
                component="img"
                height="160"
                image="https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1127&q=80"
                alt="Web Development"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  What I do now - Web Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  In the past year, I've honed my coding skills, collaborating
                  with fellow programmers while also independently developing
                  various applications. Learning and getting a foundation in
                  JavaScript, React, and associated libraries, I've also
                  acquired hands-on experience in Docker, Firebase, and
                  ExpressJS. Let's be honest, I am trying to learn and land a
                  job as a fronted developer.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;

// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { Mail, Telegram } from "@mui/icons-material";
import { ImageList, ImageListItem, Link } from "@mui/material";
import {
  // Clojure,
  // Go,
  // Deno,
  // Redis,
  // Rust,
  // Scala,
  ClojureFull,
  GoFull,
  HaskellFull,
  PythonFull,
  RustFull,
  ScalaFull,
  TS,
  ReactJs,
  Node,
} from "./logo";

const members = [
  {
    name: "Alex Milkov",
    bg: "Алекcандър Милков",
    job: "Founder",
    image: "alex1.jpg",
    skills: [
      [<GoFull />, 0.5, "3yrs"],
      [<RustFull />, 0.2, "4yrs"],
      [<TS />, 0.5, "3yrs"],
      [<PythonFull />, 0.25, "4yrs"],
      [<ScalaFull />, 0.75, "3yrs"],
      [<HaskellFull />, 0.8, "2yrs"],
      [<ClojureFull />, 0.6, "1yr"],
    ],
    technologies: [
      [<GoFull />, 0.5, "3yrs"],
      [<RustFull />, 0.2, "3yrs"],
      [<TS />, 0.5, "3yrs"],
      [<PythonFull />, 0.25, "4yrs"],
      [<ScalaFull />, 0.75, "3yrs"],
      [<HaskellFull />, 0.8, "2yrs"],
      [<ClojureFull />, 0.6, "1yr"],
    ],
    socials: [
      {
        name: "Telegram",
        icon: (
          <Link href={"https://t.me/amilkov3"} target={"_blank"}>
            <Telegram />
          </Link>
        ),
      },
      {
        name: "Mail",
        icon: (
          <Link href={"mailto:alex@ibex.trade"} target={"_blank"}>
            <Mail />
          </Link>
        ),
      },
      {
        name: "Resume",
        icon: (
          <Link
            href={"https://milkov.tech/resume/resume.pdf"}
            target={"_blank"}
          >
            <Typography variant={"caption"}>Resume</Typography>
          </Link>
        ),
      },
    ],
  },
  {
    name: "Hristo Dimitrov",
    bg: "Христо Димитров",
    job: "Engineer",
    image: "hristo.png",
    skills: [
      [<Node />, 0.15, "9yrs"],
      [<ReactJs />, 0.25, "8yrs"],
      [<TS />, 0.5, "5yrs"],
      [<PythonFull />, 0.25, "4yrs"],
      [<RustFull />, 0.2, "1yrs"],
    ],
    socials: [
      {
        name: "Telegram",
        icon: (
          <Link href={"https://t.me/hristod"} target={"_blank"}>
            <Telegram />
          </Link>
        ),
      },
      {
        name: "Mail",
        icon: (
          <Link href={"mailto:hristo@ibex.trade"} target={"_blank"}>
            <Mail />
          </Link>
        ),
      },
      // {
      //   name: "Resume",
      //   icon: (
      //     <Link
      //       href={"https://milkov.tech/resume/resume.pdf"}
      //       target={"_blank"}
      //     >
      //       <Typography variant={"caption"}>Resume</Typography>
      //     </Link>
      //   ),
      // },
    ],
  },
];

export default function TeamCards() {
  return (
    <Box
      component="section"
      /*sx={{
                bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "background.default" : "grey.50",
            }}*/
    >
      <Container sx={{ py: 10 }} maxWidth="lg">
        <Grid container spacing={3}>
          {members.map((member, index) => (
            <Grid item key={index} xs={12} sm={6}>
              <Card variant="outlined">
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt={member.name}
                    src={member.image}
                    sx={{ width: 80, height: 90, mb: 2 }}
                  />
                  <Typography variant="h6" component="div">
                    {member.name}
                  </Typography>
                  {/* <Typography variant="caption" component="div">
                                        {member.bg}
                                    </Typography> */}
                  <Typography color="text.secondary" variant="body2">
                    {member.job}
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Stack direction="column">
                      {/*<ImageList sx={{width: 100 , height: member.skills.length * 80, paddingTop: 1}} cols={1}>
                                                {member.skills.map(([x, sc, str], i) =>
                                                    <ImageListItem key={i}>
                                                        {
                                                            // @ts-ignore
                                                        React.cloneElement(x, {
                                                        //transform: `scale(${sc})`,
                                                        width: 100,
                                                        height: 50,
                                                        //viewBox: '0 0 80 40'
                                                        })}
                                                        <Typography variant={"caption"}>{str}</Typography>
                                                    </ImageListItem>
                                                )}
                                            </ImageList>*/}
                      <ImageList sx={{ width: 305, height: 200 }} cols={3}>
                        {member.skills.map(([x, _, str], i) => (
                          <ImageListItem sx={{ alignItems: "center" }} key={i}>
                            {React.cloneElement(x, { width: 95, height: 35 })}
                            <Typography variant={"caption"}>{str}</Typography>
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </Stack>
                    {/*<Stack direction="column" spacing={2}>
                                            {member.skills.map((skill) =>
                                                <Typography variant={'caption'}>{skill}</Typography>
                                            )}
                                        </Stack>*/}
                  </Stack>
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    {member.socials.map((social) => (
                      <IconButton
                        key={social.name}
                        aria-label={social.name}
                        component="span"
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

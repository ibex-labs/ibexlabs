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
import React, {useState} from "react";
import { Mail, Telegram } from "@mui/icons-material";
import {Button, DialogProps, ImageList, ImageListItem, Link, Modal, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
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
  KotlinFull,
  SolidityFull,
  CPlusPlus, Solana
} from "./logo";
import Timeline from "../components/Timeline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const members = [
  {
    name: "Alex Milkov",
    bg: "Алекcандър Милков",
    blurb: "toured some tech companies in the US and then settled on crypto. lots of distributed/backend systems and Solana experience",
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
    timeline: true,
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
    name: "Stefan Iliev",
    bg: "Стефан Илиев",
    blurb: "building an ETH layer 2 (ten.xyz). knows EVM and smart contract development inside and out",
    job: "Engineer",
    image: "stefan.jpeg",
    skills: [
      [<GoFull />, 0.5, "3yrs"],
      [<TS />, 0.5, "3yrs"],
      [<PythonFull />, 0.25, "4yrs"],
      [<KotlinFull />, 0.75, "3yrs"],
      [<SolidityFull />, 0.75, "3yrs"],
      [<CPlusPlus/>, 0.75, '3yrs'],
    ],
    socials: [
      {
        name: "Telegram",
        icon: (
          <Link href={"https://t.me/incompetentengineer"} target={"_blank"}>
            <Telegram />
          </Link>
        ),
      },
      /*{
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
      },*/
    ],
  },
  {
    name: "Hristo Dimitrov",
    blurb: "got into programming as a kid via phone phreaking/hacking culture in post-communist Bulgaria in the 90s. all-rounder with frontend expertise",
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

const skillLogoHeight = 35

export default function TeamCards() {

  const [open, setOpen] = React.useState(false);
  const [openIdx, setOpenIdx] = useState(-1)

  const handleClickOpen = (ev: any, idx: number) => {
    ev.preventDefault()
    setOpen(!open);
    setOpenIdx(idx == openIdx ? -1: idx)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component="section"
      /*sx={{
                bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "background.default" : "grey.50",
            }}*/
    >
      <Container sx={{ py: 10 }} maxWidth="lg">
        <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
          {members.map((member, index) => (
            <Grid item key={index} xs={12} sm={10} >
              <Card variant="outlined">
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: 'center'
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
                  {/*<Typography color="text.secondary" variant="body2">
                    {member.job}
                  </Typography>*/}
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
                      <ImageList sx={{ width: '18rem', height: skillLogoHeight * 2 }} cols={5}>
                        {member.skills.map(([x, _, str], i) => (
                          <ImageListItem sx={{ alignItems: "center" }} key={i}>
                            {
                              // @ts-ignore
                              React.cloneElement(x, { width: '3rem', height: skillLogoHeight })
                            }
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
                  <Stack direction="row" spacing={2} sx={{ mt: 2, width: '90%'}}>
                    <Typography variant={"caption"}>
                      {member.blurb}
                    </Typography>
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
                  {member.timeline && <Button onClick={ev => handleClickOpen(ev, index)}>More info {open ? <KeyboardArrowUpIcon
                      fontSize="small"
                      sx={{ mt: '1px', ml: '2px' }}
                    /> : <KeyboardArrowDownIcon
                      fontSize="small"
                      sx={{ mt: '1px', ml: '2px' }}
                    />}</Button>}
                  { openIdx == index && <Timeline/>}
                  {/*<Dialog
                      open={open}
                      onClose={handleClose}
                      scroll={'paper'}
                      disableEnforceFocus
                      sx={{
                        "& .MuiDialog-container": {
                          "& .MuiPaper-root": {
                            width: "100%",
                            minWidth: '700px',
                            maxWidth: "700px",  // Set your width here
                          },
                        },
                        position: 'fixed',
                        top: '15%',
                        left: '50%',
                        transform: 'translate(-50%, -10%)',
                    }}
                      aria-labelledby="scroll-dialog-title"
                      aria-describedby="scroll-dialog-description"
                    >
                      <DialogTitle id="scroll-dialog-title">More info</DialogTitle>
                      <DialogContent dividers={true}>
                        <Timeline props={{display: 'flex', maxWidth: '90%'}}/>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                      </DialogActions>
                    </Dialog>*/}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

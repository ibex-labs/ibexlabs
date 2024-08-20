import './App.css';

// When using TypeScript 4.x and above
import * as Scroll from "react-scroll";
import {Link, Element} from "react-scroll";
import {
  alpha,
  AppBar,
  Box, Button,
  Container,
  createTheme,
  CssBaseline, Divider, Grid,
  IconButton, Menu, MenuItem, MenuProps,
  Paper,
  Stack,
  styled, TextareaAutosize, TextField,
  ThemeProvider, Toolbar
} from '@mui/material';
import Typography from "@mui/material/Typography";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as m from "@mui/icons-material";
import TeamCards from "./components/Team";
import {useEffect, useRef, useState} from "react";
import zIndex from "@mui/material/styles/zIndex";
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import emailjs from "@emailjs/browser";
import Email from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import {blue, grey} from "@mui/material/colors";
import Timeline from "./components/Timeline";
import getLPTheme, {secondary} from "./theme";
import Services from "./components/Services";
import * as React from "react";
import {timelineOppositeContentClasses} from "@mui/lab";

// When using TypeScript 3.x and below
//import '@mui/lab/themeAugmentation';

/*const theme = createTheme({
    components: {
        MuiTimeline: {
            styleOverrides: {
                root: {
                    backgroundColor: 'red',
                },
            },
        },
    },
});*/

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    //fontFamily: ['"Inter", "sans-serif"'].join(','),
    /*h1: {
      fontSize: 60,
      fontWeight: 600,
      lineHeight: 78 / 70,
      letterSpacing: -0.2,
    },
    h2: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 42,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 16,
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
    },*/
  },
});

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 20,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : secondary,
    boxShadow: secondary,
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      /*'&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },*/
    },
  },
}));

const Textarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 225px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    margin-left: 8px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);



function App() {

  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);
  //
  //

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  const form = useRef<HTMLFormElement | undefined>(undefined);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_m89bmxw',
      'template_f7jfi0r',
      form.current!,
      'dJFAQspJ0grUAwXA2')
      .then((result) => {
        console.log(result.text);
        form.current!.reset()
      }, (error) => {
        console.log(error.text);
      });
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: any) => {

  };

  const StyledBox = styled(Box)`
      &.typewriter-effect {
          display: flex;
          justify-content: center;
          font-family: monospace;
      }

      &.typewriter-effect > .text {
          animation: typing 3s steps(var(--characters));
          white-space: nowrap;
          overflow: hidden;
      }

      &.typewriter-effect:after {
          content: " |";
          animation: blink 3s step-end;
          //animation-timing-function: step-end;
      }

      @keyframes typing {
          0% { max-width: 0 }
          25%,
          75%,
          100% {
              max-width: calc(var(--characters) * 1ch);
          }
      }

      @keyframes blink {
          0%,
          75%,
          100% {
              opacity: 1;
          }
          25% {
              opacity: 0;
          }
      }
  `;

  const text = 'Blockchain consulting'

  interface CustomStyles extends React.CSSProperties {
    "--characters": number | string;
  }

  const customStyle: CustomStyles = {
    //whiteSpace: 'pre-wrap',
    //wordWrap: 'break-word',
    "--characters": text.length
  }

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "black",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: .2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 700,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
      {/*<Pn divStyle={{position: "fixed"}} />*/}
      <ThemeProvider theme={createTheme(getLPTheme('dark'))}>
        <CssBaseline/>
        <main>
          <Box sx={{ flexGrow: 1, zIndex: 1 }}>
            <AppBar sx={{backgroundColor: "black"}} position={"fixed"}>
              <Toolbar>
                {/*<IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                  <m.Menu />
                </IconButton>*/}
                <img src={'./ibex192.png'} alt={'Ibex Labs'} width={50} height={70} />
                <Divider> </Divider>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Ibex Labs
                </Typography>
                {/*<Link to={'timeline'} className="mr-5 hover:text-gray-900">Timeline</Link>
                <Link to={"about"} className="mr-5 hover:text-gray-900">About</Link>*/}
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<Email/>}
                >
                  Message
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={(e) => {
                    // @ts-ignore
                    if (e.key == 'Tab') {
                      return
                    }
                    setAnchorEl(null);
                    }}
                >
                  <MenuItem disableRipple>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <Stack spacing={1}>
                        <div>
                          <TextField InputProps={{sx: {borderRadius: 2}}}  required name={"name"} label={"Name"}/>
                        </div>
                        <div>
                          <TextField InputProps={{sx: {borderRadius: 2}}} required name={"email"} label={"Email"}/>
                        </div>
                        <div>
                          <Textarea minRows={6} required name={"message"} placeholder={"Message"}/>
                        </div>
                      </Stack>
                      <Button color={"primary"} type={"submit"}>Submit</Button>
                    </Box>
                  </MenuItem>
                </StyledMenu>
              </Toolbar>

            </AppBar>
          </Box>
          <Container style={{marginTop: 70, zIndex: 1000}}>
            <Box>
              <Container id="title" sx={{pt: {xs: 8, sm: 16}}}>
                <p style={customStyle} className={'line-1 anim-typewriter'}>{text}</p>
                {/*<div>
                  <Typography component="h2" variant="h4" color="text.primary">
                    <StyledBox className="typewriter-effect">
                      <Box style={customStyle} className="text" id="typewriter-text">
                        {text}
                      </Box>
                    </StyledBox>
                  </Typography>
                </div>*/}
              </Container>
            </Box>
            <Timeline/>
            <Stack paddingTop={1} spacing={2}>
              <div>
                <Element name={'services'}>
                  <Services/>
                </Element>
                <Element name={'timeline'}>
                  <Typography component="h2" variant="h4" color="text.primary">
                    Team
                  </Typography>
                  <TeamCards/>
                </Element>
              </div>
            </Stack>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;

import './App.css';

// When using TypeScript 4.x and above
import type {} from '@mui/lab/themeAugmentation';
import CustomizedTimeline from "./components/timeline";
import * as Scroll from "react-scroll";
import {Link, Element} from "react-scroll";
import {
  AppBar,
  Box, Button,
  Container,
  createTheme,
  CssBaseline, Divider,
  IconButton,
  Paper,
  Stack,
  styled,
  ThemeProvider, Toolbar
} from '@mui/material';
import Typography from "@mui/material/Typography";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as m from "@mui/icons-material";
import TeamCards from "./components/team";
import {Services} from "./components/services";
import {useEffect} from "react";
import Pn from "particle-network-canvas"
import zIndex from "@mui/material/styles/zIndex";
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
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
});

function App() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

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
      <ThemeProvider theme={darkTheme}>
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
              </Toolbar>
            </AppBar>
          </Box>
      <Container style={{marginTop: 70, zIndex: -1}}>
        <Stack paddingTop={1} spacing={2}>
          <div>
            <Element name={'timeline'}>
              <Typography variant={'body1'} align={'left'}>Timeline</Typography>
              <CustomizedTimeline/>
            </Element>
          </div>
          <div>
            <Typography variant={'body1'} align={'left'}>Services</Typography>
            <Services/>
          </div>
          <div>
            <Element name={'about'}>
              <Typography variant={'body1'} align={'left'}>About</Typography>
              <br/>
              <Typography align={'center'} variant={'body2'}> Ibex Labs, Ltd seeks to connect bright, young software engineers to tech companies across the world </Typography>
            </Element>
          </div>
          <div>
            <Typography variant={'body1'} align={'left'}>Team</Typography>
            <TeamCards/>
          </div>
        </Stack>
      </Container>
    </main>
      </ThemeProvider>
    </>
  );
}

export default App;

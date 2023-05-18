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
    mode: 'light',
  },
});

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <main>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar color={'transparent'} position="static">
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
      <Container>
        <Stack paddingTop={1} spacing={2}>
          <Item>
            <Element name={'timeline'}>
              <Typography variant={'body1'} align={'left'}>Timeline</Typography>
              <CustomizedTimeline/>
            </Element>
          </Item>
          <Item>
            <Element name={'about'}>
              <Typography variant={'body1'} align={'left'}>About</Typography>
              <br/>
              <Typography align={'center'} variant={'body2'}> Ibex Labs, Ltd seeks to connect bright, young software engineers to tech companies across the world </Typography>
            </Element>
          </Item>
          <Item>
            <Typography variant={'body1'} align={'left'}>Team</Typography>
            <TeamCards/>
          </Item>
        </Stack>
      </Container>
    </main>
      </ThemeProvider>
  );
}

export default App;

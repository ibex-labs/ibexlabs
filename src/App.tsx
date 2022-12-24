import './App.css';

// When using TypeScript 4.x and above
import type {} from '@mui/lab/themeAugmentation';
import CustomizedTimeline from "./components/timeline";
import * as Scroll from "react-scroll";
import {Link, Element} from "react-scroll";
import {Container, createTheme, CssBaseline, Paper, Stack, styled, ThemeProvider} from '@mui/material';
import Typography from "@mui/material/Typography";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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

          <div className="App">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={'./ibex192.png'} width={50} height={70} />
            <span className="ml-3 text-xl">Ibex Labs</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to={'timeline'} className="mr-5 hover:text-gray-900">Timeline</Link>
            <Link to={"about"} className="mr-5 hover:text-gray-900">About</Link>
          </nav>
        </div>
      </header>
      <Container>
        <Stack spacing={2}>
          <Item>
            <Element name={'timeline'}>
              <Typography variant={'body1'} align={'left'}>Timeline</Typography>
              <CustomizedTimeline/>
            </Element>
          </Item>
          <Item>
            <Element name={'about'}>
              <Typography variant={'body1'} align={'left'}>About</Typography>
              <Typography align={'center'} variant={'body2'}> Ibex Labs, Ltd seeks to connect young, bright Bulgarian software engineers to tech companies in the United States and Europe </Typography>
            </Element>
          </Item>

        </Stack>
      </Container>
    </div>

        </main>

      </ThemeProvider>
  );
}

export default App;

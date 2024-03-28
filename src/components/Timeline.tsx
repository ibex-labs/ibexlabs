import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineItem from "@mui/lab/TimelineItem";
import {ReactComponent as Nation} from "assets/nation-white.svg";
import {ReactComponent as RenderFoundation1} from "assets/render-foundation.svg";
import TimelineContent from "@mui/lab/TimelineContent";
import {timelineOppositeContentClasses} from "@mui/lab";
import {ReactComponent as Vellum} from "../assets/VellumLogoWhite.svg";
import Timeline from "@mui/lab/Timeline";
import {
  Deno,
  Docker,
  Grafana,
  Kubernetes,
  Postgres,
  Prometheus,
  Redis,
  Render,
  Rust,
  Rust1,
  Solana, Supabase,
  TS,
  Vercel
} from "./logo";
import CardContent from "@mui/material/CardContent";
import {CardMedia, ImageList, ImageListItem, List, ListItem} from "@mui/material";
import {Image} from "mui-image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {ExpandMore, KeyboardArrowUp} from '@mui/icons-material';

const nationIcons = [
  <TS/>,
  <Rust1/>,
  <Solana/>,
  <Vercel/>,
  <Redis/>,
  <Postgres/>,
  <Docker/>,
];

const renderIcons = [
  <TS/>,
  <Rust/>,
  <Solana/>,
  <Vercel/>,
  <Docker/>,
  <Kubernetes/>,
  <Grafana/>,
  <Prometheus/>,
  <Redis/>,
  <Postgres/>
];

const items = [

  {
    icon1: <Render width={30} height={30}/>,
    icon2: <RenderFoundation1 height={50} width={100}/>,
    title: 'Render Foundation',
    description:
      <>
        <Typography color="text.secondary" variant="body1" sx={{my: 0.5}}>
          Render Network is a distributed 3-D graphics rendering platform. The Foundation supports its migration from
          Ethereum to Solana
        </Typography>
        <div>
          <ImageList sx={{width: renderIcons.length * 25, height: 30, paddingTop: 1}} cols={renderIcons.length}>
            {renderIcons.map((x, i) =>
              <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
            )}
          </ImageList>
        </div>
        <Box sx={{pt: 1}}>
          <Card
            sx={{width: 300}}
            title={"Help"}>
            <CardContent>
              <Typography variant={"body2"}>
                <Link href={'https://u.today/crypto-ai-token-render-rndr-migrates-to-solana-blockchain'}
                      target={"_blank"}>Crypto AI Token Render (RNDR) Migrates to Solana Blockchain</Link>
              </Typography>
              <CardMedia
                image={'https://u.today/sites/default/files/styles/736x/public/2023-11/41703.jpg'}
                sx={{height: 150}}
              />
            </CardContent>
          </Card>
        </Box>
      </>,
    addtlContent: <Grid item xs={10} sm={10} md={9}>
        <div>
            <Typography marginBottom={0} variant={'body2'}>
                In process of migrating their entire network from Ethereum to Solana. so far:
              {/* the sum total of the work
                is currently encapsulated in this <Link target={"_blank"} href={"https://github.com/rndr-network/render-program-library"}>monorepo</Link> (may not be public yet)*/}
            </Typography>
            <List dense={true} disablePadding={true} sx={{ marginLeft: 2, listStyleType: 'disc' }}>
                <ListItem disablePadding={true} sx={{ display: 'list-item' }}>
                    <Typography variant={'body2'}>
                        implemented a BME (burn-and-mint equilibrium) <Link href={'https://github.com/rndr-network/RNPs/blob/main/Approved%20and%20on%20the%20Roadmap/rnp-001-bme.md'} target={"_blank"}>proposal</Link>. Render is minted
                      each epoch based on said pre-defined schedule. A separate process listens for Render job completions and buys and burns an amount of Solana RENDER as a function of the # of ETH RNDR spent on the job
                    </Typography>
                </ListItem>
                <ListItem disablePadding={true} sx={{ display: 'list-item' }} >
                    <Typography variant={'body2'}>
                        token bridge so users can convert their ETH RNDR for Solana RENDER via <Link href={'https://wormhole.com/'} target={"_blank"}>wormhole</Link> and receive incentives for doing so
                    </Typography>
                </ListItem>
            </List>
          <Typography variant={'caption'} fontWeight={'bold'}>
            Tech
          </Typography><br/>
            <Typography variant={'caption'}>
                several Solana contracts in Rust for controlling emissions based on a schedule, burn-and-mint equilibrium, bridging tokens from Ethereum to Solana, tokenizing entities (nodes that complete render jobs from artists are cNFTs), releasing various reward channels
                <br/>
                Typescript servers and (cranker) jobs for serving/indexing data out of Redis/Postgres and orchestrating operations against Solana
                <br/>
                Token bridge relayer to redeem wormhole VAAs for RENDER Solana side
                <br/>
                stats dashboard backed by Postgres that node operators and holders can utilize to track down their payments
                <br/>
                all running in a Kubernetes cluster with Grafana/Prometheus/Alertmanager/Loki/Tempo observability stack, Pagerduty alerting, Vault and <Link href={'https://bank-vaults.dev/'} target={'_blank'}>bank-vaults.dev</Link> for secret management and injection, Nginx ingress
            </Typography>
        </div>
    </Grid>,
    date: 'May 2023'
  },
  {
    icon1:  <Nation width={30} height={30}/>,
    icon2: <Box sx={{width: 100, m: 'auto', p: 0, display: 'block'}}>
      <Nation width={30} height={30}/>
    </Box>,
    title: 'Nation',
    description:
      <>
        <Typography color="text.secondary" variant="body1" sx={{my: 0.5}}>
          The DAO (Distributed Autonomous Organization) platform for Solana
        </Typography>
        <div>
          <ImageList sx={{width: nationIcons.length * 25, height: 30, paddingTop: 1}} cols={nationIcons.length}>
            {nationIcons.map((x, i) =>
              <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
            )}
          </ImageList>
        </div>
      </>,
    date: 'Oct 2022',
    addtlContent: <>
      <Grid item xs={12} sm={10} md={2}>
        <div>
          <Link sx={{margin: '0 auto'}} href={"https://onvellum.com"} target={'_blank'}>
            <Vellum width={60} height={40}/>
            {/*<Image src={"assets/VellumLogo.svg"} width={60} height={40}/>*/}
          </Link>
        </div>
      </Grid>
      <Grid item xs={12} sm={10} md={10}>
        <div>
          <Typography marginBottom={0} paragraph variant={'body2'}> a Docusign-like platform for distributed (implemented against the Solana blockchain) signing of documents</Typography>
          <List dense={true} disablePadding={true} sx={{ marginLeft: 2, listStyleType: 'disc' }}>
            <ListItem disablePadding={true} sx={{ display: 'list-item' }}>
              <Typography variant={'body2'}>
                ability to draft documents with GPT-4 integration
              </Typography>
            </ListItem>
            <ListItem disablePadding={true} sx={{ display: 'list-item' }}>
              <Typography variant={'body2'}>
                post-execution: run actions once the document has been signed like transfering funds from one account to another
              </Typography>
            </ListItem>
          </List>
          <ImageList  sx={{width: nationIcons.length * 22 , height: 30, paddingTop: 1}} cols={nationIcons.length}>
            {[
              <Supabase/>,
              <Vercel/>,
              <Solana/>
            ].map((x, i) =>
              <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
            )}
          </ImageList>
          <Typography variant={'caption'}>Next.js service on Vercel with Supabase (postgres, realtime sockets, blob storage) backend and Solana contracts in Rust for writing documents to the blockchain and running post-execution</Typography>
        </div>
        <br/>
      </Grid>
      {/*sx={{ display: 'flex', textAlign: "center" }}*/}
      <Grid item xs={12} sm={12} md={2}>
        {/*sx={{alignItems:'center', margin: '0 0', padding: 0, color: 'inherit', textDecoration: 'inherit'}}*/}
        <Link href={"https://caro.bid"} target={"_blank"}>
          {/*<Image src={"apple-touch-icon.png"} width={40} height={40}></Image>*/}
          <Image src={'caro-black.png'} width={65} height={45}/>
        </Link>
        {/*<Typography sx={{verticalAlign:'center', marginTop: '5px' , marginLeft: '2px', color: '#75db00', fontWeight: 'bold'}}>Caro</Typography>*/}
      </Grid>
      <Grid item xs={12} sm={10} md={10}>
        <div>
          <Typography variant={'body2'}>An auction engine implementing several real-time auction formats served as a Shopify widget that can be embedded in anyone's storefront. The following is a brief presentation given by Nation's CEO Ryan Shea about Caro</Typography>
          <video width="400" height="310" controls>
            <source src="https://github.com/amilkov3/ibexlabs/raw/0267d34391f5233ef432f9b1bf94adbada844e07/public/caro-presentation.mp4" type="video/mp4"/>
          </video>
          <ImageList  sx={{width: 4 * 25 , height: 30, paddingTop: 1}} cols={4}>
            {[<Rust/>, <Postgres/>, <Deno/>, <Redis/>].map((x, i) =>
              <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
            )}
          </ImageList>
          <Typography variant={'caption'}>The service began as a Rust backend using actix. In order to achieve
            the lowest latency possible an HFT-like architecture was used where each auction was assigned to a node
            and loaded/stored in-mem on that node (auction id header based routing) where bids, checkouts (a bid is a declaration to buy a product,
            a checkout is an actual purchase), and other features were all settled in mem. This achieved microsecond latencies
            and a single Docker instance was loaded tested at ~500 req/s (bids)
          </Typography>
          <img src={'rustload.png'} width={600} height={400}></img>
          <Typography variant={'caption'}>
            However Rust proved to be prohibitive in more pragmatic ways:
          </Typography>
          <br/>
          <Typography variant={'caption'}>
            * complexity and upfront mental overhead is high. which makes development pace slow and these issues compound as you add more people
          </Typography>
          <br/>
          <Typography variant={'caption'}>
            * packaging a binary was taking up to 3.5 minutes, and the strict (and time consuming) compile-build loop made local development slow
          </Typography>
          <br/>
          <Typography variant={'caption'}>
            * an unexpected bug with actix websockets caused the entire server to hang after ~5 connections. after a day, we gave up trying to find the source
            of the issue and simply replaced active with [axum](https://github.com/tokio-rs/axum) which resolved the issue
          </Typography>
          <br/>
          <Typography variant={'caption'}>
            * Docker images were massive
          </Typography>
          <br/>
          <Typography variant={'caption'}>
            * tooling is still generally immature though this is improving quickly. we had to patch numerous crates along the way and simple things like hooking up traces to Datadog took forever due to poor documentation/lack of examples on Github of people
            that had already done it
          </Typography>
          <ImageList  sx={{width: nationIcons.length * 22 , height: 30, paddingTop: 1}} cols={nationIcons.length}>
            {[<Deno/>, <Redis/>].map((x, i) =>
              <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
            )}
          </ImageList>
          <Typography variant={'caption'}>
            since this entire service effectively I/O bound we simply ported it to Deno, a new Javascript runtime built on Rust by the creator of Node and achieved similar benchmarks but now the development loop was instantaneous
            and tooling worked out of the box. We also moved from storing things in-mem and persisting async to Postgres to using Redis and Lua scripts where atomicity was needed. Below we see similar performance
            on the load test
          </Typography>
          <img src={'denoload.png'} width={600} height={400}></img>
        </div>
        <br/>
      </Grid>
      <Grid item xs={12} sm={12} md={2}>
        {/*<pre><code children={'auction-engine'}></code></pre>*/}
        <div>
          <Link sx={{margin: '0 auto'}} href={"https://nation.io"} target={"_blank"}>
            <Nation width={40} height={40}/>
          </Link>
          (core)
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={9}>
        <Typography variant={'body2'}>
          Nation was originally started with the intent of being the DAO (decentralized autonomous organization)
          platform for Solana. The core platform allows users to create organizations to collect funds for causes,
          vote on proposals, and other things
        </Typography>
        <ImageList  sx={{width: nationIcons.length * 22 , height: 30, paddingTop: 1}} cols={nationIcons.length}>
          {[<Supabase/>, <Vercel/>, <Solana/>].map((x, i) =>
            <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
          )}
        </ImageList>
      </Grid>
    </>
  }
];

export default function Timeline1() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const [addtlContentIdx, setAddtlContentIdx] = React.useState(-1);
  const [addtlContentOpen, setAddtlContentOpen] = React.useState(false);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{pt: {xs: 8, sm: 16}}}>
      <Timeline sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.1,
        },
      }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Timeline
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title, icon1, icon2, date, description }, index) => (
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="left"
                  variant="body2"
                  color="text.secondary"
                >
                  {date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  {icon1}
                  {/*<TimelineDot>
                </TimelineDot>*/}
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Chip
                    key={index}
                    label={title}
                    onClick={() => {
                      setAddtlContentIdx(index)
                      handleItemClick(index)
                    }}
                    sx={{
                      borderColor: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index ? 'primary.light' : '';
                        }
                        return selectedItemIndex === index ? 'primary.light' : '';
                      },
                      background: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index ? 'none' : '';
                        }
                        return selectedItemIndex === index ? 'none' : '';
                      },
                      backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                      '& .MuiChip-label': {
                        color: selectedItemIndex === index ? '#fff' : '',
                      },
                    }}
                  />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 25,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {selectedFeature.title}
              </Typography>
              {selectedFeature.description}
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
                onClick={(event) => {
                  if (addtlContentOpen) {
                    //setAddtlContentIdx(-1)
                    setAddtlContentOpen(false)
                    return
                  }
                  setAddtlContentOpen(true)
                  //setAddtlContentIdx(index)
                  event.stopPropagation();
                }}
              >
                <span>Show {addtlContentOpen ? 'less': 'more'}</span>
                {addtlContentOpen ? <KeyboardArrowUpIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                  /> : <KeyboardArrowDownIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />}
              </Link>
              {addtlContentOpen && selectedFeature.addtlContent}
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            <Box sx={{width: '100%', m: 0, p: 0, display: 'block'}}>
            {items.map(({ date, icon1, icon2, title, description , addtlContent}, index) => (
              <TimelineItem sx={{py: 1}}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  {icon1}
                  {/*<TimelineDot>
                </TimelineDot>*/}
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Link
                    color="primary"
                    variant="body2"
                    fontWeight="bold"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      '& > svg': { transition: '0.2s' },
                      '&:hover > svg': { transform: 'translateX(2px)' },
                    }}
                    onClick={(event) => {
                      if (addtlContentOpen) {
                        setAddtlContentIdx(-1)
                        setAddtlContentOpen(false)
                        return
                      }
                      setAddtlContentOpen(true)
                      setAddtlContentIdx(index)
                      event.stopPropagation();
                    }}
                  >
                  <Card
                key={index}
                //component={Button}
                onMouseOver={() => handleItemClick(index)}
                //onClick={() => }
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                  },
                }}
              >

                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {icon2}
                  </Box>

                  <div>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    {description}
                      <span>Show {index == addtlContentIdx && addtlContentOpen ? 'less': 'more'}</span>
                      {index == addtlContentIdx && addtlContentOpen ? <KeyboardArrowUpIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                        /> : <KeyboardArrowDownIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />}
                    {index == addtlContentIdx && addtlContent}
                  </div>
                </Box>
              </Card>
                  </Link>
                </TimelineContent>
              </TimelineItem>
            ))}
            </Box>
          </Stack>
        </Grid>
        {/*<Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: 420,
                height: 500,
                backgroundSize: 'contain',
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
              }}
            />
            <p>foo</p>
          </Card>
        </Grid>*/}
      </Grid>
      </Timeline>
    </Container>
  );
}

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import {ReactComponent as Nation} from "assets/nation-white.svg";
import {ReactComponent as RenderFoundation1} from "assets/render-foundation.svg";
import {ReactComponent as Otoy} from "../assets/otoy.svg";
//import {ReactComponent as Render} from "../assets/render.svg";
import {
    Divider,
    Grid,
    ImageList,
    ImageListItem,
    Link,
    List,
    ListItem,
    Paper, Stack,
    styled,
    SvgIcon,
    Tooltip,
    Box, ListItemText, Collapse, IconButtonProps, CardMedia
} from "@mui/material";
import {timelineOppositeContentClasses} from "@mui/lab";
import CodeBlock from "./codeblock";
import {AddCircle,  KeyboardArrowUp} from "@mui/icons-material";
import {
    Deno,
    Docker,
    Grafana,
    Kubernetes,
    Postgres,
    Prometheus,
    Redis,
    Rust,
    Solana,
    Supabase,
    TS,
    Vercel,
    Render,
    Render1,
    Rust1, RenderFoundation
} from "./logo";
import {ReactComponent as Vellum} from "../assets/VellumLogoWhite.svg";
import {Image} from "mui-image";
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const nationIcons = [
    <TS/>,
    <Rust1/>,
    <Postgres/>
];
const renderIcons = [
    <TS/>,
    <Rust/>,
];

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.overline,
    backgroundColor: theme.palette.grey.A100,
    padding: theme.spacing(1),
}));

const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
}));

const CodeItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CustomizedTimeline() {

    const [caroExpanded, setCaroExpanded] = useState(false)

    return (
        <Timeline  sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
            },
        }}>
            <TimelineItem>
                <TimelineOppositeContent
                            sx={{ width: 20, m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
                    >
                    Oct 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                    <Nation width={30} height={30}/>
                {/*<TimelineDot>
                </TimelineDot>*/}
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div>
                                <Link href={'https://nation.io'} target={'_blank'} underline={'always'}><Typography variant="body1" component="span">nation.io</Typography></Link>
                            </div>
                            <div>
                                <ImageList  sx={{width: nationIcons.length * 22 , height: 30, paddingTop: 1}} cols={nationIcons.length}>
                                {nationIcons.map((x, i) =>
                                    <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
                                )}
                                </ImageList>
                            </div>
                        </Grid>
                        <br/>
                        <Grid item xs={12} sm={10} md={2}>
                            <div>
                                <Link sx={{margin: '0 auto'}} href={"https://onvellum.com"} target={'_blank'}>
                                    <Vellum width={60} height={40}/>
                                    {/*<Image src={"assets/VellumLogo.svg"} width={60} height={40}/>*/}
                                </Link>
                                <KeyboardArrowUp/><Typography variant={"body2"}>
                                click icons for more details
                            </Typography>
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
                                <Typography variant={'caption'}>{caroExpanded ? "show less": "show more"}</Typography>
                                <ExpandMore
                                  expand={caroExpanded}
                                  onClick={() => setCaroExpanded(!caroExpanded)}
                                  aria-expanded={caroExpanded}
                                  aria-label="show more"
                                >
                                <ExpandMoreIcon />

                                </ExpandMore>
                                <Collapse in={caroExpanded} timeout="auto" unmountOnExit>
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
                                </Collapse>
                            </div>
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
                    </Grid>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    px={{xs: '16px', sm: 2, md: 2}}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    May 2023
                </TimelineOppositeContent>
                <TimelineSeparator >
                    <TimelineConnector />
                    <Render width={30} height={30}/>
                    {/*<TimelineDot>
                </TimelineDot>*/}
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div>
                                <Link href={'https://rendernetwork.com'} target={'_blank'} underline={'always'}><Typography variant="body1" component="span">rendernetwork.com</Typography></Link>
                            </div>
                            <div>
                                <ImageList  sx={{width: renderIcons.length * 22 , height: 30, paddingTop: 1}} cols={renderIcons.length}>
                                    {renderIcons.map((x, i) =>
                                      <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
                                    )}
                                </ImageList>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={10} md={2}>
                            <Link sx={{margin: '0 auto'}} target={'_blank'} href={"https://renderfoundation.com/"}>
                                <RenderFoundation1 height={50} width={120} />
                            </Link>
                        </Grid>
                        <br/>
                        <Grid item xs={10} sm={10} md={9}>
                            <div>
                                <Typography marginBottom={0} variant={'body2'}>
                                    my work at Render has involved migrating their entire network from Ethereum to Solana. the sum total of the work
                                    is currently encapsulated in this <Link target={"_blank"} href={"https://github.com/rndr-network/render-program-library"}>monorepo</Link> (may not be public yet)
                                </Typography>
                                <List dense={true} disablePadding={true} sx={{ marginLeft: 2, listStyleType: 'disc' }}>
                                    <ListItem disablePadding={true} sx={{ display: 'list-item' }}>
                                        <Typography variant={'body2'}>
                                            implemented a BME (burn-and-mint equilibrium) <Link href={'https://github.com/rndr-network/RNPs/blob/main/Approved%20and%20on%20the%20Roadmap/rnp-001-bme.md'} target={"_blank"}>proposal</Link>
                                        </Typography>
                                    </ListItem>
                                    <ListItem disablePadding={true} sx={{ display: 'list-item' }} >
                                        <Typography variant={'body2'}>
                                            token bridge so users can burn their ETH RNDR for Solana RENDER via <Link href={'https://wormhole.com/'} target={"_blank"}>wormhole</Link>
                                        </Typography>
                                    </ListItem>
                                </List>
                                <Card
                                  sx={{ width: 300}}
                                  title={"Help"}>
                                    <CardContent>
                                        <Typography variant={"body2"}>
                                            <Link href={'https://u.today/crypto-ai-token-render-rndr-migrates-to-solana-blockchain'} target={"_blank"}>Crypto AI Token Render (RNDR) Migrates to Solana Blockchain</Link>
                                        </Typography>
                                        <CardMedia
                                          image={'https://u.today/sites/default/files/styles/736x/public/2023-11/41703.jpg'}
                                          sx={{height: 100}}
                                        />
                                    </CardContent>
                                </Card>
                                <ImageList  sx={{width: 8 * 25 , height: 30, paddingTop: 1}} cols={8}>
                                    {[ <Vercel/>, <Solana/>, <Docker/>, <Kubernetes/>, <Grafana/>, <Prometheus/>, <Redis/>, <Postgres/>].map((x, i) =>
                                      <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
                                    )}
                                </ImageList>
                                <Typography variant={'caption'}>
                                    several Solana contracts in Rust for controlling emissions based on a schedule, burn-and-mint equilibrium, bridging tokens from Ethereum to Solana, tokenizing entities (GPU nodes that run rendering jobs), etc
                                    <br/>
                                    Typescript servers and (cranker) jobs for serving data and orchestrating operations against Solana
                                    <br/>
                                    Redis to facilitate the token bridge relayer and ETH fee reinbursement
                                    <br/>
                                    Postgres backing a dashboard matching users with node operators
                                    <br/>
                                    all running in a large Kubernetes cluster with Grafana/Prometheus/Alertmanager/Loki/Tempo monitoring stack, Vault and <Link href={'https://bank-vaults.dev/'} target={'_blank'}>bank-vaults.dev</Link> for secret management and injection, Nginx ingress
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </TimelineContent>
            </TimelineItem>
    </Timeline>);
}

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
import {ReactComponent as Nation} from "../nation-logo.svg";
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
    Box, ListItemText
} from "@mui/material";
import {timelineOppositeContentClasses} from "@mui/lab";
import CodeBlock from "./codeblock";
import {AddCircle,  KeyboardArrowUp} from "@mui/icons-material";
import {Deno, Postgres, Redis, Rust, Solana, Supabase, TS, Vercel} from "./logo";
import {ReactComponent as Vellum} from "../assets/VellumLogo.svg";
import {Image} from "mui-image";

const icons = [
    <TS/>,
    <Rust/>,
    <Postgres/>
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

export default function CustomizedTimeline() {
    return (
        <Timeline  sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
            },
        }}>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
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
                <Item>
                    <Link href={'https://nation.io'} target={'_blank'} underline={'always'}><Typography variant="body1" component="span">nation.io</Typography></Link>
                </Item>
                <Item>
                    <ImageList  sx={{width: icons.length * 22 , height: 30, paddingTop: 1}} cols={icons.length}>
                    {icons.map((x, i) =>
                        <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
                    )}
                    </ImageList>
                </Item>
            </Grid>
            <br/>
            <Grid item xs={12} sm={10} md={2}>
                <Item ><Link sx={{margin: '0 auto'}} href={"https://onvellum.com"} target={'_blank'}>
                    <Vellum width={60} height={40}/></Link>
                    <KeyboardArrowUp/> click icons for more details
                </Item>
            </Grid>
            <Grid item xs={12} sm={10} md={10}>
                <Item>
                    <Typography marginBottom={0} paragraph variant={'body2'}> a Docusign-like platform for distributed (implemented against the Solana blockchain) signing of documents</Typography>
                    <ul>
                        <li>* ability to draft documents with GPT-4 integration </li>
                        <li>* post-execution: run actions once the document has been signed like transfering funds from one account to another </li>
                    </ul>
                    <ImageList  sx={{width: icons.length * 22 , height: 30, paddingTop: 1}} cols={icons.length}>
                        {[
                            <Supabase/>,
                            <Vercel/>,
                            <Solana/>
                        ].map((x, i) =>
                            <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
                        )}
                    </ImageList>
                    <Typography variant={'caption'}>Next.js service on Vercel with Supabase (postgres, realtime sockets, blob storage) backend and Solana contracts in Rust for writing documents to the blockchain and running post-execution</Typography>
                </Item>
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
            <Grid item xs={12} sm={12} md={9}>
                <Item>
                    <Typography variant={'body2'}>An auction engine implementing several real-time auction formats served as a Shopify widget that can be embedded in anyone's storefront. The following is a brief presentation given by our CEO Ryan Shea about Caro</Typography>
                    <video width="400" height="310" controls>
                        <source src="https://github.com/amilkov3/ibexlabs/raw/0267d34391f5233ef432f9b1bf94adbada844e07/public/caro-presentation.mp4" type="video/mp4"/>
                    </video>
                    <ImageList  sx={{width: icons.length * 22 , height: 30, paddingTop: 1}} cols={icons.length}>
                        {[<Rust/>, <Postgres/>].map((x, i) =>
                            <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
                        )}
                    </ImageList>
                    <Typography variant={'caption'}>The service began as a Rust backend using actix. In order to achieve
                        the lowest latency possible an HFT-like architecture was used where each auction was assigned to a node
                        and loaded/stored in-mem on that node (nginx routed reqs for a given auction to the right node based on a header) where bids, checkouts (a bid is a declaration to buy a product,
                        a checkout is an actual purchase), and other features were all settled in mem. This achieved microsecond latencies
                        and a single Docker instance was loaded tested at ~500 req/s (bids)
                    </Typography>
                    <img src={'rustload.png'} width={600} height={400}></img>
                    <Typography variant={'caption'}>
                        However it became apparent that Rust would be prohibitive in other ways, particularly to the development pace we wanted to move at:
                    </Typography>
                    <br/>
                    <Typography variant={'caption'}>
                        * packaging a binary was taking up to 3.5 minutes, and the strict (and time consuming) compile-build loop made local development slow
                    </Typography>
                    <br/>
                    <Typography variant={'caption'}>
                        * it was going to be very difficult for other developers to ramp up quickly on Rust
                    </Typography>
                    <br/>
                    <Typography variant={'caption'}>
                        * an unexpected bug with actix websockets caused the entire server to hang after 5 websocket connections
                    </Typography>
                    <br/>
                    <Typography variant={'caption'}>
                        * Docker images were massive
                    </Typography>
                    <br/>
                    <Typography variant={'caption'}>
                        * tooling is still immature. we had to patch numerous crates along the way and simple things like hooking up traces to Datadog took forever
                    </Typography>
                    <ImageList  sx={{width: icons.length * 22 , height: 30, paddingTop: 1}} cols={icons.length}>
                        {[<Deno/>, <Redis/>].map((x, i) =>
                            <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
                        )}
                    </ImageList>
                    <Typography variant={'caption'}>
                        so we ported it to Deno, a new Javascript runtime built on Rust by the creator of Node and achieved similar benchmarks but now the development loop was instantaneous
                        and tooling worked out of the box. We also moved from storing things in-mem and persisting to Postgres to just Redis to simplify things a bit. Below we see similar performance
                        on the load test
                    </Typography>
                    <img src={'denoload.png'} width={600} height={400}></img>
                </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
                {/*<pre><code children={'auction-engine'}></code></pre>*/}
                <Item>
                    <Link sx={{margin: '0 auto'}} href={"https://nation.io"} target={"_blank"}>
                        <Nation width={40} height={40}/>
                    </Link>
                    (core)
                </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
                <Typography variant={'body2'}>
                    Nation was originally started with the intent of being the DAO (decentralized autonomous organization)
                    platform for Solana. The core platform allows users to create organizations to collect funds for causes,
                    vote on proposals, and other things
                </Typography>
                <ImageList  sx={{width: icons.length * 22 , height: 30, paddingTop: 1}} cols={icons.length}>
                    {[<Supabase/>, <Vercel/>].map((x, i) =>
                        <ImageListItem key={i}>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
                    )}
                </ImageList>
            </Grid>
        </Grid>

        <Typography>
            {/*<Divider variant={'middle'} light={true}/>*/}


            {/*<List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
                <ListItem>
                    <Link href={"https://onvellum.com"}><Vellum  width={60} height={40}/></Link>
                    <Divider>  </Divider>
                    <Typography variant={'body2'}> onchain docusign implemented against the Solana blockchain</Typography>
                </ListItem>
                <ListItem>


                </ListItem>
            </List>*/}
        </Typography>
    </TimelineContent>
    </TimelineItem>
    </Timeline>
);
}
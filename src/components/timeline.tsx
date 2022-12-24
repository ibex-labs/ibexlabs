
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
import {ReactComponent as Logo} from "../nation-logo.svg";
import {ReactComponent as TS} from "../assets/typescript.svg";
import {ReactComponent as Rust} from "../assets/rust.svg";
import {ReactComponent as PG} from "../assets/postgresql.svg";
import {ReactComponent as Vellum} from "../assets/VellumLogo.svg";
import {
    Divider,
    Grid,
    ImageList,
    ImageListItem,
    Link,
    List,
    ListItem,
    Paper,
    styled,
    SvgIcon,
    Tooltip
} from "@mui/material";
import {timelineOppositeContentClasses} from "@mui/lab";
import CodeBlock from "./codeblock";

const icons = [
    <TS title={'Typescript'} />,
    <Rust title={'Rust'} />,
    <Tooltip title={'PostgreSQL'}><PG /></Tooltip>,
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
        <Logo width={30} height={30}/>
    {/*<TimelineDot>
    </TimelineDot>*/}
    <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item>
                    <Link href={'https://nation.io'} target={'_blank'} underline={'always'}><Typography variant="h6" component="span">nation.io</Typography></Link>
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
                <Item ><Link sx={{margin: '0 auto'}} href={"https://onvellum.com"} target={'_blank'}><Vellum  width={60} height={40}/></Link></Item>
            </Grid>
            <Grid item xs={12} sm={10} md={10}>
                <Item>
                    <Typography marginBottom={0} paragraph variant={'body2'}> onchain docusign implemented against the Solana blockchain</Typography>
                    <Typography variant={'caption'}>Next.js on Vercel with Node backend and Rust Solana contract</Typography>
                </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={2}>
                <pre><code children={'auction-engine'}></code></pre>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={10}>
                <Item>
                    <Typography variant={'body2'}>Shopify widget implementing several real-time pricing models</Typography>
                    <Typography variant={'caption'}>AWS Rust lambdas against serverless PostgreSQL</Typography>
                </Item>
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

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
import {Divider, Grid, ImageList, ImageListItem, Link, List, ListItem, styled, SvgIcon, Tooltip} from "@mui/material";
import {timelineOppositeContentClasses} from "@mui/lab";

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
        <Typography variant="h6" component="span">
            <Link href={'https://nation.io'} target={'_blank'} underline={'always'}>nation.io</Link>
        </Typography>
        <Typography>
            {/*<Divider variant={'middle'} light={true}/>*/}
            <ImageList  sx={{width: icons.length * 22 , height: 30, paddingTop: 1}} cols={icons.length}>
                {icons.map(x =>
                    <ImageListItem>{React.cloneElement(x, {width: 20, height: 20})}</ImageListItem>
                )}
                <ImageListItem></ImageListItem>
            </ImageList>
            <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
                <ListItem>
                    <Link href={"https://onvellum.com"}><Vellum  width={60} height={40}/></Link>
                    <Divider>  </Divider>
                    <Typography variant={'body2'}> onchain docusign implemented against the Solana blockchain</Typography>
                    <Typography variant={'caption'}>Next.js on Vercel with Node backend and Rust Solana contract</Typography>
                </ListItem>
                <ListItem>
                    <Typography sx={{width: 100}} noWrap={true} variant={'caption'}>auction engine</Typography>
                    <Divider></Divider>
                    <Typography variant={'body2'}>Shopify widget implementing several real-time pricing models</Typography>
                    <Typography variant={'caption'}>AWS Rust lambdas against serverless PostgreSQL</Typography>
                </ListItem>
            </List>
        </Typography>
    </TimelineContent>
    </TimelineItem>
    </Timeline>
);
}
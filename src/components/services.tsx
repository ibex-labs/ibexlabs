import React from "react";
import {Box, Container, Grid, Link, List, ListItem} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const Services = () => {
    return (
        <Box component="section">
            <Container sx={{ py: 2 }} maxWidth="lg">
                <Grid container spacing={3} >
                    <Grid item key={0} xs={12} sm={6} lg={3} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{paddingBottom:1}} variant={"h5"}>
                                    Frontend
                                </Typography>
                                <Typography variant={"body2"}>
                                    experience building frontends like <Link href={"https://caro.bid"} target={"_blank"}>this</Link> and <Link href={"https://onvellum.com"} target={"_blank"}>this</Link> in React
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item key={1} xs={12} sm={6} lg={3} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{paddingBottom:1}} variant={"h5"}>
                                    Backend
                                </Typography>
                                <Typography variant={"body2"}>
                                    experience building many different kinds of distributed systems. to name a few:
                                    <List disablePadding={true} dense={true} sx={{ marginLeft: 2, listStyleType: 'disc', padding: 0 }}>
                                        <ListItem disablePadding={true} sx={{ display: 'list-item' }}>
                                            realtime message based backends on Node (Deno)
                                        </ListItem>
                                        <ListItem disablePadding={true} sx={{ display: 'list-item' }}>
                                            HFT-like order books and infrastructure tools like jobs, queues, GRPC macro frameworks in Rust
                                        </ListItem>
                                        <ListItem disablePadding={true} sx={{ display: 'list-item' }}>
                                            high traffic Scala backends against MongoDB
                                        </ListItem>
                                        <ListItem disablePadding={true} sx={{ display: 'list-item' }}>
                                            high availability object graph service in Go backed by sharded MySQL
                                            and Elasticsearch for search with numerous asynchronous processing pipelines
                                        </ListItem>
                                    </List>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item key={2} xs={12} sm={6} lg={3}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{paddingBottom:1}} variant={"h5"}>
                                    Blockchain
                                </Typography>
                                <Typography variant={"body2"}>
                                    experience building and scaling blockchain networks against Ethereum and Solana involving token bridges,
                                    burn and mint equilibrium, entity management, etc. along with services otherwise persisting
                                    data to them
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item key={3} xs={12} sm={6} lg={3}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{paddingBottom:1}} variant={"h5"}>
                                    Machine Learning/AI
                                </Typography>
                                <Typography variant={"body2"}>
                                    experience building custom ML pipelines for finance and conversational models via either fine-tuning
                                    OpenAI's GPT models or training transformer based models from scratch
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
import React from "react";
import {Box, Container, Grid, Link} from "@mui/material";
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
                                    experience building beautiful frontends like <Link href={"https://caro.bid"} target={"_blank"}>this</Link> and <Link href={"https://onvellum.com"} target={"_blank"}>this</Link> in React
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
                                    experience building all sorts of distributed systems from realtime message based backends
                                    on Node or Rust to high traffic Scala backends against MongoDB to high availability search and CRUD based
                                    backends in Go against Elasticsearch and sharded MySQL with numerous dependencies and asynchronous
                                    processing pipelines
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
                                    experience building and most importantly scaling (blockchains are slow) services
                                    committing data to blockchains mostly against Solana and Ethereum
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
                                    experience building custom ML pipelines and conversational models via either fine-tuning
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
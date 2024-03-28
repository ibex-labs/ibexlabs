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
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import Web from '@mui/icons-material/Web';
import FilterDrama from '@mui/icons-material/FilterDrama';
import Gavel from '@mui/icons-material/Gavel';
import {ImageList, ImageListItem, ImageListItemBar, List, ListItem} from "@mui/material";
import {Image} from "mui-image";
import {ReactComponent as Vellum} from "../assets/VellumLogoWhite.svg";
import {Manna} from "./logo";

const items = [
  {
    icon: <Web/>,
    title: 'Frontend',
    description:
      'beautiful UIs',
    content: <>
      <Typography variant={"body1"}>
        Here are some React web apps we've built
      </Typography>
      <ImageList sx={{ py: 2, m: '0 auto', width: '100%', height: '100%', display: 'block' }} cols={1} rowHeight={100}>
        {[{
          title: 'Caro',
          desc: <Typography>Shopify widget backed by an auction engine</Typography>,
          img: <Link href={"https://caro.bid"} target={"_blank"}><img style={{backgroundColor: 'white'}} src={'caro-black.png'} width={'150em'} height={'250em'}/></Link>
        }, {
          title: 'Vellum',
          desc: <Typography>decentralized Docusign</Typography>,
          img: <Link href={"https://onvellum.com"} target={"_blank"}><Vellum width={100} height={65} /></Link>
        }, {
          title: 'Manna',
          desc: <div style={{overflow: "hidden", textOverflow: "ellipsis", width: '60rem', height: 60}}>
            <Typography noWrap>
              3d web platform for autonomous drone flight path
              <br/>
              planning in urban environments
            </Typography>
          </div>,
          img: <Link href={'https://www.manna.aero'} target={"_blank"}><Manna width={100} height={100}/></Link>
        }].map(({title, img, desc}, i) => (
          <ImageListItem key={`image${i}`}>
            {img}
            <ImageListItemBar
              //title={}
              subtitle={desc}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </>
  },
  {
    icon: <FilterDrama/>,
    title: 'Backend',
    description:
      'distributed systems. infra. devops',
    content: <Typography variant={"body1"}>
        we've built a variety of distributed systems:
        <List disablePadding={true} dense={true} sx={{ marginLeft: 2, listStyleType: 'disc', padding: 0 }}>
            <ListItem disablePadding={true} sx={{ display: 'list-item', py: 1 }}>
                realtime message based backends on Node (Deno)
            </ListItem>
            <ListItem disablePadding={true} sx={{ display: 'list-item', py: 1 }}>
                HFT-like order books and infrastructure tools like jobs, queues, GRPC macro frameworks in Rust
            </ListItem>
            <ListItem disablePadding={true} sx={{ display: 'list-item', py: 1 }}>
                high traffic Scala backends against MongoDB
            </ListItem>
            <ListItem disablePadding={true} sx={{ display: 'list-item', py: 1 }}>
                high availability object graph service in Go backed by sharded MySQL
                and Elasticsearch for search with numerous asynchronous processing pipelines
            </ListItem>
            <ListItem disablePadding={true} sx={{ display: 'list-item', py: 4 }}>
              and we have experience in CI/CD, spinning up infra in Terraform (primarily in AWS), standing up and managing Kubernetes clusters, observability pipelines, and anything else needed to get
              things live
            </ListItem>
        </List>
    </Typography>
  },
  {
    icon: <Gavel />,
    title: 'Smart contracts',
    description:
      'writing and auditing',
    content: <Typography variant={"body1"}>
        we have experience building and scaling blockchain networks against Ethereum and Solana. Things like token bridges,
        burn-and-mint equilibrium models, cNFTs for entity management, and the off chain components needed to make things go.
      <br/>
      <br/>
        we also have extensive experience writing and auditing smart contracts on Solana
    </Typography>
  },
];

export default function Services() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Services
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
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
                minHeight: 50,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {selectedFeature.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                {selectedFeature.description}
              </Typography>
              {selectedFeature.content}
              {/*<Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link>*/}
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
            {items.map(({ content, icon, title, description }, index) => (
              <Card
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
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
                    {icon}
                  </Box>
                  <div>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
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
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link>
                  </div>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
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
            }}
          >
            <Box
              sx={{
                m: '0 auto',
                display: 'block',
                p: 3,
                width: 420,
                height: 500,
                backgroundSize: 'contain',
              }}
            >
              {items[selectedItemIndex].content}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
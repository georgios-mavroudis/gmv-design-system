import { FC } from "react";
import { GmButton } from "./GmButton/GmButton";
import { Box, List, ListItem, Typography } from "@mui/material";

export const Some: FC = () => {
  return (
    <>
      <GmButton>howdy</GmButton>
      <Box>
        <Typography variant='h1'>Headline 1</Typography>
        <Typography variant='h2'>Headline 2</Typography>
        <Typography variant='h3'>Headline 3</Typography>
        <Typography variant='h4'>Headline 4</Typography>
        <Typography variant='h5'>Headline 5</Typography>
        <Typography variant='h6'>Headline 6</Typography>
        <Typography variant='body1'>body 1</Typography>
        <Typography variant='body2'>body 2</Typography>
        <Typography variant='subtitle1'>subtitle 1</Typography>
        <Typography variant='subtitle2'>subtitle 2</Typography>
        < br/>
        <Typography variant='button'>button</Typography>
        < br/>
        <Typography variant='caption'>caption</Typography>
        < br/>
        <Typography variant='overline'>overline</Typography>
        <List>
          <ListItem>Apply theme provider to globals in storybook</ListItem>
          <ListItem>Responsive Theme</ListItem>
          <ListItem>secondary colors</ListItem>
          <ListItem>disabled color</ListItem>
          <ListItem>Grid</ListItem>
          <ListItem>Components</ListItem>
        </List>
        <Typography>Nest</Typography>
        <List>
          <ListItem>Static pages with</ListItem>
          <ListItem>first page a little about me</ListItem>
          <ListItem>CV</ListItem>
          <ListItem>contact</ListItem>
          <ListItem>my projects</ListItem>
          <ListItem>nest/ express backend</ListItem>
          <ListItem>docker image</ListItem>
          <ListItem>CI</ListItem>
          <ListItem>AWS deployment</ListItem>

        </List>
        <Typography>a project with clustering of all the ecgs from the apple watch</Typography>
        <List>
          <ListItem>on webGL</ListItem>
          <ListItem>on canvas</ListItem>
          <ListItem>on d3</ListItem>
          <ListItem>make a grap of points as well</ListItem>
          <ListItem>be careful of patent infringement</ListItem>
        </List>
        <Typography>mobile app for premier league</Typography>
        <List>
          <ListItem>requests from my backend</ListItem>
          <ListItem>react native</ListItem>
          <ListItem>use openai maybe to predict future projections of players and teams</ListItem>
        </List>
        <Typography>unfollowers</Typography>
        <List>
          <ListItem>native ios</ListItem>
          <ListItem>native android</ListItem>
        </List>
        <Typography>mobile app with apple watch (fitness data)???</Typography>
        <List>
          <ListItem>native ios</ListItem>
          <ListItem>native android</ListItem>
        </List>
        <Typography>mobile app maps???</Typography>
        <List>
          <ListItem>native ios</ListItem>
          <ListItem>native android</ListItem>
        </List>
      </Box>
    </>
  );
}
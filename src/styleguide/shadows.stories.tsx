import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { GmThemeProvider, theme } from "./theme";
import { BLACK, GmBox, PRIMARY_500, PRIMARY_A200, WHITE } from "../components/gm-box/gm-box";

const white = theme.palette.common.white;
const black = theme.palette.common.black;
const primary_900 = theme.palette.primary.dark;
const primary_A400 = theme.palette.primary.main;
const primary_A200 = theme.palette.primary.light;

const meta: Meta<typeof GmBox & { boxColor: InputType }> = {
  component: Box,
  args: {
    inset: '',
    offsetX: 0,
    offsetY: 0,
    blurRadius: 0,
    spreadRadius: 0,
    opacity: 0,
    rgb: BLACK,
    bgcolor: primary_A200,
    boxColor: primary_900,
  },
  argTypes: {
    boxColor: {
      control: 'select',
      options: {white , black, primary_900, primary_A200, primary_A400},
    },
    bgcolor: {
      label: 'some',
      
      control: { type: 'select' },
      options: {white, black, primary_900, primary_A200, primary_A400},
    },
    inset: {
      control: 'select',
      options: ['', 'inset'],
    },
    offsetX: {
      control: {
        type: 'range',
        min: 0,
        max: 40,
        step: 0.1, 
      },
    },
    offsetY: {
      control: {
        type: 'range',
        min: 0,
        max: 40,
        step: 0.1, 
      },
    },
    blurRadius: {
      control: {
        type: 'range',
        min: 0,
        max: 40,
        step: 0.1, 
      },
    },
    spreadRadius: {
      control: {
        type: 'range',
        min: 0,
        max: 40,
        step: 0.1, 
      },
    },
    opacity: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1, 
      },
    },
    rgb: {
      control: 'select',
      defaultValue: BLACK,
      options: {
        white: WHITE, 
        black: BLACK, 
        primary_500: PRIMARY_500, 
        primary_A200: PRIMARY_A200
      },
    },
  },
}

export default meta;
type Story = StoryObj<typeof GmBox>;

export const Playground: Story = {
  render: (props) => (
    <GmThemeProvider>
    <Box bgcolor={props.boxColor} p={2}>
      <GmBox width={200} height={200} bgcolor='primary.A400' boxShadow={13} border='none'></GmBox>
      <GmBox width={200} height={200} bgcolor='primary.A400' boxShadow={14} border='none'></GmBox>
      <GmBox width={200} height={200} bgcolor='primary.A400' boxShadow={15} border='none'></GmBox>
    </Box>
    </GmThemeProvider>
  )
}

export const Shadows: Story = {
  render: () => (
    <GmThemeProvider>
      <Box display='flex' flexDirection='row' >
        <GmBox boxShadow={0}>shadow 0</GmBox>
        <GmBox boxShadow={1} bgcolor='primary.A400'>shadow 1</GmBox>
        <GmBox boxShadow={2} bgcolor='primary.A400'>shadow 2</GmBox>
        <GmBox boxShadow={3} bgcolor='primary.A400'>shadow 2</GmBox>
      </Box>
      <Box display='flex' flexDirection='row' bgcolor='primary.900'>
        <GmBox boxShadow={4} bgcolor='primary.A400'>shadow 3</GmBox>
        <GmBox boxShadow={5} bgcolor='primary.A400'>shadow 4</GmBox>
        <GmBox boxShadow={6} bgcolor='primary.A400'>shadow 5</GmBox>
      </Box>
      <Box display='flex' flexDirection='row' bgcolor='primary.900'>
        <GmBox boxShadow={7} bgcolor='primary.A400'>shadow 6</GmBox>
        <GmBox boxShadow={8} bgcolor='primary.A400'>shadow 7</GmBox>
        <GmBox boxShadow={9} bgcolor='primary.A400'>shadow 8</GmBox>
      </Box>
      <Box display='flex' flexDirection='row' bgcolor='primary.900'>
        <GmBox boxShadow={10} bgcolor='primary.A400'>shadow 10</GmBox>
        <GmBox boxShadow={11} bgcolor='primary.A400'>shadow 11</GmBox>
        <GmBox boxShadow={12} bgcolor='primary.A400'>shadow 12</GmBox>
      </Box>
      <Box display='flex' flexDirection='row' bgcolor='primary.900'>
        <GmBox boxShadow={13} bgcolor='primary.A400'>shadow 13</GmBox>
        <GmBox boxShadow={14} bgcolor='primary.A400'>shadow 14</GmBox>
        <GmBox boxShadow={15} bgcolor='primary.A400'>shadow 15</GmBox>
      </Box>
    </GmThemeProvider>
  )
}

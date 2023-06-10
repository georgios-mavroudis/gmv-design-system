import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { GmThemeProvider } from "./theme";
import { GmBox } from "../components/gm-box/gm-box";


const meta: Meta<typeof GmBox> = {
  component: GmBox,
}

export default meta;
type Story = StoryObj<typeof GmBox>;

export const Primary: Story = {
  render: () => (
    <GmThemeProvider>
      <Box display='flex' flexDirection='column' pr={3}>
        <Box>Primary</Box>
        <Box display='flex' flexDirection='row'>
          <GmBox bgcolor='primary.50' height={50}>primary.50</GmBox>
          <GmBox bgcolor='primary.100' height={50}>primary.100</GmBox>
          <GmBox bgcolor='primary.200' height={50}>primary.200</GmBox>
          <GmBox bgcolor='primary.300' height={50}>primary.300</GmBox>
          <GmBox bgcolor='primary.400' height={50}>primary.400</GmBox>
          <GmBox bgcolor='primary.500' height={50}>primary.500</GmBox>
          <GmBox bgcolor='primary.600' height={50} color='white'>primary.600</GmBox>
          <GmBox bgcolor='primary.700' height={50} color='white'>primary.700</GmBox>
          <GmBox bgcolor='primary.800' height={50} color='white'>primary.800</GmBox>
          <GmBox bgcolor='primary.900' height={50} color='white'>primary.900</GmBox>
        </Box>
        <Box display='flex' flexDirection='row'>  
          <GmBox bgcolor='primary.A100' height={50}>primary.A100</GmBox>
          <GmBox bgcolor='primary.A200' height={50}>primary.A200</GmBox>
          <GmBox bgcolor='primary.A400' height={50}>primary.A400</GmBox>
          <GmBox bgcolor='primary.A700' height={50}>primary.A700</GmBox>
        </Box>
        <Box>Error</Box>
        <Box display='flex' flexDirection='row'>
          <GmBox bgcolor='error.50' height={50}>error.50</GmBox>
          <GmBox bgcolor='error.100' height={50}>error.100</GmBox>
          <GmBox bgcolor='error.200' height={50}>error.200</GmBox>
          <GmBox bgcolor='error.300' height={50}>error.300</GmBox>
          <GmBox bgcolor='error.400' height={50}>error.400</GmBox>
          <GmBox bgcolor='error.500' height={50}>error.500</GmBox>
          <GmBox bgcolor='error.600' height={50} color='white'>error.600</GmBox>
          <GmBox bgcolor='error.700' height={50} color='white'>error.700</GmBox>
          <GmBox bgcolor='error.800' height={50} color='white'>error.800</GmBox>
          <GmBox bgcolor='error.900' height={50} color='white'>error.900</GmBox>
        </Box>
        <Box>success</Box>
        <Box display='flex' flexDirection='row'>
          <GmBox bgcolor='success.50' height={50}>success.50</GmBox>
          <GmBox bgcolor='success.100' height={50}>success.100</GmBox>
          <GmBox bgcolor='success.200' height={50}>success.200</GmBox>
          <GmBox bgcolor='success.300' height={50}>success.300</GmBox>
          <GmBox bgcolor='success.400' height={50}>success.400</GmBox>
          <GmBox bgcolor='success.500' height={50}>success.500</GmBox>
          <GmBox bgcolor='success.600' height={50} color='white'>success.600</GmBox>
          <GmBox bgcolor='success.700' height={50} color='white'>success.700</GmBox>
          <GmBox bgcolor='success.800' height={50} color='white'>success.800</GmBox>
          <GmBox bgcolor='success.900' height={50} color='white'>success.900</GmBox>
        </Box>
        <Box>neutral</Box>
        <Box display='flex' flexDirection='row'>
          <GmBox bgcolor='neutral.50' height={50}>neutral.50</GmBox>
          <GmBox bgcolor='neutral.100' height={50}>neutral.100</GmBox>
          <GmBox bgcolor='neutral.200' height={50}>neutral.200</GmBox>
          <GmBox bgcolor='neutral.300' height={50}>neutral.300</GmBox>
          <GmBox bgcolor='neutral.400' height={50}>neutral.400</GmBox>
          <GmBox bgcolor='neutral.500' height={50}>neutral.500</GmBox>
          <GmBox bgcolor='neutral.600' height={50} color='white'>neutral.600</GmBox>
          <GmBox bgcolor='neutral.700' height={50} color='white'>neutral.700</GmBox>
          <GmBox bgcolor='neutral.800' height={50} color='white'>neutral.800</GmBox>
          <GmBox bgcolor='neutral.900' height={50} color='white'>neutral.900</GmBox>
        </Box>
      </Box>
    </GmThemeProvider>
  )
}

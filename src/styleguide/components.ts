import { Components } from "@mui/material";
import { shadow } from "./shadows";
import { primary } from "./palette";

export const components: Components = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'text' },
        style: {
          boxShadow: 'none',
        },
      },
      // {
      //   props: { variant: 'contained' },
      //   style: {
      //     '&:hover': {
      //       backgroundColor: primary.A200,
  
      //     },
      //     '&:active': {
      //       boxShadow: shadow.high,
      //       backgroundColor: 'red',
      //       animation: 'none',
      //     },
      //   },
      // }
    ],
    styleOverrides: {
      root: {
        textTransform: 'lowercase',
        boxShadow: shadow.high,
        cursor: 'pointer',
        // style: {
        //   "&:disabled": {
        //     cursor: 'not-allowed',
        //   },
        // }
      },
      disabled: {
        cursor: 'not-allowed'
      },
    }
  },
} 
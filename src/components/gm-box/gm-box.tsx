import { Box, BoxProps } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const WHITE = '255, 255, 255';
export const BLACK = '0, 0, 0';
export const PRIMARY_500 = '0, 142, 143';
export const PRIMARY_A200 = '84, 248, 234';

interface Props {
  inset?: 'inset' | '';
  offsetX?: number;
  offsetY?: number;
  blurRadius?: number;
  spreadRadius?: number;
  rgb?: typeof PRIMARY_A200 | typeof PRIMARY_500 | typeof WHITE | typeof BLACK;
  opacity?: number,
}
export const GmBox: FC<PropsWithChildren<BoxProps & Props>> = ({ 
  children, 
  inset = '',
  offsetX,
  offsetY,
  blurRadius,
  spreadRadius,
  opacity,
  rgb,
  ...boxProps 
}) => {
  return (
    <Box
      height={100}
      width={100}
      margin={4}
      display='flex'
      alignItems='center'
      justifyContent='center'
      border='1px solid'
      borderRadius={1}
      borderColor='neutral.300'
      boxShadow={`${inset} ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px rgba(${rgb}, ${opacity})`}
      {...boxProps}
    >
      {children}
    </Box>
  );
}
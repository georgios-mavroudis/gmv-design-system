import { Button, ButtonProps } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface Props {
  variant?: 'text' | 'outlined' | 'contained',
}
export const GmButton: FC<PropsWithChildren<ButtonProps & Props>> = ({ children, variant = 'contained', ...props }) => {
  return (
    <Button {...props} variant={variant}>
      {children}
    </Button>
  )
}
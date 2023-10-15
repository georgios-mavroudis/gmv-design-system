import { Grid } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const GmGrid: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid>{children}</Grid>
  );
}
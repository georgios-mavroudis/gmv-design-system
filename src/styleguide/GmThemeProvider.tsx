import { ThemeProvider } from "@emotion/react";
import { CssBaseline, PaletteMode, createTheme, responsiveFontSizes } from "@mui/material";
import { FC, PropsWithChildren, useMemo } from "react";
import { darkPalette, lightPalette } from "./palette";
import { spacing } from "./spacing";
import { typography } from "./Typography";
import { components } from "./components";
// import { theme } from "./theme";

interface Props {
  mode?: PaletteMode;
}

export const GmThemeProvider: FC<PropsWithChildren<Props>> = ({ children, mode = 'dark' }) => {
  const theme = useMemo(() => responsiveFontSizes(createTheme({
    spacing,
    typography, 
    // shadows,
    shape: {
      borderRadius: 10,
    },
    components,
    palette: {
      mode,
      ...(mode === 'light' 
      ? lightPalette
      : darkPalette
      )
    }
  })), [mode]);

  return (
    <ThemeProvider theme={theme}><CssBaseline />{children}</ThemeProvider>
  );
}
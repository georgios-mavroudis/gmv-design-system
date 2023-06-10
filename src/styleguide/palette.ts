import { PaletteColorOptions, PaletteOptions, TypeText } from "@mui/material";

const common = {
  white: '#ffffff',
  black: '#000000',
};

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral: PaletteColorOptions,
  }
}

const primary: PaletteColorOptions = { 
  50: '#E4EAEB',
  100: '#B5D6D8',
  200: '#84C1C5',
  300: '#4FACB0',
  400: '#259EA1',
  500: '#008E8F',
  600: '#008080',
  700: '#0B7271',
  800: '#006361',
  900: '#034643',
  A100: '#A6F8F2',
  A200: '#54F8EA',
  A400: '#00E1CA',
  A700: '#00B7B1',
}

const error: PaletteColorOptions = { 
  50: '#FFDFD2',
  100: '#F6BDB6',
  200: '#D99B95',
  300: '#BC7972',
  400: '#A76059',
  500: '#90443F',
  600: '#833C39',
  700: '#712E2E',
  800: '#632328',
  900: '#52151E',
}

// const warning: PaletteColorOptions = {

// }
const s = primary['A200'];
const success: PaletteColorOptions = { 
  50: '#DEFCCB',
  100: '#BFECAD',
  200: '#9ED986',
  300: '#8AC975',
  400: '#67BC3F',
  500: '#4FB018',
  600: '#44A20D',
  700: '#358E00',
  800: '#277E00',
  900: '#116000',
}

const neutral: PaletteColorOptions = { 
  50: '#D4D4D4',
  100: '#CFCFCF',
  200: '#C9C9C9',
  300: '#BBBBBB',
  400: '#989898',
  500: '#7C7C7C',
  600: '#555555',
  700: '#424242',
  800: '#252525',
  900: '#000000',
}

const text: TypeText = {
  primary: common.white,
  secondary: 'secondary',
  disabled: '#989898',
}


export const palette: PaletteOptions = {
  primary: {
    main: primary.A400 as string,
    ...primary,
  },
  error,
  background: {
    default: primary[900],
  },
  // warning,
  success,
  neutral,
  text,
  common,
}
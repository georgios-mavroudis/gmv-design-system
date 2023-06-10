import { TypographyOptions } from "@mui/material/styles/createTypography"

// headlines quicksand
const h1 = {
  fontFamily: 'quicksand',
  fontWeight: 'light',
  fontSize: 100,
  letterSpacing: -1.5,
}

const h2 = {
  fontFamily: 'quicksand',
  fontWeight: 'light',
  fontSize: 62,
  letterSpacing: -0.5,
}

const h3 = {
  fontFamily: 'quicksand',
  fontWeight: 'Normal',
  fontSize: 50,
  letterSpacing: 0, // maybe it is 0 by default
}

const h4 = {
  fontFamily: 'quicksand',
  fontWeight: 'Normal',
  fontSize: 35,
  letterSpacing: 0.25,
}

const h5 = {
  fontFamily: 'quicksand',
  fontWeight: 'Normal',
  fontSize: 25,
  letterSpacing: 0, // maybe it is 0 by default
}

const h6 = {
  fontFamily: 'quicksand',
  fontWeight: 'Medium',
  fontSize: 21,
  letterSpacing: 0.15,
}

const subtitle1 = {
  fontFamily: 'quicksand',
  fontWeight: 'Normal',
  fontSize: 17,
  letterSpacing: 0.15,
}

const subtitle2 = {
  fontFamily: 'quicksand',
  fontWeight: 'Medium',
  fontSize: 15,
  letterSpacing: 0.1,
}

// body Mukta
const body1 = {
  fontFamily: 'mukta',
  fontWeight: 'Normal',
  fontSize: 18,
  letterSpacing: 0.5,
}

const body2 = {
  fontFamily: 'mukta',
  fontWeight: 'Normal',
  fontSize: 16,
  letterSpacing: 0.25,
}

const button = {
  fontFamily: 'mukta',
  fontWeight: 'Medium',
  fontSize: 16,
  letterSpacing: 1.25,
}

const caption = {
  fontFamily: 'mukta',
  fontWeight: 'Normal',
  fontSize: 14,
  letterSpacing: 0.4,
}

const overline = {
  fontFamily: 'mukta',
  fontWeight: 'Normal',
  fontSize: 11,
  letterSpacing: 1.5,
}

export const typography: TypographyOptions = {
  fontFamily: ['quicksand', 'mukta'].join(','),
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  subtitle1,
  subtitle2,
  body1,
  body2,
  button,
  caption,
  overline
}
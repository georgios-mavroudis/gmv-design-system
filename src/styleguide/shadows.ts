import { Shadows } from "@mui/material";

const rgbaString = (shadowColor: [number, number, number], opacityFactor: number) => 
  `rgba(${[...shadowColor, opacityFactor].join(',')})`;

// black 
const blackShadowLow = rgbaString([0, 0, 0], 0.34);
const blackShadowMedium = rgbaString([0, 0, 0], 0.36);
const blackShadowHigh = rgbaString([0, 0, 0], 0.14);

// primary.A200
const primaryAShadowLow = rgbaString([84, 248, 234], 0.34);
const primaryAShadowMedium = rgbaString([84, 248, 234], 0.36);
const primaryAShadowHigh = rgbaString([84, 248, 234], 0.14);

// primary.500
const primaryShadowLow = rgbaString([0, 142, 143], 0.34);
const primaryShadowMedium = rgbaString([0, 142, 143], 0.36);
const primaryShadowHigh = rgbaString([0, 142, 143], 0.14);

// white
const whiteShadowLow = rgbaString([255, 255, 255], 0.34);
const whiteShadowMedium = rgbaString([255, 255, 255], 0.36);
const whiteShadowHigh = rgbaString([255, 255, 255], 0.14);

const primaryA400Low = rgbaString([0, 0, 0], 0.4)
const primaryA400High = rgbaString([0, 0, 0], 0.7)
export const shadow = {
  primary_A_400: `1.8px 1.8px 2.5px ${primaryA400Low}, 2.5px 2.5px 2.5px 1.1px ${primaryA400Low}, 5px 5px 8.5px 2px ${primaryA400High}`,
  primary_A_400_medium: `2.5px 2.5px 2.5px 1.1px ${primaryA400Low}`,
  primary_A_400_high: `5px 5px 8.5px 2px ${primaryA400High}`,
  low:
    `0.2px 0.2px 0.3px ${blackShadowLow}, 0.3px 0.3px 0.5px -1.2px ${blackShadowLow}, 0.8px 0.8px 1.3px -2.5px ${blackShadowLow}`,
  medium:
    `0.2px 0.2px 0.3px ${blackShadowMedium}, 0.6px 0.7px 1px -0.8px ${blackShadowMedium}, 1.6px 1.7px 2.6px -1.7px ${blackShadowMedium}, 3.8px 4.2px 6.4px -2.5px ${blackShadowMedium}`,
  high:
    `0.2px 0.2px 0.3px ${blackShadowHigh}, 1.1px 1.2px 1.8px -0.4px ${blackShadowHigh}, 2.1px 2.3px 3.5px -0.7px ${blackShadowHigh}, 3.4px 3.8px 5.7px -1.1px ${blackShadowHigh}, 5.5px 6px 9.2px -1.4px ${blackShadowHigh}, 8.6px 9.4px 14.3px -1.8px ${blackShadowHigh}, 13px 14.3px 21.7px -2.1px ${blackShadowHigh}, 19.2px 21px 32px -2.5px ${blackShadowHigh}`,
  // shadow color: 
  primary_A_low:
    `0.2px 0.2px 0.3px ${primaryAShadowLow}, 0.3px 0.3px 0.5px -1.2px ${primaryAShadowLow}, 0.8px 0.8px 1.3px -2.5px ${primaryAShadowLow}`,
  primary_A_medium:
    `0.2px 0.2px 0.3px ${primaryAShadowMedium}, 0.6px 0.7px 1px -0.8px ${primaryAShadowMedium}, 1.6px 1.7px 2.6px -1.7px ${primaryAShadowMedium}, 3.8px 4.2px 6.4px -2.5px ${primaryAShadowMedium}`,
  primary_A_high:
    `0.2px 0.2px 0.3px ${primaryAShadowHigh}, 1.1px 1.2px 1.8px -0.4px ${primaryAShadowHigh}, 2.1px 2.3px 3.5px -0.7px ${primaryAShadowHigh}, 3.4px 3.8px 5.7px -1.1px ${primaryAShadowHigh}, 5.5px 6px 9.2px -1.4px ${primaryAShadowHigh}, 8.6px 9.4px 14.3px -1.8px ${primaryAShadowHigh}, 13px 14.3px 21.7px -2.1px ${primaryAShadowHigh}, 19.2px 21px 32px -2.5px ${primaryAShadowHigh}`,
  primary_low:
    `0.2px 0.2px 0.3px ${primaryShadowLow}, 0.3px 0.3px 0.5px -1.2px ${primaryShadowLow}, 0.8px 0.8px 1.3px -2.5px ${primaryShadowLow}`,
  primary_medium:
    `0.2px 0.2px 0.3px ${primaryShadowMedium}, 0.6px 0.7px 1px -0.8px ${primaryShadowMedium}, 1.6px 1.7px 2.6px -1.7px ${primaryShadowMedium}, 3.8px 4.2px 6.4px -2.5px ${primaryShadowMedium}`,
  primary_high:
    `0.2px 0.2px 0.3px ${primaryShadowHigh}, 1.1px 1.2px 1.8px -0.4px ${primaryShadowHigh}, 2.1px 2.3px 3.5px -0.7px ${primaryShadowHigh}, 3.4px 3.8px 5.7px -1.1px ${primaryShadowHigh}, 5.5px 6px 9.2px -1.4px ${primaryShadowHigh}, 8.6px 9.4px 14.3px -1.8px ${primaryShadowHigh}, 13px 14.3px 21.7px -2.1px ${primaryShadowHigh}, 19.2px 21px 32px -2.5px ${primaryShadowHigh}`,
  white_low:
    `0.2px 0.2px 0.3px ${whiteShadowLow}, 0.3px 0.3px 0.5px -1.2px ${whiteShadowLow}, 0.8px 0.8px 1.3px -2.5px ${whiteShadowLow}`,
  white_medium:
    `0.2px 0.2px 0.3px ${whiteShadowMedium}, 0.6px 0.7px 1px -0.8px ${whiteShadowMedium}, 1.6px 1.7px 2.6px -1.7px ${whiteShadowMedium}, 3.8px 4.2px 6.4px -2.5px ${whiteShadowMedium}`,
  white_high:
    `0.2px 0.2px 0.3px ${whiteShadowHigh}, 1.1px 1.2px 1.8px -0.4px ${whiteShadowHigh}, 2.1px 2.3px 3.5px -0.7px ${whiteShadowHigh}, 3.4px 3.8px 5.7px -1.1px ${whiteShadowHigh}, 5.5px 6px 9.2px -1.4px ${whiteShadowHigh}, 8.6px 9.4px 14.3px -1.8px ${whiteShadowHigh}, 13px 14.3px 21.7px -2.1px ${whiteShadowHigh}, 19.2px 21px 32px -2.5px ${whiteShadowHigh}`,
}

export const shadows: Shadows = [
  "none",
  shadow.low,
  shadow.medium,
  shadow.high,
  // shadow.primary_A_low,
  // shadow.primary_A_medium,
  // shadow.primary_A_high,
  // shadow.primary_low,
  // shadow.primary_medium,
  // shadow.primary_high,
  // shadow.white_low,
  // shadow.white_medium,
  // shadow.white_high,
  shadow.primary_A_400,
  shadow.primary_A_400_medium,
  shadow.primary_A_400_high,
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
]
  
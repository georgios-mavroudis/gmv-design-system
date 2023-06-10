type SpacingOptions = (abs: number) => string | number;
const spaces = [
  /*0*/'0rem', // 0px
  /*1*/'0.2rem', // 2px
  /*2*/'0.4rem', // 4px
  /*3*/'0.8rem', // 8px
  /*4*/'1.6rem', // 16px
  /*5*/'2.4rem', // 24px
  /*6*/'3.2rem', // 32px
  /*7*/'4.0rem', // 40px
  /*8*/'6.4rem', // 64px
  /*9*/'12.8rem', // 128px
]
export const spacing: SpacingOptions = (factor: number) => {
  if (spaces[factor] == null) {
    throw new Error(`Factor should be less than ${spaces.length}!!!`);
  } 
  return spaces[factor];
}



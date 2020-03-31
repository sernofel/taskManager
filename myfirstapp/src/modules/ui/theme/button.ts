import { purplePalette, commonPalette, greyPalette, bluePalette, redPalette } from './colors'

const buttonOverride = {
  MuiButton: {
    root: {
      '& span': {
        textTransform: 'uppercase',
      },
      '&.tryAgain': {
        backgroundColor: redPalette[400],
        color: commonPalette.white,
        '&:hover': {
          color: commonPalette.white,
          backgroundColor: redPalette[500],
        },
        '&.disabled': {
          opacity: 0.4,
        },
      },
    },
    contained: {
      backgroundColor: purplePalette[500],
      color: commonPalette.white,
      padding: '7px 32px',
      transition: 'all 0.2s',
      boxShadow:
        '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);',
      '&:hover': {
        backgroundColor: commonPalette.white,
      },
      '&:active': {
        boxShadow:
          '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);',
      },
      '&:disabled': {
        backgroundColor: greyPalette[400],
        color: commonPalette.white,
        opacity: '0.4',
      },
      '&.tryAgain': {
        backgroundColor: redPalette[400],
        '&:hover': {
          color: commonPalette.white,
          backgroundColor: redPalette[500],
        },
        '&.disabled': {
          opacity: 0.4,
        },
      },
    }
  },
}

export default buttonOverride

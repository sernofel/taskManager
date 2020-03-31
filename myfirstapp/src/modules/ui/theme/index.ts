import { redPalette, purplePalette, ColorsPalette, commonPalette, bluePalette, greyPalette } from "./colors"
import { createMuiTheme, ThemeOptions } from "@material-ui/core"
import fonts from './fonts'
import breakpoints from './breakpoints'
import buttonOverride from "./button"

export interface CustomTheme extends ThemeOptions {
  palette: ColorsPalette
  overrides?: any
  spacing?: any
}

const customTheme: CustomTheme = {
  overrides: {
    ...buttonOverride
  },
  spacing: 4,
  palette: {
    colors: {
      red: redPalette,
      purple: purplePalette,
      grey: greyPalette
    },
    primary: {
      main: purplePalette[400],
      light: purplePalette[300],
      dark: purplePalette[500],
    },
    secondary: {
      main: bluePalette[400],
      light: bluePalette[400],
      // dark: purplePalette[400],
    },
    error: {
      main: redPalette[500],
      light: redPalette[400],
    },
    text: {
      primary: commonPalette.black,
      // secondary: commonPalette.white,
    },
    action: {
      disabled: greyPalette[300],
    }
  },
  typography: {
    fontFamily: fonts.primary,
    fontSize: 16,
    h1:{
      fontSize: fonts.size.xlarge,
      lineHeight: 1.29,
      [breakpoints.up('sm')]: {
        fontSize: fonts.size.big,
        lineHeight: 1.3
      }
    },
    h2: {
      fontSize: fonts.size.base,
      lineHeight: 1.5,
      fontWeight: 500,
      [breakpoints.up('sm')]: {
        fontSize: fonts.size.medium,
        lineHeight: 1.3
      }
    },
    body1: {
      color: greyPalette[400],
      fontFamily: fonts.primary,
      fontSize: fonts.size.base
    },
  },
  breakpoints
}

const theme = createMuiTheme(customTheme)

export default theme
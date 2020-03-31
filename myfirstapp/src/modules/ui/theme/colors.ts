import { PaletteOptions } from "@material-ui/core/styles/createPalette"

export interface ColorsPalette extends PaletteOptions {
  colors?: {
    [key: string]: {
      50?: string
      100?: string
      200?: string
      300?: string
      400?: string
      500?: string
      600?: string
      700?: string
      800?: string
      900?: string
    }
  }
  primary: any // TODO: Fix the problem with the PaletteColorOptions interface
}


export const purplePalette = {
  300: '#F7EDF7',
  400: '#9C5099',
  500: '#6A2375',
}

export const bluePalette = {
  300: '#e9f4ff',
  400: '#1467EB'
}

export const redPalette = {
  300: 'rgba(213, 60, 29, 0.1)',
  400: '#C95942',
  500: '#D53C1D',
}

export const greyPalette = {
  300: '#9b9b9b',
  400: '#444444',
  500: '#585858'
}

export const commonPalette = {
  white: '#fff',
  black: '#333',
}

export const greenPalette = {
  400: '#77d511',
  500: '#5EA610',
}
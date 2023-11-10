declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary']
  }
}

const palette = {
  primary: {
    main: '#32154f',
  },
  secondary: {
    main: '#ffb21b',
    light: '#687189',
    dark: '#f2af23',
  },
  neutral: {
    main: '#666869',
    light: '#d0d3d4',
    dark: '#3a3d3f',
  },
  error: {
    main: '#b00020',
  },
}

export default palette

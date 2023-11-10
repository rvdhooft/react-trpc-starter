// Update the Paper's variant prop options
declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    padded: true
  }
}

const componentOverrides = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingTop: '2rem',
        paddingBottom: '2rem',
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: '#fefff2',
      },
    },
  },
  MuiPaper: {
    variants: [
      {
        props: {
          variant: 'padded' as 'padded' | 'elevation' | 'outlined' | undefined,
        },
        style: {
          padding: '2rem',
        },
      },
    ],
  },
}

export default componentOverrides

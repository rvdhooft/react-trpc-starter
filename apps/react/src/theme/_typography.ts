const h1Size = 2
const headingStyles = {
  fontWeight: 300,
  fontFamily: '"Futura LT W01", "Helvetica Neue", Helvetica, Arial, sans-serif',
}

const typography = {
  fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  h1: {
    ...headingStyles,
    fontSize: `${h1Size}rem`,
  },
  h2: {
    ...headingStyles,
    fontSize: `${h1Size * 0.9}rem`,
  },
  h3: {
    ...headingStyles,
    fontSize: `${h1Size * 0.8}rem`,
  },
  h4: {
    ...headingStyles,
    fontSize: `${h1Size * 0.7}rem`,
  },
  h5: {
    ...headingStyles,
    fontSize: `${h1Size * 0.6}rem`,
  },
  h6: {
    ...headingStyles,
    fontSize: `${h1Size * 0.5}rem`,
  },
}

export default typography

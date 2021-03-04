import {
  container,
  title,
  main,
  whiteColor,
  mainRaised
} from '../nextjs-material-kit-pro'


const landingPageStyle = (theme) => ({
  container: {
    color: whiteColor,
    ...container,
    zIndex: "2"
  },

  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "120px",
    minHeight: "32px",
    color: whiteColor,
    textDecoration: "none",
    [theme.breakpoints.down("lg")]: {
            fontSize: '2rem',
      },
    [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
      },
      [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
            marginTop: '0px'
      },
      [theme.breakpoints.down('xs')]: {
            fontSize: '1.2rem',
      },
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  subtitleMain: {
    fontFamily: 'GothamProLight',
    paddingLeft: "12px",
    margin: "10px auto 0",
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  // subtitleMain: {
  //   fontFamily: 'GothamProLight',
  //   // fontSize: "1.2rem",
  //   paddingLeft: "12px",
  //   margin: "10px auto 0"
  // },
  main: {
    ...main
  },
  mainRaised: {
    ...mainRaised
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  }
});

export default landingPageStyle;

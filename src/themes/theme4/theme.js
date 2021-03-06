import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const colors = {
  c01: '#342734',
  c02: '#423242',
  c03: '#FFFFFF',
  c04: '#D452AF',
  c05: '#EADADA',
  c06: '#4D3A4D',
  c07: '#423242',
};

const fontFamily = 'Lato';

const theme = createMuiTheme({
  colors,
  fontFamily: fontFamily,
  mq: {
    Up800: '(min-width:800px)',
    Down500: '(max-width:500px)',
  },
});

export default theme;

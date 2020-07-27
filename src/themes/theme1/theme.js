import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const colors = {
  c01: '#0C1118',
  c02: '#1A2639',
  c03: '#FFFFFF',
  c04: '#C24D2C',
  c05: '#D9DAD7',
  c06: '#1A2639',
  c07: '#3E4A61',
};

const fontFamily = 'Lato';

const theme = createMuiTheme({
  colors,
  fontFamily,
  mq: {
    Up800: '(min-width:800px)',
    Down500: '(max-width:500px)',
  },
});

export default theme;

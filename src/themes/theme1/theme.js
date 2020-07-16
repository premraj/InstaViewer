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

const theme = createMuiTheme({
  colors,
  fontFamily: 'Lato',
  mq: {
    Up800: '(min-width:800px)',
    Down414: '(max-width:414px)',
  },
});

export default theme;

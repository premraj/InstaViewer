import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const colors = {
  c01: '#242323',
  c02: '#363434',
  c03: '#FFFFFF',
  c04: '#46B0C1',
  c05: '#EFECEC',
  c06: '#363434',
  c07: '#5C5757',
};

const fontFamily = 'Lato';

const theme = createMuiTheme({
  colors,
  fontFamily: fontFamily,
  mq: {
    Up800: '(min-width:800px)',
    Down500: '(max-width:500px)',
  },
  button: {
    backgroundColor: colors.c04,
    color: colors.c03,
    padding: '5px 8px',
    fontFamily: fontFamily,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    cursor: 'pointer',
    textAlign: 'center',
  },
});

export default theme;

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const colors = {
  c01: '#D72323',
  c02: '#F5EDED',
  c03: '#FFFFFF',
  c04: '#000000',
  c05: '#3E3636',
  c06: '#F5EDED',
  c07: '#EBDADA',
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
    backgroundColor: colors.c01,
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

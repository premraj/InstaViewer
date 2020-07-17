import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const colors = {
  c01: '#D59DC5',
  c02: '#825F78',
  c03: '#FFFFFF',
  c04: '#000000',
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
  button: {
    backgroundColor: colors.c01,
    color: colors.c04,
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

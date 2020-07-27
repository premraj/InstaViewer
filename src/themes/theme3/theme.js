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
  },
  topBarDrawer: {
    backgroundColor: colors.c07,
  },
  radioChecked: {
    color: colors.c01,
  },
  settingsIcon: {
    color: colors.c03,
  },
  searchBarInput: {
    backgroundColor: [colors.c07, colors.c02],
  },
});

export default theme;

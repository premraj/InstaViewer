import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const colors = {
  c01: '#F5C16C',
  c02: '#FCE3BB',
  c03: '#FFFFFF',
  c04: '#AA530E',
  c05: '#4E4A45',
  c06: '#F3EDED',
  c07: '#FCF6F6',
};

const fontFamily = 'Lato';

const theme = createMuiTheme({
  colors,
  fontFamily: fontFamily,
  mq: {
    Up800: '(min-width:800px)',
    Down500: '(max-width:500px)',
  },
  topBarDrawer: {
    backgroundColor: colors.c06,
  },
  radioChecked: {
    color: colors.c04,
  },
  searchBarInput: {
    backgroundColor: [colors.c07, colors.c02],
  },
});

export default theme;

import {withStyles} from '@material-ui/core';

export const GlobalCss = withStyles(
  (theme) => ({
    // @global is handled by jss-plugin-global.
    '@global': {
      '.MuiTableRow-head': {
        backgroundColor: theme.palette.primary.light,
      },
      '.MuiTableCell-head': {
        color: 'white',
        fontWeight: 'bold',
      },
    },
  }),
  {withTheme: true}
)(() => null);

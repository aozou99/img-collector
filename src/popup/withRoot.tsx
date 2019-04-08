import blueGrey from '@material-ui/core/colors/blueGrey';
// 任意の Theme Colors
import lightBlue from '@material-ui/core/colors/lightBlue';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';

const theme = createMuiTheme({
  // Theme Colors
  palette: {
    primary: lightBlue,
    secondary: blueGrey,
  },
  // typography
  typography: {
    useNextVariants: true,
  },
});

function withRoot<P>(Component: React.ComponentType<P>) {
  function withRootF(props: P) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return withRootF;
}

export default withRoot;

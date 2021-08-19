import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import Head from 'next/head';
import React from 'react';
import {createUseStyles} from 'react-jss';
import Menu from '../nav/Menu';

// material ui generator online: https://bareynol.github.io/mui-theme-creator/
const theme = createMuiTheme(
  {
    palette: {
      type: 'light',
      primary: {
        main: '#1D3557',
      },
      secondary: {
        main: '#457B9D',
      },
      background: {
        default: '#F1FAEE',
      },
    },
  },
  {
    foo: 'bar',
  }
);

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  main: {
    flex: 1,
  },
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Head>
          <link
            rel="preload"
            href="/fonts/B612/B612-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/B612/B612-Italic.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/B612/B612-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/B612/B612-BoldItalic.ttf"
            as="font"
            crossOrigin=""
          />
          <link rel="icon" href="/favicon/favicon.ico" />
        </Head>
        <Menu />
        <main className={classes.main}>{children}</main>
      </div>
    </ThemeProvider>
  );
}

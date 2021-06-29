import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import Head from 'next/head';
import React from 'react';
import Menu from './menu';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#F1FAEE',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  // TODO: Fix theming
  // const [theme, setTheme] = useState<Theme>();

  // useLayoutEffect(() => {
  //   const color = getComputedStyle(document.documentElement)
  //     .getPropertyValue('--color-imperial-red')
  //     .trim();

  //   setTheme(
  //     createMuiTheme({
  //       palette: {
  //         primary: {
  //           main: color,
  //         },
  //         secondary: {
  //           main: color,
  //         },
  //       },
  //     })
  //   );
  // }, []);

  return (
    <>
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: row;
        }
        .content {
          flex: 1;
          padding: 2rem 2rem;
        }
      `}</style>
      <div className="layout">
        <ThemeProvider theme={theme}>
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
          <main className="content">{children}</main>
        </ThemeProvider>
      </div>
    </>
  );
}

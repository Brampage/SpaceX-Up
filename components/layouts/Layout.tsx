import Head from 'next/head';
import React from 'react';
import {createUseStyles} from 'react-jss';
import Menu from '../nav/Menu';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  main: {
    flex: 1,
  },
});

export default function Layout({children}: {children: React.ReactNode}) {
  const classes = useStyles();

  return (
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
  );
}

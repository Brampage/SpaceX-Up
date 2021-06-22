import Head from 'next/head';

import styles from './layout.module.scss';

export default function Layout({children, home}: {children: React.ReactNode, home?: boolean}) {
  return (
    <div>
      <Head>
        <link rel="preload" href="/fonts/B612/B612-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/B612/B612-Italic.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/B612/B612-Bold.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/B612/B612-BoldItalic.ttf" as="font" crossOrigin="" />

        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}></div>
      )}
    </div>
  )
}
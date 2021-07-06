import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {},
  hero: {},
  heroText: {},
  title: {},
  header: {},
  headerImage: {},
  headerTitle: {},
  article: {}
});

export default function Hero({children}: {children: React.ReactNode}) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.hero}>
        <header className={classes.header}>
          <div className={classes.headerImage}></div>
          <div className={classes.headerTitle}></div>
        </header>
      </div>
      <article className={classes.article}>{children}</article>
    </div>
  );
}

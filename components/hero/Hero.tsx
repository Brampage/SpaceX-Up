import {makeStyles, Theme} from '@material-ui/core/styles';

const contentPadding = '4rem';

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative', // Used to position HeroBadgeHeader
  },
  article: {
    padding: `${contentPadding} ${contentPadding}`,
  },
}));

export default function Hero({children}: {children: React.ReactNode}) {
  const classes = useStyles();

  return <section className={classes.hero}>{children}</section>;
}

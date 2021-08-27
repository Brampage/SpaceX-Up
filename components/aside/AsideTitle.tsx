import {makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  asideTitle: {
    color: 'white',
    '& p:first-child': {
      marginTop: 0
    },
    borderBottom: '1px solid #cece',
  },
}));

export default function AsideTitle({children}: {children: React.ReactNode}) {
  const classes = useStyles();

  return <div className={classes.asideTitle}>{children}</div>;
}

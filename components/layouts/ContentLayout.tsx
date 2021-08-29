import {makeStyles} from '@material-ui/core';
import {Theme} from '@material-ui/core/styles';
import {appConfigVariables} from '../../styles/app-config-variables';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => ({
  article: {
    padding: `${appConfigVariables.contentPaddingTopBottom} ${appConfigVariables.contentPaddingLeftRight}`,
    '& *:first-child': {
      marginTop: 0,
    },
  },
  clear: {
    clear: 'both'
  }
}));

export default function ContentLayout({children}: {children: React.ReactNode}) {
  const classes = useStyles();

  return (
    <Paper>
      <article className={classes.article}>{children}</article>
      <div className={classes.clear}></div>
    </Paper>
  );
}

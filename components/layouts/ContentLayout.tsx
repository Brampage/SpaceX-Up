import {makeStyles} from '@material-ui/core';
import {Theme} from '@material-ui/core/styles';
import {appConfigVariables} from '../../styles/app-config-variables';

const useStyles = makeStyles((theme: Theme) => ({
  article: {
    padding: `${appConfigVariables.contentPaddingTopBottom} ${appConfigVariables.contentPaddingLeftRight}`,
    '& *:first-child': {
      marginTop: 0
    }
  },
}));

export default function Layout({children}: {children: React.ReactNode}) {
  const classes = useStyles();

  return <article className={classes.article}>{children}</article>;
}

import {makeStyles, Theme} from '@material-ui/core/styles';
import classNames from 'classnames';
import {appConfigVariables} from '../../styles/app-config-variables';
import {asideConfigVariables} from './aside-config-variables';

const useStyles = makeStyles((theme: Theme) => ({
  aside: {
    backgroundColor: theme.palette.primary.dark,
    // background: 'linear-gradient(180deg, hsla(215, 50%, 23%, 1) 0%, hsla(203, 39%, 44%, 1) 100%)',
    // filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#1D3557", endColorstr="#457B9D", GradientType=1 )',

    // background: 'linear-gradient(180deg, hsla(215, 50%, 23%, 1) 0%, hsla(203, 39%, 44%, 1) 100%)',
    // filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#1D3557", endColorstr="#457B9D", GradientType=1 )',

    // background: 'linear-gradient(0deg, hsla(215, 50%, 23%, 1) 0%, hsla(203, 39%, 44%, 1) 99%)',
    // filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#1D3557", endColorstr="#457B9D", GradientType=1 )',

    padding: asideConfigVariables.padding,
    marginBottom: asideConfigVariables.margin,
    marginTop: asideConfigVariables.margin,
    // offset-x | offset-y | blur-radius | spread-radius | color
    boxShadow: '0 1px 2px 1px rgba(0, 0, 0, 2)',
    borderRadius: 5,
    color: 'white',
    maxWidth: 450,
  },
  floatLeft: {
    float: 'left',
    marginRight: asideConfigVariables.margin,
  },
  floatRight: {
    float: 'right',
    marginLeft: asideConfigVariables.margin,
  },
}));

export default function Aside({
  float = 'right',
  children,
}: {
  float?: 'left' | 'right';
  children: React.ReactNode;
}) {
  const classes = useStyles({float});
  return (
    <aside
      className={classNames(
        classes.aside,
        {[classes.floatRight]: float === 'right'},
        {[classes.floatLeft]: float === 'left'}
      )}
    >
      {children}
    </aside>
  );
}

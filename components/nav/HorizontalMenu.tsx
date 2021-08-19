import {makeStyles, Theme} from '@material-ui/core';
import {appConfigVariables} from '../../styles/app-config-variables';

export interface MenuItem {
  label: string;
  href: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  nav: {
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    // offset-x | offset-y | blur-radius | spread-radius | color
    boxShadow: '0 1px 2px 1px rgba(0, 0, 0, 2)',
    '& a': {
      color: 'white',
      padding: `1.5rem ${appConfigVariables.contentPaddingLeftRight}`,
      zIndex: 9, // Move to front to prevent click on badgeHeader
    },
    '& a:active': {
      borderBottom: '0.5rem solid black',
      paddingBottom: '0.5rem',
    },
  },
}));

export default function HorizontalMenu({
  menuItems,
  xOffset,
}: {
  menuItems: MenuItem[];
  xOffset?: number;
}) {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      {menuItems?.map((x, i) => (
        <a
          style={i === 0 ? {marginLeft: xOffset} : {}}
          href={x.href}
          key={x.href}
        >
          {x.label}
        </a>
      ))}
    </nav>
  );
}

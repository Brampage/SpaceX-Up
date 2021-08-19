import {makeStyles, Theme} from '@material-ui/core';
import {appConfigVariables} from '../../../styles/app-config-variables';

export interface MenuItem {
  label: string;
  href: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  nav: {
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    // offset-x | offset-y | blur-radius | spread-radius | color
    boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 2)',
    '& a': {
      color: 'white',
      padding: `1.5rem ${appConfigVariables.contentPadding}`,
      zIndex: 9, // Move to front to prevent click on badgeHeader
    },
    // '& a:first-child': {
    //   marginLeft: `-${appConfigVariables.contentPadding}`,
    // },
    '& a:active': {
      borderBottom: '0.5rem solid black',
      paddingBottom: '0.5rem',
    },
  },
  // heroNav_noBadgePadding: {
  //   paddingLeft: appConfigVariables.contentPadding,
  // },
  // heroNav_badgePadding: {
  //   paddingLeft: `calc(${appConfigVariables.contentPadding} + ${heroConfigVariables.badgeImageSize} + ${appConfigVariables.contentPadding})`,
  // },
}));

export default function Nav({
  menuItems,
  xOffset,
}: {
  menuItems: MenuItem[];
  xOffset?: number;
}) {
  const classes = useStyles();
  return (
    <nav
      className={classes.nav}
      // className={classNames(classes.heroNav, {
      // [classes.heroNav_noBadgePadding]: !badgeImageUrl,
      // [classes.heroNav_badgePadding]: !!badgeImageUrl,
      // })}
    >
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

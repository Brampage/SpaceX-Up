import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import Link from 'next/link';
import {createUseStyles} from 'react-jss';

const drawerWidth = 60;

const useStyles = createUseStyles({
  drawer: {
    width: drawerWidth,
  },
});

const useMaterialStyles = makeStyles((theme: Theme) => {
  return createStyles({
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.light,
      overflowX: 'hidden'
    },
    iconRoot: {
      color: theme.palette.background.default,
    },
  });
});

export default function Menu() {
  const classes = useStyles();
  const materialClasses = useMaterialStyles();

  return (
    <nav className="menu">
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        classes={{
          paper: materialClasses.drawerPaper,
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <Link href="/">
            <ListItem button>
              <ListItemIcon
                classes={{
                  root: materialClasses.iconRoot,
                }}
              >
                <HomeIcon />
              </ListItemIcon>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link href="/launches">
            <a>
              <ListItem button>
                <ListItemIcon
                  classes={{
                    root: materialClasses.iconRoot,
                  }}
                >
                  <EventIcon />
                </ListItemIcon>
              </ListItem>
            </a>
          </Link>
        </List>
      </Drawer>
    </nav>
  );
}

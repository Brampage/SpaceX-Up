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

const drawerWidth = 60;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      overflowX: 'hidden',
    },
  })
);

export default function Menu() {
  const classes = useStyles();

  return (
    <nav className="menu">
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: classes.drawer,
        }}
        anchor="left"
      >
        <List>
          <Link href="/">
            <a>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
              </ListItem>
            </a>
          </Link>
        </List>
        <Divider />
        <List>
          <Link href="/launches">
            <a href="">
              <ListItem button>
                <ListItemIcon>
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

import {makeStyles, Theme} from '@material-ui/core/styles';
import {heroConfigVariables} from './hero-config-variables';
import {appConfigVariables} from '../../styles/app-config-variables';

import Image from 'next/image';

type StyleProps = {
  badgeImageUrl: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  badge: {
    position: 'absolute',
    left: appConfigVariables.contentPaddingLeftRight,
    bottom: -40,
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    '& div:first-of-type': {
      overflow: 'visible !important'
    }
  },
  badgeImage: {
    height: heroConfigVariables.badgeImageSize,
    width: heroConfigVariables.badgeImageSize,
    borderRadius: '50%',
    backgroundColor: 'white',
    // offset-x | offset-y | blur-radius | spread-radius | color
    boxShadow: `0 2px 20px ${theme.palette.primary.dark}`,
    padding: '5px !important'
  },
  badgeHeader: {
    paddingLeft: appConfigVariables.contentPaddingLeftRight,
  },
}));

export default function HeroBadgeHeader({
  badgeImageUrl,
  children,
}: {
  badgeImageUrl: string;
  children?: React.ReactNode;
}) {
  const classes = useStyles({badgeImageUrl} as StyleProps);
  return (
    <div className={classes.badge}>
      <Image
        className={classes.badgeImage}
        src={badgeImageUrl}
        alt="image"
        width={heroConfigVariables.badgeImageSize}
        height={heroConfigVariables.badgeImageSize}
      />
      {!!children && <div className={classes.badgeHeader}>{children}</div>}
    </div>
  );
}

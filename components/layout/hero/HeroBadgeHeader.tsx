import {makeStyles, Theme} from '@material-ui/core/styles';
import {heroConfigVariables} from './hero-config-variables';
import {appConfigVariables} from '../../../styles/app-config-variables';

import Image from 'next/image';

type StyleProps = {
  badgeImageUrl: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  badge: {
    position: 'absolute',
    left: appConfigVariables.contentPadding,
    bottom: -40,
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  },
  badgeImage: {
    height: heroConfigVariables.badgeImageSize,
    width: heroConfigVariables.badgeImageSize,
    borderRadius: '50%',
    backgroundColor: 'white',
    // offset-x | offset-y | blur-radius | spread-radius | color
    // boxShadow: '0 0 20px rgba(0, 0, 0, 2)',
  },
  badgeHeader: {
    paddingLeft: appConfigVariables.contentPadding,
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

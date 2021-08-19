import {makeStyles, Theme} from '@material-ui/core/styles';
import {heroConfigVariables} from './hero-config-variables';

type StyleProps = {
  heroImageUrl: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  heroHeader: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: heroConfigVariables.heroHeight,
    color: 'white',
    backgroundImage: (props: StyleProps) =>
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.heroImageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function HeroHeader({
  heroImageUrl,
  children,
}: {
  heroImageUrl?: string;
  children: React.ReactNode;
}) {
  const classes = useStyles({heroImageUrl} as StyleProps);
  return <header className={classes.heroHeader}>{children}</header>;
}

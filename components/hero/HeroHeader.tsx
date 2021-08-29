import {makeStyles, Theme} from '@material-ui/core/styles';
import {heroConfigVariables} from './hero-config-variables';

type StyleProps = {
  heroImageUrl: string;
  gradient: number;
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
      `linear-gradient(rgba(0, 0, 0, ${props.gradient}), rgba(0, 0, 0, ${props.gradient})), url(${props.heroImageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function HeroHeader({
  heroImageUrl,
  gradient = 0.5,
  children,
}: {
  heroImageUrl?: string;
  gradient?: number;
  children?: React.ReactNode;
}) {
  const classes = useStyles({heroImageUrl, gradient} as StyleProps);
  return <header className={classes.heroHeader}>{children}</header>;
}

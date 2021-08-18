import {makeStyles, Theme} from '@material-ui/core/styles';
import Image from 'next/image';
import classNames from 'classnames';

const heroFallbackImage = '/images/launches/fallback.jpg';

const contentPadding = '4rem';
const badgeSize = '150px';
const heroHeight = 450;

type StyleProps = {
  heroImageUrl: string;
};
// useStyles: (..arguments) => () => Object
const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    display: 'flex',
    flexDirection: 'column',
  },
  heroHeader: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: heroHeight,
    color: 'white',
    backgroundImage: (props: StyleProps) =>
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.heroImageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  badge: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    left: `${contentPadding}`,
    alignItems: 'center',
    marginBottom: -50,
  },
  badgeImage: {
    height: badgeSize,
    width: badgeSize,
    borderRadius: '50%',
    backgroundColor: 'white',
    // offset-x | offset-y | blur-radius | spread-radius | color
    // boxShadow: '0 0 20px rgba(0, 0, 0, 2)',
  },
  badgeHeader: {
    paddingLeft: `${contentPadding}`,
  },
  heroNav: {
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    // offset-x | offset-y | blur-radius | spread-radius | color
    boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 2)',
    '& a': {
      color: 'white',
      padding: `1.5rem ${contentPadding}`,
      zIndex: 9, // Otherwise badgeHeader would receive click
    },
    '& a:first-child': {
      marginLeft: `-${contentPadding}`,
    },
    '& a:active': {
      borderBottom: '0.5rem solid black',
      paddingBottom: '0.5rem',
    },
  },
  heroNav_noBadgePadding: {
    paddingLeft: contentPadding,
  },
  heroNav_badgePadding: {
    paddingLeft: `calc(${contentPadding} + ${badgeSize} + ${contentPadding})`,
  },
  article: {
    padding: `${contentPadding} ${contentPadding}`,
  },
}));

export interface MenuItem {
  label: string;
  href: string;
}

export default function Hero({
  menuItems,
  heroImageUrl,
  badgeImageUrl,
  headerSlot,
  badgeHeaderSlot,
  children,
}: {
  menuItems?: MenuItem[];
  heroImageUrl?: string;
  badgeImageUrl?: string;
  headerSlot?: React.ReactNode; // should become a specific header component that can be used inside the hero
  badgeHeaderSlot?: React.ReactNode;
  children: React.ReactNode;
}) {
  const classes = useStyles({heroImageUrl} as StyleProps);

  function hasMenuItems(menuItems: MenuItem[] | undefined): boolean {
    return !!menuItems && menuItems.length > 0;
  }

  return (
    <>
      <section className={classes.hero}>
        <header className={classes.heroHeader}>
          {!!headerSlot && headerSlot}
          {!!badgeImageUrl && (
            <div className={classes.badge}>
              <Image
                className={classes.badgeImage}
                src={badgeImageUrl}
                alt="image"
                width={badgeSize}
                height={badgeSize}
              />
              <div className={classes.badgeHeader}>
                {!!badgeHeaderSlot && badgeHeaderSlot}
              </div>
            </div>
          )}
        </header>
        {hasMenuItems(menuItems) && (
          <nav
            className={classNames(classes.heroNav, {
              [classes.heroNav_noBadgePadding]: !badgeImageUrl,
              [classes.heroNav_badgePadding]: !!badgeImageUrl,
            })}
          >
            {' '}
            {/* add class that removes padding left */}
            {menuItems?.map((x) => (
              <a href={x.href} key={x.href}>
                {x.label}
              </a>
            ))}
          </nav>
        )}
      </section>
      <article className={classes.article}>{children}</article>
    </>
  );
}

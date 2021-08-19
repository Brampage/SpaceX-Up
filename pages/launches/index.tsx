import Head from 'next/head';
import HeroHeader from '../../components/hero/HeroHeader';
import HeroBadgeHeader from '../../components/hero/HeroBadgeHeader';
import Hero from '../../components/hero/Hero';
import {MenuItem} from '../../components/nav/HorizontalNav';
import Layout from '../../components/layouts/Layout';
import ContentLayout from '../../components/layouts/ContentLayout';
import HorizontalNav from '../../components/nav/HorizontalNav';

const menuItems: MenuItem[] = [
  {label: 'Mission', href: 'mission'}, // add launch id in label?
  {label: 'YouTube', href: 'youtube'},
];

export default function Launches() {
  return (
    <>
      <Head>
        <title>SpaceX Up - Launches</title>
      </Head>
      <Layout>
        {/* If page is not yet generated, this will be displayed initially until igetStaticProps() finishes running. */}
        {/* {router.isFallback && <div>Generating page, please wait...</div>} */}
        <Hero>
          <HeroHeader heroImageUrl="/images/launches/fallback.jpg">
            <h1>This is the Hero Header!</h1>
            <h3>SpaceX Up Rocks!</h3>
          </HeroHeader>
          <HeroBadgeHeader badgeImageUrl="https://i.imgur.com/idwUSQJ.png">
            <h2>Mission Crew 1</h2>
          </HeroBadgeHeader>
        </Hero>
        <HorizontalNav menuItems={menuItems} xOffset={215}></HorizontalNav>

        <ContentLayout>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dolores, corrupti eos praesentium harum aspernatur debitis sed magni
          mollitia fugit at alias atque illo impedit nostrum? Dolore repudiandae
          itaque iste totam voluptate? Iste cum, ut fugit id temporibus quis
          laudantium quia omnis quaerat laboriosam, excepturi illum! A rerum
          nostrum molestiae porro, dicta perferendis fuga expedita velit saepe
          repellendus quidem alias quaerat harum cupiditate inventore iste quia
          sequi. Magnam, sunt aliquam aspernatur dolorum deserunt voluptates
          porro reprehenderit. Perferendis, eligendi itaque? Accusantium,
          praesentium. Odio itaque ab eum adipisci hic earum, obcaecati
          aspernatur dicta eveniet reiciendis perferendis quod eligendi, unde
          fugit, placeat autem?
        </ContentLayout>

        {/* 
          This is the launch navigator.
          - In the launch navigator you will get shown the latest launch .
          - If you go back by using the navigator on the bottom e.g.:
              (10 June 2021    4 July 2021 (in light gray)    22 July 2022)
          - If you have selected a launch in the past, it will show you the flickr images on the top of the page.
          - The following launch details are shown:
            Mission name    
            Mission patch
            The first and second stages

        */}
      </Layout>
    </>
  );
}

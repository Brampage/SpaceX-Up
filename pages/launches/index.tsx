import Head from 'next/head';
import HeroHeader from '../../components/hero/HeroHeader';
import HeroBadgeHeader from '../../components/hero/HeroBadgeHeader';
import Hero from '../../components/hero/Hero';
import {MenuItem} from '../../components/nav/HorizontalMenu';
import Layout from '../../components/layouts/Layout';
import ContentLayout from '../../components/layouts/ContentLayout';
import HorizontalMenu from '../../components/nav/HorizontalMenu';
import Aside from '../../components/aside/Aside';
import AsideTitle from '../../components/aside/AsideTitle';
import AsideContent from '../../components/aside/AsideContent';

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
        <HorizontalMenu menuItems={menuItems} xOffset={215}></HorizontalMenu>

        <ContentLayout>
          <Aside float="right">
            <AsideTitle>
              <h4>Rocket configuration</h4>
            </AsideTitle>
            <AsideContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus sequi ipsum molestias asperiores natus perspiciatis
                ipsa id voluptatem, provident dolore!
              </p>
            </AsideContent>
          </Aside>
          <h1>Mission</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            dolores ab magni repellendus exercitationem doloribus modi deserunt
            facere blanditiis iste, aut ipsum libero consectetur quod repellat
            sunt eum nisi, optio voluptates doloremque unde minima? Officiis
            debitis rerum, nam maxime distinctio nesciunt rem aliquam tenetur,
            dolorem explicabo sint ullam. Pariatur, itaque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aliquid nulla ex voluptate neque odit perspiciatis aspernatur quidem
            quibusdam non odio, nobis ut officia quam temporibus, blanditiis
            debitis. Doloribus impedit, animi rerum temporibus est accusamus
            praesentium et aspernatur quidem dicta tenetur error in laboriosam
            nihil, quos maxime voluptatum natus, quo minima ex vel similique
            odit ipsam. Impedit omnis illum, aliquam ea reprehenderit tenetur,
            voluptatum quidem, harum consequuntur repellendus modi voluptas!
          </p>

          <Aside float="left">
            <AsideTitle>
              <h4>Crew</h4>
            </AsideTitle>
            <AsideContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                architecto distinctio placeat neque a velit est, obcaecati
                praesentium in mollitia repellendus quibusdam dicta laudantium,
                fugiat voluptatum fuga aut id facere exercitationem deserunt
                illum vitae. Cumque molestiae numquam nulla quam vel hic eaque
                laboriosam eligendi, commodi aut, ipsa deserunt error facere
                atque et repudiandae quia porro! Reiciendis itaque, qui quam
                aspernatur mollitia cupiditate illo quisquam amet blanditiis
                maiores fugit recusandae minus beatae laudantium velit animi,
                deleniti delectus? Iure autem delectus sequi cum libero
                blanditiis mollitia eum rerum. Cumque ut inventore labore
                accusamus autem repellat, quaerat sapiente! Fugit ut modi
                praesentium ea.
              </p>
            </AsideContent>
          </Aside>
          <h2>Elon Musk</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, neque
            blanditiis eligendi deleniti quod cupiditate placeat non laboriosam
            similique ex, suscipit reprehenderit accusamus ratione, dignissimos
            eius assumenda nostrum numquam nemo maiores aliquam. Reprehenderit
            odit explicabo magnam perferendis amet, quidem sit quia ipsum
            consequuntur aperiam voluptate aspernatur rerum. Consequatur, nisi
            maiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            aperiam!
          </p>
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

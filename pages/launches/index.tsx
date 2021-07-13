import Head from 'next/head';
import {useQuery} from 'react-query';
import {LaunchesResponse} from '../../models/launches/launches.model';
import Layout from '../../components/layout/layout';
import Hero, {MenuItem} from '../../components/layout/hero/hero';

const menuItems: MenuItem[] = [
  {label: 'Mission', href: 'mission'}, // add launch id in label?
  {label: 'YouTube', href: 'youtube'},
];

function HeroHeaderSlot({header}: {header: string}) {
  return (
    <>
      <h1>{header}</h1>
      <h3>Hardcoded Subtitle</h3>
    </>
  );
}

function BadgeHeaderSlot({header}: {header: string}) {
  return <h1>{header}</h1>;
}

export default function Launches() {
  const heroHeader = 'Hero Header';
  const badgeHeader = 'Badge Header';
  const {isLoading, error, data} = useQuery<LaunchesResponse>('launches', () =>
    fetch('https://api.spacexdata.com/v3/launches').then((res) => res.json())
  );

  return (
    <>
      <Head>
        <title>SpaceX Up - Launches</title>
      </Head>
      <Layout>
        {/* {
          data ? <Hero background={data[0].links.flickr_images[0]} 
        } */}
        <Hero
          menuItems={menuItems}
          headerSlot={<HeroHeaderSlot header={heroHeader} />}
          badgeHeaderSlot={<BadgeHeaderSlot header={badgeHeader} />}
          heroImageUrl="/images/launches/fallback.jpg"
          badgeImageUrl="https://i.imgur.com/idwUSQJ.png"
        >
          <h1>SpaceX</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            earum in fugiat cumque repudiandae impedit distinctio quos
            doloremque ducimus repellat cum porro rerum laboriosam fuga possimus
            dolorum quibusdam tempore magnam tempora atque. Totam unde
            perferendis illo iste nulla inventore magnam culpa consequatur
            dolore non dolorem voluptas officia harum aperiam, omnis delectus
            est sint libero similique? Dolores quis rerum quod blanditiis omnis
            deserunt ab totam enim vel at, quaerat et earum asperiores
            cupiditate reprehenderit laborum tempora praesentium fugiat
            provident quibusdam minus odit dolorem! Modi possimus saepe alias
            harum accusamus. Magnam veniam cupiditate ullam quibusdam saepe
            expedita corporis unde officiis rem quae!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            quaerat, nobis tempore laudantium ratione eveniet ea ipsa non
            deserunt veritatis?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui odio
            dolores voluptates repellendus assumenda nobis non harum? Vel hic,
            consequatur ratione inventore, delectus velit quos tempora ipsum
            minima voluptate iste saepe consequuntur, sint natus harum in?
            Facere ipsam sint perferendis fugit et minima mollitia cupiditate
            dolorum ut totam, est autem. Sunt, dolor quia pariatur natus optio
            molestiae delectus dicta! Eligendi cupiditate itaque, nemo cum
            accusamus commodi unde necessitatibus minus quis nobis ipsum quae ex
            corrupti consectetur iure! Eius, consequatur architecto? Voluptate
            assumenda minima sint asperiores deserunt ab molestias facilis
            repellendus error consectetur, eveniet quasi, rem veniam, recusandae
            in aperiam provident?
          </p>
        </Hero>
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
        {/* // <ul>
        //   {data
        //     ?.filter((x) => !!x.details)
        //     .map((x) => (
        //       <li>{x.details}</li>
        //     ))}
        // </ul> */}
      </Layout>
    </>
  );
}

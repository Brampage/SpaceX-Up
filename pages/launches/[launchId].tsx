import Head from 'next/head';
import {Launch, LaunchesResponse} from '../../models/launches/launches.model';
import Layout from '../../components/layout/layout';
import Hero, {MenuItem} from '../../components/layout/hero/hero';
import {useRouter} from 'next/router';
import {GetStaticPropsContext, InferGetStaticPropsType} from 'next';

const menuItems: MenuItem[] = [
  {label: 'Mission', href: 'mission'}, // add launch id in label?
  {label: 'YouTube', href: 'youtube'},
];

function HeroHeaderSlot({header}: {header: string}): JSX.Element {
  return (
    <>
      <h1>{header}</h1>
      <h3>Hardcoded Subtitle</h3>
    </>
  );
}

function BadgeHeaderSlot({header}: {header: string}): JSX.Element {
  return <h1>{header}</h1>;
}

export default function Launches({
  launch,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const heroHeader = 'Hero Header';
  const badgeHeader = 'Badge Header';

  const router = useRouter();
  const {id} = router.query;

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
          <p>Params: {id}</p>

          {/* If page is not yet generated, this will be displayed initially until igetStaticProps() finishes running. */}
          {router.isFallback && <div>Generating page, please wait...</div>}
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

// What is getStaticProps:
// If you export an async function called getStaticProps from a page,
// Next.js will pre-render this page at build time using the props returned by getStaticProps.
// At build time for each request?
// In development (next dev), getStaticProps will be called on every request.

// Check docs if unclear: https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
// I will use context.params ([launchId].tsx) to pre-fetch the launch data and inject it into the component as props
// If there is no data found for that param ({ launchId: }) I will redirect the user to the home page OR return notFound (404.tsx).
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const {launchId} = context.params;

  const res = await fetch(`spacex-api/${launchId}`);
  const launch: Launch = await res.json();

  // launch not found
  if (!launch) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  return {
    props: {
      launch,
    },
  };
};

// Next.js allows you to create or update static pages after you’ve built your site.
// Incremental Static Regeneration (ISR) enables you to use static-generation on a per-page basis, without needing to rebuild the entire site.
// With ISR, you can retain the benefits of static while scaling to millions of pages.

// Check docs if unclear: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
// I will use getStatic paths for...

// This function gets called at build time on server-side to generate the paths.
// It may be called again, on a serverless function, if
// the path has not been generated.

// For each of the paths returned, nextjs will get the static props and build the page.
// So it is perhaps wise to just return the last 100 launches instead of all the launches. It will build only the 100.
// For the launches that were not build, those will be build on the server at runtime (ONLY WHEN FALLBACK IS TRUE).
export async function getStaticPaths() {
  // On all endpoints that return an array, the header spacex-api-count is included with the total number of items in the array.
  // This can be used to page through the results.
  // By default, there is no limit set.

  const spaceXApiCount = 2500;
  const limit = 100;
  const offset = spaceXApiCount - limit;
  const res = await fetch(
    `spacex-api/launches?offset=${offset}&limit=${limit}`
  );
  const launches: LaunchesResponse = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = launches.map((launch) => ({
    params: {launchId: `${launch.mission_name}-${launch.flight_number}`},
  }));

  // We'll pre-render only 100 (limit) paths at build time.
  // { fallback: true } means other routes should render pages as requested with getStaticProps on server.
  return {paths, fallback: true};
}

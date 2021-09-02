import {makeStyles, Theme} from '@material-ui/core';
import {GetStaticPropsContext} from 'next';
import {useRouter} from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';
import Aside from '../../components/aside/Aside';
import AsideContent from '../../components/aside/AsideContent';
import AsideTitle from '../../components/aside/AsideTitle';
import Hero from '../../components/hero/Hero';
import HeroBadgeHeader from '../../components/hero/HeroBadgeHeader';
import HeroHeader from '../../components/hero/HeroHeader';
import ContentLayout from '../../components/layouts/ContentLayout';
import Layout from '../../components/layouts/Layout';
import {MenuItem} from '../../components/nav/HorizontalMenu';
import PayloadInformation from '../../components/payload/PayloadInformation';
import {Launch, LaunchesResponse} from '../../models/launches/launches.model';
import {formatOrdinal} from '../../utils/text-transformers/format-ordinal';

const menuItems: MenuItem[] = [
  {label: 'Mission', href: 'mission'}, // add launch id in label?
  {label: 'YouTube', href: 'youtube'},
];

export default function LaunchDetailPage({launch}: {launch: Launch}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Generating page, please wait...</div>;
  }

  const heroImageUrl = launch.links.flickr_images.length
    ? launch.links.flickr_images[0]
    : '/images/launches/fallback.jpg';
  const badgeImageUrl = launch.links.mission_patch.length
    ? launch.links.mission_patch
    : '/images/launches/fallback.jpg';
  const localLaunchDate = new Date(launch.launch_date_utc).toLocaleString();
  const launchDetails = launch.details
    ? launch.details
    : 'There were no details found for this mission.';

  return (
    <>
      <Head>
        <title>SpaceX {launch.mission_name} Mission</title>
      </Head>
      <Layout>
        <Hero>
          <HeroHeader heroImageUrl={heroImageUrl}></HeroHeader>
          <HeroBadgeHeader badgeImageUrl={badgeImageUrl}>
            <h1>{launch.mission_name}</h1>
          </HeroBadgeHeader>
        </Hero>
        {/* TODO: Add horizontal menu with links to reddit youtube, show on those pages with their apis etc. */}
        {/* <HorizontalMenu menuItems={menuItems} xOffset={215}></HorizontalMenu> */}

        <ContentLayout>
          <Aside float="right">
            <AsideTitle>
              <h2>Rocket configuration</h2>
            </AsideTitle>
            <AsideContent>
              <p>
                A {launch.rocket.rocket_name} rocket was used for{' '}
                {launch.mission_name}.
              </p>
              {launch.rocket.second_stage.payloads.length && (
                <PayloadInformation
                  payloads={launch.rocket.second_stage.payloads}
                ></PayloadInformation>
              )}
            </AsideContent>
          </Aside>
          <h2>Mission Details</h2>
          <p>
            This {launch.upcoming ? 'will be' : 'was'} SpaceX's 
            {formatOrdinal(launch.flight_number)} mission. It 
            {launch.upcoming ? 'will take ' : 'took'} took place on 
            <time dateTime={launch.launch_date_utc}>{localLaunchDate}</time>.
          </p>
          <p>{launchDetails}</p>
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
// What is getStaticProps:
// If you export an async function called getStaticProps from a page,
// Next.js will pre-render this page at build time using the props returned by getStaticProps.
// At build time for each request?
// In development (next dev), getStaticProps will be called on every request.

// Check docs if unclear: https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
// I will use context.params ([launchId].tsx) to pre-fetch the launch data and inject it into the component as props
// If there is no data found for that param ({ launchId: }) I will redirect the user to the home page OR return notFound (404.tsx).
export const getStaticProps = async (
  context: GetStaticPropsContext<{flightNumber: string}>
) => {
  // https://docs.spacexdata.com/
  const {flightNumber} = context.params!;

  const res = await fetch(
    `https://api.spacexdata.com/v3/launches/${flightNumber}`
  );
  const launch: Launch = await res.json();

  // launch not found
  if (!launch) {
    return {
      redirect: {
        destination: 'launches',
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

  // const spaceXApiCount = 2500;
  // const limit = 100;
  // const offset = spaceXApiCount - limit;
  const res = await fetch(`https://api.spacexdata.com/v3/launches`);
  const launches: LaunchesResponse = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = launches.map((launch) => ({
    params: {flightNumber: launch.flight_number.toString()},
  }));

  // We'll pre-render only 100 (limit) paths at build time.
  // { fallback: true } means other routes should render pages as requested with getStaticProps on server.
  return {paths, fallback: true};
}

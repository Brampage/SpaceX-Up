import Head from 'next/head';
import {useQuery} from 'react-query';
import {LaunchesResponse} from '../../models/launches/launches.model';
import Layout from '../../components/layout/layout';

export default function Launches() {
  const {isLoading, error, data} = useQuery<LaunchesResponse>('launches', () =>
    fetch('https://api.spacexdata.com/v3/launches').then((res) => res.json())
  );

  return (
    <>
      <Head>
        <title>SpaceX Up - Launches</title>
      </Head>
      <Layout>
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
        <h1>Launches</h1>
        <ul>
          {data
            ?.filter((x) => !!x.details)
            .map((x) => (
              <li>{x.details}</li>
            ))}
        </ul>
      </Layout>
    </>
  );
}

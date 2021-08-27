import Head from 'next/head';
import Layout from '../../components/layouts/Layout';
import ContentLayout from '../../components/layouts/ContentLayout';
import {useQuery} from 'react-query';
import {LaunchesResponse} from '../../models/launches/launches.model';
import Link from 'next/link';

export default function Launches() {
  const {isLoading, error, data, isFetching} = useQuery<LaunchesResponse>(
    'launches',
    () =>
      fetch('https://api.spacexdata.com/v3/launches').then((res) => res.json())
  );

  return (
    <>
      <Head>
        <title>SpaceX Up - Launches</title>
      </Head>
      <Layout>
        <ContentLayout>
          <h1>Launches</h1>
          {data?.map((launch) => (
            <Link href={`launches/${launch.flight_number}`} key={launch.flight_number}>
              <a>
                <li>{launch.mission_name}</li>
              </a>
            </Link>
          ))}
        </ContentLayout>
      </Layout>
    </>
  );
}

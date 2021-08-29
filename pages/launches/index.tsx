import Head from 'next/head';
import Layout from '../../components/layouts/Layout';
import ContentLayout from '../../components/layouts/ContentLayout';
import {useQuery} from 'react-query';
import {Launch, LaunchesResponse} from '../../models/launches/launches.model';
import {useMemo} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useRouter} from 'next/dist/client/router';
import { GetStaticPropsContext } from 'next';

interface LaunchRow {
  flight_number: number;
  mission_name: string;
  upcoming: boolean;
}

function createLaunchRow({
  flight_number,
  mission_name,
  upcoming,
}: Launch): LaunchRow {
  return {flight_number, mission_name, upcoming};
}

export default function Launches({launches}: {launches: LaunchesResponse}) {
  const router = useRouter();
  // The launches 'launches' will be re-used inside the detail view (to navigate back and forth through the launches)
  // const {data: launches} = useQuery<LaunchesResponse>('launches', async () => {
  //   const response = await fetch('https://api.spacexdata.com/v3/launches');
  //   return response.json();
  // });
  const launchRows = useMemo<LaunchRow[] | undefined>(
    () => launches?.map((x) => createLaunchRow(x)),
    []
  );

  const handleClick = (flightNumber: number) => {
    console.log('Navigating...');
    router.push(`launches/${flightNumber}`);
  };

  return (
    <>
      <Head>
        <title>SpaceX Up - Launches</title>
      </Head>
      <Layout>
        <ContentLayout>
          <h1>Launches</h1>

          <TableContainer component={Paper} elevation={1}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Flight Number</TableCell>
                  <TableCell>Mission Name</TableCell>
                  <TableCell>Upcoming Launch</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {launchRows?.map(({flight_number, mission_name, upcoming}) => (
                  <TableRow
                    key={`${flight_number}_${mission_name}`}
                    onClick={(e) => handleClick(flight_number)}
                    hover={true}
                  >
                    <TableCell>{flight_number}</TableCell>
                    <TableCell>{mission_name}</TableCell>
                    <TableCell>{upcoming ? 'True' : 'False'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ContentLayout>
      </Layout>
    </>
  );
}

// TODO: Implement getStaticProps for all the missions
export const getStaticProps = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch(
    `https://api.spacexdata.com/v3/launches`
  );
  const launches: LaunchesResponse = await res.json();

  // launches not found
  if (!launches) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  return {
    props: {
      launches,
    },
  };
};
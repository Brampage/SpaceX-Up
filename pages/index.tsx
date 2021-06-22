import Head from 'next/head'
import Layout from '../components/layout';
import Navigation from '../components/navigation';

const siteTitle = 'SpaceX Up';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>SpaceX Up</h1>
      <small>Presenting all interesting media platforms in one place</small>

      <Navigation></Navigation>
    </Layout>
  )
}

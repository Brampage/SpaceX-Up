import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import ContentLayout from '../components/layouts/ContentLayout';
import Hero from '../components/hero/Hero';
import HeroHeader from '../components/hero/HeroHeader';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SpaceX Up</title>
      </Head>
      <Hero>
        <HeroHeader heroImageUrl="/images/launches/space-astronaut.jpg" gradient={0}></HeroHeader>
      </Hero>
      <ContentLayout>
        <h1>SpaceX Up</h1>
        <p>
          This website contains information about the launches and upcoming
          launches of SpaceX.
        </p>
        <p>
          <i>This website is still work in progress. More to follow...</i>
        </p>
      </ContentLayout>
    </Layout>
  );
}

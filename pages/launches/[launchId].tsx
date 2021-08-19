
// What is getStaticProps:
// If you export an async function called getStaticProps from a page,
// Next.js will pre-render this page at build time using the props returned by getStaticProps.
// At build time for each request?
// In development (next dev), getStaticProps will be called on every request.

// Check docs if unclear: https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
// I will use context.params ([launchId].tsx) to pre-fetch the launch data and inject it into the component as props
// If there is no data found for that param ({ launchId: }) I will redirect the user to the home page OR return notFound (404.tsx).
export const getStaticProps = async (context: GetStaticPropsContext<{launchId: string}>) => {
  // https://docs.spacexdata.com/
  const {launchId} = context.params!;

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
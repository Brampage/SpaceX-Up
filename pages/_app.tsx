import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {GlobalCss} from '../components/layouts/GlobalCss';
import {createMuiTheme} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';

// material ui generator online: https://bareynol.github.io/mui-theme-creator/
const theme = createMuiTheme(
  {
    palette: {
      type: 'light',
      primary: {
        main: '#1D3557',
      },
      secondary: {
        main: '#457B9D',
      },
      background: {
        default: '#F1FAEE',
      },
    },
  },
  {
    foo: 'bar',
  }
);

const queryClient = new QueryClient();

// use apptsx as layout
function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalCss />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
export default MyApp;

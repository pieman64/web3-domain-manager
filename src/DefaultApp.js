import React, { useEffect, useState } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect
} from '@web3-react/walletconnect-connector'
import Web3 from 'web3';

import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

import GlobalStyle from './components/GlobalStyle';
import { useEagerConnect, useInactiveListener } from './hooks';
import { POLLING_INTERVAL } from './connectors';
import Domains from './components/Domains';
import Lookup from './components/Lookup';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = createMuiTheme({
  overrides: {
    MuiFilledInput: {
      input: {
        paddingTop: '13px',
      },
    },
    MuiDialogActions: {
      root: {
        display: 'block'
      }
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    minHeight: '100%'
  },
  content: {
    paddingTop: 64,
    minHeight: 100
  },
  title: {
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  grow: {
    flexGrow: 1,
    paddingLeft: 30,
  },
  navButton: {
    color: 'white',
  },
}));

function getErrorMessage(error) {
  console.error(error)
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return 'You\'re connected to an unsupported network.'
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    return 'An unknown error occurred. Check the console for more details.'
  }
}

function getLibrary(provider) {
  const library = new Web3(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
}

function DefaultApp() {
  const classes = useStyles();

  const { connector, library, account, chainId, active, error } = useWeb3React();

  const [activatingConnector, setActivatingConnector] = useState();
  const [isLookup, setIsLookup] = useState();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header
          active={active}
          account={account}
          isLookup={isLookup}
          setIsLookup={setIsLookup} />
        <Container maxWidth='lg' className={classes.content}>
          {
            !!error &&
            <Alert
              variant='filled'
              severity='error'
              style={{ position: 'fixed', zIndex: 1200, bottom: 10, left: 10 }}
            >
              {getErrorMessage(error)}
            </Alert>
          }
          {account && !isLookup && <Domains library={library} account={account} chainId={chainId} />}
          {isLookup && <Lookup library={library} chainId={chainId} />}
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default function () {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <GlobalStyle />
      <DefaultApp />
    </Web3ReactProvider>
  )
}

import React from 'react';

import Currency from './features/currency/Currency';
import ExchangeRateDisplay from './features/exchangeRateDisplay/ExchangeRateDisplay';

import { AppWrapper } from './style';

function App() {
  return (
    <AppWrapper
      className="App"
      direction="column"
      justify="center"
      align="center"
      height="100vh"
      width="100%"
    >
      <Currency isDestination={false}/>
      <ExchangeRateDisplay/>
      <Currency isDestination={true}/>
    </AppWrapper>
  );
}

export default App;

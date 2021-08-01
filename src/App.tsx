import React from 'react';

import Currency from './features/currency/Currency';
import ExchangeRateDisplay from './features/exchangeRateDisplay/ExchangeRateDisplay';
import ExchangeButton from './features/exchangeButton/ExchangeButton';

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
      <Currency isCurrencyTo={false}/>
      <ExchangeRateDisplay/>
      <Currency isCurrencyTo={true}/>
      <ExchangeButton/>
    </AppWrapper>
  );
}

export default App;

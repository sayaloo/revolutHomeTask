import React, { useEffect } from 'react';
import { useQuery, useIsFetching } from 'react-query';
import { useAppSelector } from '../../app/hooks';
import axios from 'axios';
import { Box, Text } from 'grommet';
import { LineChart, Transaction } from 'grommet-icons';

import { useSwapCurrencies } from './hooks';

import { StyledDisplay, StyledLoader } from './style';


const ExchangeRateDisplay = () => {
  const isFetching = useIsFetching();
  const fromSymbol = useAppSelector((state) => state.currency.currencyFrom);
  const toSymbol = useAppSelector((state) => state.currency.currencyTo);
  const currencies = useAppSelector((state) => state.currency.currencies);
  const { swapCurrency } = useSwapCurrencies();

  useEffect(() => {
  }, [ isFetching ]);

  const { data: currencyRate, isFetching: fetching } = useQuery([ toSymbol, fromSymbol, 'exchange-rate' ], () => axios({
    method: 'GET',
    url: 'https://currency-exchange.p.rapidapi.com/exchange',
    params: { to: toSymbol, from: fromSymbol, q: '1.0' },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY ?? '',
      'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
    },
  }), {
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
    retryDelay: 25000,
    refetchOnMount: 'always',
    keepPreviousData: true,
  });

  return (
    <StyledDisplay>
      <Box className="rate-display-wrp">
        {
          !fetching
            ?
            <Box className="rate-indicator">
              <LineChart/>
              <Text color="neutral-3" weight="bold">
                {/*Yes it's EXPENSIVE!!!*/}
                {currencies.find((c) => c.symbol === fromSymbol)?.sign}1
                =
                {/*And This...*/}
                {currencyRate?.data}{currencies.find((c) => c.symbol === toSymbol)?.sign}
              </Text>
            </Box>
            :
            <StyledLoader/>
        }
      </Box>
      <Box className="change-src-des">
        <button onClick={swapCurrency}>
          <Transaction/>
        </button>
      </Box>
    </StyledDisplay>
  );
};

export default ExchangeRateDisplay;
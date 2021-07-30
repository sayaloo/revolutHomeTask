import React from 'react';
import { useQuery } from 'react-query';
import { Box, Text } from 'grommet';
import { LineChart, Transaction } from 'grommet-icons';

import { StyledDisplay } from './style';
import axios from 'axios';

const ExchangeRateDisplay = () => {
  const { data: currencyRate } = useQuery('exchange-rate', () => axios({
    method: 'GET',
    url: 'https://currency-exchange.p.rapidapi.com/exchange',
    params: { to: 'MYR', from: 'SGD', q: '1.0' },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY ?? '',
      'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
    },
  }), {
    // refetchInterval: 5000,
    retryDelay: 25000,
  });

  console.log(currencyRate?.data);
  return (
    <StyledDisplay>
      <Box className="rate-display-wrp">
        <LineChart/>
        <Text color="neutral-3" weight="bold">$1 = {currencyRate?.data}</Text>
      </Box>
      <Box className="change-src-des">
        <button>
          <Transaction/>
        </button>
      </Box>
    </StyledDisplay>
  );
};

export default ExchangeRateDisplay;
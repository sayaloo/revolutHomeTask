import React from 'react';
import { Button } from 'grommet';
import { useAppSelector } from '../../app/hooks';
import {useExchange} from './hooks';

import { StyledExchangeButton } from './style';

const ExchangeButton = () => {
  const toSymbol = useAppSelector(state => state.currency.currencyTo);
  const fromSymbol = useAppSelector(state => state.currency.currencyFrom);
  const {exchange, disable} = useExchange(toSymbol, fromSymbol);
  return (
    <StyledExchangeButton>
      <Button primary className="ex-btn" disabled={disable} onClick={exchange}>Exchange</Button>
    </StyledExchangeButton>
  );
};

export default ExchangeButton;
import React from 'react';
import { Box, Grid, Text } from 'grommet';

import {
  useInitCurrency,
  useSelectCurrency,
  useFilterCurrencies,
  useSelectBalance,
  useChangeAmount,
  useIsLoaded,
} from './hooks';

import { StyledMenu, StyledTextInput } from './style';

type CurrencyProps = {
  isCurrencyTo: boolean
}

const Currency = ({ isCurrencyTo }: CurrencyProps) => {
  const currencies = useFilterCurrencies(isCurrencyTo);
  const symbol = useInitCurrency(isCurrencyTo);
  const balance = useSelectBalance(isCurrencyTo);
  const enableEdit = useIsLoaded();
  const { selectCurrency } = useSelectCurrency(isCurrencyTo);
  const { handleChange, transactionAmount } = useChangeAmount();

  const formatFloat = (num: any): number => {
    if (num !== undefined) {
      return (Math.round(parseFloat(num) * 100) / 100);
    } else return 0;
  };

  return (
    <Box
      direction="column"
      align="center"
      justify="center"
      background={isCurrencyTo ? 'light-2' : ''}
    >
      <Grid
        rows={[ 'xxsmall', 'xsmall' ]}
        columns={[ 'small', 'medium' ]}
        gap="none"
        areas={[
          { name: 'unit-wrp', start: [ 0, 0 ], end: [ 0, 1 ] },
          { name: 'input-wrp', start: [ 1, 0 ], end: [ 1, 1 ] },
        ]}
      >
        <Box
          gridArea="unit-wrp"
          direction="column"
          justify="start"
          align="start"
          pad="small"
        >
          <StyledMenu
            alignSelf="start"
            label={<Text weight="bold" size="xlarge">{symbol}</Text>}
            items={currencies.map((currency) => ({
              label: currency.symbol,
              value: currency.symbol,
              onClick: selectCurrency,
            }))}
          />
          <Text size="small" weight="bold" color="light-6">{balance?.sign}{formatFloat(balance?.balance)}</Text>
        </Box>
        <Box
          gridArea="input-wrp"
          direction="column"
          justify="start"
          align="start"
          pad="small"
        >
          <StyledTextInput
            disabled={isCurrencyTo ? true : (!enableEdit)}
            plain={true}
            textAlign="end"
            size="xlarge"
            placeholder="0"
            type="number"
            onChange={handleChange}
            value={isCurrencyTo ? transactionAmount.to : transactionAmount.from}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Currency;
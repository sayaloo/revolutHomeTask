import React from 'react';
import { Box, Grid, Text } from 'grommet';

import { StyledMenu, StyledTextInput } from './style';

type CurrencyProps = {
  isDestination: boolean
}

const Currency = ({ isDestination }: CurrencyProps) => {
  return (
    <Box
      direction="column"
      align="center"
      justify="center"
      background={isDestination ? 'light-2' : ''}
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
            label={<Text weight="bold" size="xlarge">Menu</Text>}
            items={[
              {
                label: 'First Action', onClick: () => {
                },
              },
              {
                label: 'Second Action', onClick: () => {
                },
              },
            ]}
          />
          <Text size="small" weight="bold" color="light-6">Balance: $201.02</Text>
        </Box>
        <Box
          gridArea="input-wrp"
          direction="column"
          justify="start"
          align="start"
          pad="small"
        >
          <StyledTextInput
            disabled={isDestination}
            plain={true}
            textAlign="end"
            size="xlarge"
            placeholder="0"
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Currency;
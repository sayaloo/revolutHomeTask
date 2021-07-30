import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CurrencyState {
  currencies: { sign: string, balance: number, htmlCode: string }[];
}

const initialState: CurrencyState = {
  currencies: [
    { sign: 'EUR', balance: 2593.27, htmlCode: '&#8364;' },
    { sign: 'USD', balance: 125.27, htmlCode: '&#36;' },
    { sign: 'GBP', balance: 1523.31, htmlCode: '&#163;' } ],
};


export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    incrementCurrency: (state, action: PayloadAction<{ sign: string, amount: number }>) => {
      const currency = state.currencies.find((currency) => currency.sign === action.payload.sign);
      if (currency) {
        currency.balance += action.payload.amount;
      }
    },
    decrementCurrency: (state, action: PayloadAction<{ sign: string, amount: number }>) => {
      const currency = state.currencies.find((currency) => currency.sign === action.payload.sign);
      if (currency) {
        currency.balance += action.payload.amount;
      }
    },
  },
});

export const { incrementCurrency, decrementCurrency } = currencySlice.actions;

export default currencySlice.reducer;

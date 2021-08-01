import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CurrencyState {
  currencies: { symbol: string, balance: number, sign: string }[];
  currencyFrom: string;
  currencyTo: string;
  transactionAmount: { from: string, to: string }
}

const initialState: CurrencyState = {
  currencies: [
    { symbol: 'EUR', balance: 2593.27, sign: '€' },
    { symbol: 'USD', balance: 125.27, sign: '$' },
    { symbol: 'GBP', balance: 1523.31, sign: '£' } ],
  currencyFrom: 'EUR',
  currencyTo: 'USD',
  transactionAmount: { from: '0', to: '0' },
};


export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    decrementAmount: (state, action: PayloadAction<{ sign: string, amount: number }>) => {
      const currency = state.currencies.find((currency) => currency.symbol === action.payload.sign);
      if (currency) {
        currency.balance -= action.payload.amount;
      }
    },
    incrementAmount: (state, action: PayloadAction<{ sign: string, amount: number }>) => {
      const currency = state.currencies.find((currency) => currency.symbol === action.payload.sign);
      if (currency) {
        currency.balance += action.payload.amount;
      }
    },
    setTransactionAmount: (state, action: PayloadAction<{ from: string, to: string }>) => {
      state.transactionAmount.from = action.payload.from;
      state.transactionAmount.to = action.payload.to;
    },
    setCurrencyFrom: (state, action: PayloadAction<string>) => {
      state.currencyFrom = action.payload;
    },
    setCurrencyTo: (state, action: PayloadAction<string>) => {
      state.currencyTo = action.payload;
    },
  },
});

export const {
  decrementAmount,
  incrementAmount,
  setCurrencyFrom,
  setCurrencyTo,
  setTransactionAmount,
} = currencySlice.actions;

export default currencySlice.reducer;

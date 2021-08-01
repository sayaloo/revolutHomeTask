import React, { useEffect, useState } from 'react';
import { useQueryClient, useIsFetching } from 'react-query';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCurrencyFrom, setCurrencyTo, setTransactionAmount } from './currencySlice';

const formatFloat = (num: string): string => {
  return (Math.round(parseFloat(num) * 100) / 100).toString();
};

const useInitCurrency = (isCurrencyTo: boolean) => {
  return useAppSelector((state) => isCurrencyTo ? state.currency.currencyTo : state.currency.currencyFrom);
};

const useSelectCurrency = (isCurrencyTo: boolean) => {
  const [ val, setVal ] = useState('');
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (val !== '') {
      dispatch(isCurrencyTo ? setCurrencyTo(val) : setCurrencyFrom(val));
      dispatch(setTransactionAmount({ from: '', to: '' }));
    }
  }, [ val, dispatch, isCurrencyTo ]);
  const selectCurrency = (e: React.ChangeEvent<HTMLInputElement>) => setVal(e.currentTarget.value);
  return { selectCurrency };
};

const useSelectBalance = (isCurrencyTo: boolean) => {
  const symbol = useInitCurrency(isCurrencyTo);
  const currencies = useAppSelector((state) => state.currency.currencies);
  return currencies.find((c) => c.symbol === symbol);
};

const useChangeAmount = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const currencyTo = useAppSelector((state) => state.currency.currencyTo);
  const currencyFrom = useAppSelector((state) => state.currency.currencyFrom);
  const fromBalance = useSelectBalance(false)?.balance ?? -1;
  const transactionAmount = useAppSelector((state) => state.currency.transactionAmount);
  const rate = (queryClient.getQueryData([ currencyTo, currencyFrom, 'exchange-rate' ]) as { data: number })?.data ?? -1;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (parseFloat(value) <= fromBalance && parseFloat(value) >= 0) {
      dispatch(setTransactionAmount({
        from: formatFloat(value),
        to: formatFloat((parseFloat(value) * rate).toString()),
      }));
    } else {
      dispatch(setTransactionAmount({ from: '', to: '' }));
    }
  };
  return { handleChange, transactionAmount };
};

const useIsLoaded = () => {
  const currencyTo = useAppSelector((state) => state.currency.currencyTo);
  const currencyFrom = useAppSelector((state) => state.currency.currencyFrom);
  const queryClient = useQueryClient();
  const isFetching = useIsFetching([ currencyTo, currencyFrom, 'exchange-rate' ]);
  const query = queryClient.getQueryData([ currencyTo, currencyFrom, 'exchange-rate' ]);
  return !(isFetching && query === undefined);
};

const useFilterCurrencies = (isCurrencyTo: boolean) => {
  const currencyTo = useAppSelector((state) => state.currency.currencyTo);
  const currencyFrom = useAppSelector((state) => state.currency.currencyFrom);
  const currencies = useAppSelector((state) => state.currency.currencies);
  return currencies.filter((c) => c.symbol !== (isCurrencyTo ? currencyFrom : currencyTo));
};

export { useInitCurrency, useSelectCurrency, useFilterCurrencies, useSelectBalance, useChangeAmount, useIsLoaded };
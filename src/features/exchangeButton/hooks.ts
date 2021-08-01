import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { decrementAmount, incrementAmount, setTransactionAmount } from '../currency/currencySlice';
import { useSelectBalance } from '../currency/hooks';

const formatFloat = (num: string): number => {
  return (Math.round(parseFloat(num) * 100) / 100);
};

const useExchange = (toSymbol: string, fromSymbol: string) => {
  const dispatch = useAppDispatch();
  const exchangeAmount = useAppSelector(state => state.currency.transactionAmount);
  const fromBalance = useSelectBalance(false)?.balance ?? -1;
  const toAmount = exchangeAmount.to;
  const fromAmount = exchangeAmount.from;
  const exchange = () => {
    if (formatFloat(fromAmount) > 0 && formatFloat(fromAmount) <= fromBalance) {
      dispatch(decrementAmount({ sign: fromSymbol, amount: formatFloat(fromAmount) }));
      dispatch(incrementAmount({ sign: toSymbol, amount: formatFloat(toAmount) }));
      dispatch(setTransactionAmount({ from: '0', to: '0' }));
    }
  };
  return { exchange, disable: formatFloat(fromAmount) <= 0 || formatFloat(fromAmount) >= fromBalance };
};

export { useExchange };
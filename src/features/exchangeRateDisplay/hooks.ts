import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCurrencyFrom, setCurrencyTo } from '../currency/currencySlice';


const useSwapCurrencies = () => {
  const dispatch = useAppDispatch();
  const currencyTo = useAppSelector((state) => state.currency.currencyTo);
  const currencyFrom = useAppSelector((state) => state.currency.currencyFrom);
  const swapCurrency = () => {
    dispatch(setCurrencyFrom(currencyTo));
    dispatch(setCurrencyTo(currencyFrom))
  };
  return { swapCurrency };
};

export {useSwapCurrencies}
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
// import { getExchangeRates } from "../api";
import { 
  getAmount, 
  getCurrencyCode, 
  // supportedCurrencies, 
  // changeCurrencyCode,
  getCurrencyData } from "../store/rates";


export function ExchangeRate() {
  // const [amount, setAmount] = useState("1.50");
  // const [currencyCode, setCurrencyCode] = useState("USD");
  // const [currencyData, setCurrencyData] = useState({ USD: 1.0 });
 
  // const dispatch = useDispatch();
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);
  const currencyData = useSelector(getCurrencyData);

  // const setAmount = () =>{};
  // const setCurrencyCode = () =>{};


  // fetch the exchange rates each time currency code changes
  // useEffect(() => {
  //   dispatch(changeCurrencyCode(currencyCode))
  // }, []);


  // const handleCurrencyCode = useCallback(
  //   (e) => setCurrencyCode(e.target.value),
  //   []
  // );

  // const handleAmountChange = useCallback((e) => {
  //   let newAmount = e.target.value;
  //   setAmount(newAmount);
  // }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            // supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
            // onChange={handleCurrencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}

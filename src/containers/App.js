
import './App.css';
import React, { useState, useEffect} from 'react'; 
import RatesList from '../components/RateCardsList';
import BaseCurrencySelector from '../components/BaseCurrencySelector';

function App(){
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [displayedCurrencies] = useState(['USD','AUD','EUR','UAH','CAD','CHF','PLN','GBP','JPY','CNY']);


  useEffect(()=>{
      const url = `https://exchangerate-api.p.rapidapi.com/rapid/latest/${baseCurrency}`;
      const options = {
          method: 'GET',
          headers: {
                  'X-RapidAPI-Key': 'fb450507b7mshe0d700e7437dabbp1ca7efjsndfb748fc27f7',
                  'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
                }
          };

      fetch(url, options)
        .then(response => response.json())
        .then(result => setRates(result['rates']))
        .catch(error => console.log(error));
  },[baseCurrency]);
  
  const onSelectChange = (selected) => {
      setBaseCurrency(selected.value);
    }

  if (!Object.keys(rates).length){
      return(
        <h1>
          Loading content ...
        </h1>
      );
  } else {
      const displayedRates = displayedCurrencies.map(item => rates[item]);
      return (
        <div className="App">
          <header className="App-header">
            <h1 className='App-header-name'>Live Currency Exchange Rates</h1>
          </header>
          <main className='App-body'>
            <section> 
              <BaseCurrencySelector 
                rates={rates}
                base={baseCurrency}
                selectChange={onSelectChange}
                />
            </section>
            <section>
               <RatesList
                displayedCurrencies={displayedCurrencies} 
                displayedRates={displayedRates}
                baseCurrency={baseCurrency}
              />
            </section>
          </main>
          <footer className='App-footer'>Designed by Nataliia Kulyk - 2023</footer>
        </div>
    );
  }    
}

export default App;

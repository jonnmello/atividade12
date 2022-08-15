import Header from 'components/header';
import SalesByGender from 'components/sales-by-gender';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <SalesByGender />
      </div>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import DonationPage from './components/donationPage';
import ThankYouPage from './components/thankyouPage';

function App() {
  return (
    <div>
      <Header />
        <Router>
          <Route path="/" exact component={DonationPage} />
          <Route path="/Donation2" component={ThankYouPage} />
        </Router>
      <Footer />
    </div>
  );
}

export default App;

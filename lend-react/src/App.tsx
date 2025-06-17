import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Promotions from './components/Promotions/Promotions';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Banner />
        <Services />
        {/* <Promotions /> */}
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default App;

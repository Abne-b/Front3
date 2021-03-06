import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Footer from './components/footer.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main>
    </Main>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

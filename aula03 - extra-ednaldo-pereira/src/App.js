import './App.css';

import Header from './componentes/Header';
import Banner from './componentes/Banner';
import Ednaldo from './componentes/Ednaldo';
import Galeria from './componentes/Galeria';
import Footer from './componentes/Footer';

function App() {
  return (
    <div>
    <Header />
      <main>
        <Banner />
        <Ednaldo />
        <Galeria />
      </main>
      <Footer />
    </div>
  );
}

export default App;

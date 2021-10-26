import Greeting from './componentes/Greeting';

import './App.css';

function App() {
  
  const user = {
    firstName: 'Turma',
    lastName: '01'
  }

  const banana = {
    firstName: 'Ban',
    lastName: 'ana'
  }

  return (
    <div className="App">
      <header className="App-header">
        <Greeting user={banana}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt necessitatibus cupiditat molestias ducimus, quam voluptatum vero quasi molestiae expedita magni nobis est. Consectetur vero architecto, est magni voluptates repellendus? Quod?</p>
        <Greeting user={user}/>
      </header>
    </div>
  );
}

export default App;

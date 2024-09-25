import Contact from './assets/Contact'
import Counter from './assets/Counter';
import Hello from './assets/Hello'

function App() {
  const helloData = [
    { name: 'Asawapol', message: 'Hi there'},
    { name: 'Dew', message: 'Hello..'}
  ];

  return (
    <div className='App'>
      < Counter />
      {helloData.map((data, index) => (
        <Hello key ={index} name={data.name} message={data.message} />
      ))}

      <Contact email="Asawapol@gmail.com" phone ="0931513351" />
        
    </div>
  );
}

export default App;

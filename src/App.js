import Welcome from './components/Welcome';

const names = ['Brad', 'Gabby', 'Art', 'Tyler', 'Jonathan']

function App() {
  return (
    <>
    <h1>Passing Props</h1>
    <Welcome name="Fanessa" />
    <Welcome name={names[4]} />
    <br />
    {names.map(fname => (
      <Welcome key={fname} name={fname} />
    ))}
    </>
  );
}

export default App;

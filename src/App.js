import './App.css';

function Person({name, age, country}) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{country}</h2>
    </div>
  );
}

export default function App() {
  const obj = {name: 'Alice', age: 29, country: 'Austria'};

  return (
    <div>
      <Person {...obj} />
    </div>
  );
}

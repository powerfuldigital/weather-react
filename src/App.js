import logo from './logo.svg';
import './styles.css';
import Weather from "./Weather";
import Loading from "./Loader";

function App() {
  return (
    <div>
      <h1>Weather Search</h1>
        <Weather />
    <Loading />
    </div>
  );
}

export default App;

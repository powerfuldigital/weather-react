import './styles.css';
import Weather from "./Weather";
import Loading from "./Loader";

function App() {
  return (
    <div>
      <h1>Weather Search</h1>
        <Weather />
    <Loading />
    <p>
    <a href="https://github.com/powerfuldigital/weather-react">Open-source code</a> by Powerful Digital </p>
    </div>
  );
}

export default App;

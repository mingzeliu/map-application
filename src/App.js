import { Map } from "./components/Map/Map.js";
import { Permission } from "./components/Permission/Permission.js";
import "./App.css";
import { useJsApiLoader } from "@react-google-maps/api";


const defaultCenter = {
  lat: 43.6532,
  lng: -79.3832,
};

const libraries = ["places"];

const App = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAeeg0Kwn0suOg-bC2hxzZpGiV2uMFV7gg",
    libraries,
  });
  return (
    <div className="App">
      {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading</h2>},
      <Permission />
    </div>
   
  );
};

export default App;

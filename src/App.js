import React from "react";
import { Map } from "./components/Map/Map.js";
import { Permission } from "./components/Permission/Permission.js";
import s from "./App.css";
import { useJsApiLoader } from "@react-google-maps/api";
import { Autocomplete } from "./components/Autocomplete/Autocomplete.js";

const defaultCenter = {
  lat: 43.6532,
  lng: -79.3832,
};

const libraries = ["places"];

const App = () => {
  const [center, setCenter] = React.useState(defaultCenter)
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script-1",
    googleMapsApiKey: "AIzaSyAeeg0Kwn0suOg-bC2hxzZpGiV2uMFV7gg",
    libraries,
  });

  const onPlacesSelect = React.useCallback(
    (Coordinates) => {
      setCenter(Coordinates)
    },
    [],
  )

  return (
    <div className="App">
      <div className={s.addressSearchContainer}>
        <Autocomplete isLoaded={isLoaded} onSelect={onPlacesSelect}/>
      </div>
      {isLoaded ? <Map center={center} /> : <h2>Loading</h2>},
      <Permission />
    </div>
  );
};

export default App;

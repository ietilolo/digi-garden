import Garden from "./components/Garden";
import Sidebar from "./components/Sidebar";
import { PlantOptions } from "./data/PlantOptions";
import { GardenDB } from "./data/Garden";
import "./App.css";
import { useState } from "react";

function App() {

  const [plantOptions] = useState(PlantOptions);
  const [myGarden, setmyGarden] = useState(GardenDB);

  const addPlant = (event) => {
    event.preventDefault();
    let option = window.document.forms[0].plantOption.value
    let plant = plantOptions.find(i => i.item === option);
    setmyGarden([...myGarden, plant]);
  }

  return (
    <div className="App">
      <Garden garden={myGarden}/>
      <Sidebar plantOptions={plantOptions} addPlant={addPlant}/>
    </div>
  );
}

export default App;

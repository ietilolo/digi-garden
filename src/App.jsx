import Garden from "./components/Garden";
import Sidebar from "./components/Sidebar";
import { PlantOptions } from "./data/PlantOptions";
import { GardenDB } from "./data/Garden";
import "./App.css";
import { useState } from "react";

function App() {

  const [plantOptions] = useState(PlantOptions);
  const [myGarden, setmyGarden] = useState(GardenDB);
  const [errors, setErrors] = useState([]);

  const addPlant = (event) => {
    event.preventDefault();
    let option = window.document.forms[0].plantOption.value;
    let qty = window.document.forms[0].plant_qty.value;

    if ( qty < 1 ) {
      if ( !errors.length ) {
        setErrors([...errors, `Please enter amount of ${option} planted`]);
      }
    } else {
      let plant = plantOptions.find(i => i.item === option);
      plant.qty = qty;
      setmyGarden([...myGarden, plant]);
      window.document.forms[0].plant_qty.value = 0;
      setErrors([]);
    }
  }

  const removePlant = (index) => {
    let newGarden = [...myGarden];
    newGarden.splice(index, 1);
    setmyGarden(newGarden);
  }

  return (
    <div className="App">
      <Garden garden={myGarden} removePlant={removePlant}/>
      <Sidebar plantOptions={plantOptions} addPlant={addPlant} errors={errors}/>
    </div>
  );
}

export default App;

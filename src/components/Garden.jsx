import Plant from "./Plant";
import { Plants } from "../data/Plants";
import { useState } from "react";
import "./styles/Garden.scss";

const Garden = () => {

  const [plants, setPlants] = useState(Plants);

  if ( plants.length > 0 ) {
    return (
      <div className="garden">
        { plants.map((plant, i) => <Plant plant={ plant } key={i}/>) }
      </div>
    )
  } else {
    return (
      <div className="garden">
        <div className="mssg-warning">
          <h2>You currently have no plants</h2>
          <p>To add a plant to your garden, choose a plant and select "Add to garden"</p>
        </div>
      </div>
    )
  }
}

export default Garden;
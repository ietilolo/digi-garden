import Plant from "./Plant";
import "./styles/Garden.scss";

const Garden = ({ garden, removePlant }) => {

  if ( garden.length > 0 ) {
    return (
      <div className="garden">
        { garden.map((plant, i) => <Plant plant={ plant } key={i} removePlant={removePlant} index={i}/>) }
      </div>
    )
  } else {
    return (
      <div className="garden">
        <div className="mssg-warning">
          <h2>You currently have no plants</h2>
          <p>To add a plant to your garden, select a Plant and click "Add new Plant"</p>
        </div>
      </div>
    )
  }
}

export default Garden;
import "./styles/Plant.scss";

const Plant = ({ plant, plant:{ item, plantFamily, desc, imageName, qty }, removePlant, index }) => {

  return (
    <div className="plant">
      <img src={`${process.env.PUBLIC_URL}/assets/images/${imageName}`} alt="Big red tomatoes"/>
      <a className="plant_link" href="#random">
        <div className="plant_details">
          <h1 className="plant_name">{ item }</h1>
          <h4 className="plant_family">{ plantFamily }</h4>
          <p>Planted: {qty}</p>
          <button className="plant_btn_remove" onClick={(e) => { e.preventDefault(); removePlant(index) }}>x</button>
        </div>
      </a>
    </div>
  )
}

export default Plant;
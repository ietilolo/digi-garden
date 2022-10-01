import "./styles/Plant.scss";

const Plant = ({ plant:{ item, plantFamily, desc, imageName } }) => {

  return (
    <div className="plant">
      <img src={`${process.env.PUBLIC_URL}/assets/images/${imageName}`} alt="Big red tomatoes"/>
      <a className="plant_link" href="google.com/plants">
        <div className="plant_details">
          <h1 className="plant_name">{ item }</h1>
          <h4 className="plant_family">{ plantFamily }</h4>
          <button className="plant_btn_remove">x</button>
        </div>
      </a>
    </div>
  )
}

export default Plant;
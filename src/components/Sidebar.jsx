import Errors from "./Errors";
import "./styles/Sidebar.scss";

const Sidebar = ({ plantOptions, addPlant, errors }) => {

  return (
    <div className="sidebar">
      <h2 className="sidebar_title">Choose your Plant 🌱</h2>
      <form className="sidebar_form" method="GET">
        <select className="sidebar_options" name="plantOption" id="plantOption">

          {plantOptions.map((option, i) => (<option value={ option.item } key={ i }>{ option.item }</option>) )}

        </select>
        <div className="form_div_qty">
          <label htmlFor="plant_qty">How many have you planted?</label>
          <br />
          <input type="number" placeholder="0" min={0} max={50} name="plant_qty" id="plant_qty"/>
        </div>
        <button className="sidebar_btn_submit" onClick={ addPlant }>Add new Plant</button>
      </form>

      <Errors errors={errors}/>
    </div>
  )
}

export default Sidebar;
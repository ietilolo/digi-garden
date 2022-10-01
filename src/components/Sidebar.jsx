
import "./styles/Sidebar.scss";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <h2 className="sidebar_title">Add a Plant 🌱</h2>
      <select className="sidebar_options" name="plantOption" id="plantOption">
        <option value="Tomatoes">Tomatoes</option>
        <option value="Potatoes">Potatoes</option>
        <option value="Carrots">Carrots</option>
        <option value="Strawberries">Strawberries</option>
      </select>
      <button className="sidebar_btn_submit">Add new Plant</button>
    </div>
  )
}

export default Sidebar;
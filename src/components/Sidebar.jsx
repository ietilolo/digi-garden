
import "./styles/Sidebar.scss";

const Sidebar = ({ plantOptions, addPlant }) => {

  return (
    <div className="sidebar">
      <h2 className="sidebar_title">Choose your Plant 🌱</h2>
      <form className="sidebar_form" method="GET">
        <select className="sidebar_options" name="plantOption" id="plantOption">

          {plantOptions.map((option, i) => (<option value={ option.item } key={ i }>{ option.item }</option>) )}

        </select>
        <button className="sidebar_btn_submit" onClick={ addPlant }>Add new Plant</button>
      </form>
    </div>
  )
}

export default Sidebar;
import "./styles/Errors.scss";

const Errors = ({ errors }) => {

  if ( errors.length > 0 ) {
    return (
      <div className="errors">
        { errors.map((mssg, i) => <p key={i}>{ mssg }</p> ) }
      </div>
    )
  } 
}

export default Errors;
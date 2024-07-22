const Button = ({ label, onClickHandler, icon }) => {
return (
<button title={label} className="toggle" onClick={onClickHandler}>
    <img src={`/icons/${icon}.svg`} alt={label} />
  </button>);
}

export default Button;

function CustomInput(props) {
  return (
    <div>
      <label htmlFor={props.idtext}>{props.placetext}:</label>
      <input
        type={props.inputtype}
        id={props.idtext}
        name={props.idtext}
        placeholder={props.placetext}
        onChange={props.onChange}
      />
    </div>
  );
}

export default CustomInput;

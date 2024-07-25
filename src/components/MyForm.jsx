const MyForm = (props) => {

  console.log(props);

  return (
    <div>
      <label>{props.label}</label>
      <input {...props} onChange={props.onChange} />
    </div>
  );
};

export default MyForm;
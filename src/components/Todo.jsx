function Product({ title, completed }) {
  const handleChange = () => {
    //some code
  };
  return (
    <div>
      <div>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        {title}
      </div>
    </div>
  );
}

export default Product;

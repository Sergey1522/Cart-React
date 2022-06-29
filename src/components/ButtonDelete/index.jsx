const ButtonDelete = ({ productDelete, id }) => {
  return (
    <button
      type="button"
      onClick={() => {
        productDelete(id);
      }}
    >
      <img src="img/icons/delete.svg" alt="delete" />
    </button>
  );
};

export default ButtonDelete;

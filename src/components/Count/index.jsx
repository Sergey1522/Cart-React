import "./style.scss";

const Count = ({
  count,
  increaseProduct,
  decreaseProduct,
  changeValue,
  id,
}) => {
  return (
    <div className="count">
      <div className="count__box">
        <input
          onChange={(e) => {
            changeValue(id, +e.target.value);
          }}
          type="number"
          className="count__input"
          min="1"
          max="100"
          value={count}
        />
      </div>
      <div className="count__controls">
        <button
          onClick={() => {
            increaseProduct(id);
          }}
          type="button"
          className="count__up"
        >
          <img src="img/icons/arrow-up.svg" alt="arrow-up" />
        </button>
        <button
          onClick={() => {
            decreaseProduct(id);
          }}
          type="button"
          className="count__down"
        >
          <img src="img/icons/arrow-down.svg" alt="arrow-down" />
        </button>
      </div>
    </div>
  );
};

export default Count;

import PropTypes from "prop-types";

const Carts = ({ carts, remaining, totalHour, totalCost }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 md:w-80">
      <div>
        <h2 className="text-xl font-semibold text-blue-500 border-b-2 pb-4">
          Credit Hour Remaining<span> {remaining} </span> hr
        </h2>
        <h3 className="py-4 text-2xl font-bold">Course Name</h3>

        <div className="border-b-2 text-gray-400  pb-4">
          {carts.map((cart, index) => {
            return (
              <p key={index}>
                <span>{index + 1} </span>
                {cart.title}- {cart.credit}hr
              </p>
            );
          })}
        </div>
        <h3 className="py-4 text-lg font-bold border-b-2">
          Total Credit Hour:{totalHour}
        </h3>
      </div>
      <h3 className="py-4 text-lg font-bold">Total Cost: {totalCost} USD</h3>
    </div>
  );
};

Carts.propTypes = {
  carts: PropTypes.object,
  remaining: PropTypes.number,
  totalHour: PropTypes.number,
  totalCost: PropTypes.number,
};

export default Carts;

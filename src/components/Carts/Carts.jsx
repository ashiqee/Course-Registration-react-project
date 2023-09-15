import Cart from "../Cart/cart";

const Carts = ({ carts, remaining, totalHour, totalCost }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 md:w-80">
      <div>
        <h2 className="text-xl font-semibold text-blue-500 border-b-2 pb-4">
          Credit Hour Remaining<span> {remaining} </span> hr
        </h2>
        <h3 className="py-4 text-2xl font-bold">Course Name</h3>

        <div className="border-b-2">
          {carts.map((cart, idx) => (
            <Cart key={idx} cart={cart} />
          ))}
        </div>
        <h3 className="py-4 text-lg font-bold border-b-2">
          Total Credit Hour:{totalHour}
        </h3>
      </div>
      <h3 className="py-4 text-lg font-bold">Total Cost: {totalCost} USD</h3>
    </div>
  );
};

export default Carts;

const Cart = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 md:w-80">
      <div>
        <h2 className="text-xl font-semibold text-blue-500 border-b-2 pb-4">
          Credit Hour Remaining<span> 7 </span> hr
        </h2>
        <h3 className="py-4 text-2xl font-bold">Course Name</h3>
        <div className="pl-4 text-gray-400 border-b-2 pb-4">
          <ol className="list-decimal">
            <li>hh</li>
          </ol>
        </div>
        <div className="py-4 border-b-2">
          <h3>Total Credit Hour: </h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;

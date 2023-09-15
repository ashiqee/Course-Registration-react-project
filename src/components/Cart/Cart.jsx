const Cart = ({ cart }) => {
  const { title } = cart;

  return (
    <div className="pl-4 text-gray-400  pb-4">
      <li className="list-decimal">{title}</li>
    </div>
  );
};

export default Cart;

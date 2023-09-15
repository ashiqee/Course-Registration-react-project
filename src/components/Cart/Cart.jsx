const Cart = ({ cart }) => {
  const { title, credit } = cart;

  return (
    <div className=" text-gray-400  pb-4">
      <li className="list-none">
        {title} - {credit}hr
      </li>
    </div>
  );
};

export default Cart;

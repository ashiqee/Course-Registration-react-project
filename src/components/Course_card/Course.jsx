import PropTypes from "prop-types";
import { LuDollarSign, LuBookOpen } from "react-icons/Lu";
const Course = ({ course, handleAddToCart }) => {
  const { img, title, description, price, credit } = course;
  return (
    <div>
      <div className="card w-full bg-white shadow-xl p-4">
        <figure>
          <img className="w-full" src={img} alt="Shoes" />
        </figure>
        <div>
          <h2 className="card-title py-4">{title}</h2>
          <p className="text-gray-400">{description}</p>
          <div className="my-4 flex justify-between text-gray-400 text-xl">
            <div className="flex items-center">
              <span className="text-black text-2xl">
                <LuDollarSign />
              </span>{" "}
              Price {price}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-black text-2xl">
                <LuBookOpen />
              </span>
              Credit: {credit} hr
            </div>
          </div>

          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(course)}
              className="p-3 w-full bg-blue-400 rounded-xl text-xl text-white font-semibold ">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  handleAddToCart: PropTypes.func,
};

export default Course;

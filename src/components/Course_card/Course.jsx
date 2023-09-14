const Course = ({ course }) => {
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
            <div>$ Price {price}</div>
            <div>Credit: {credit} hr</div>
          </div>

          <div className="card-actions justify-center">
            <button className="p-3 w-full bg-blue-400 rounded-xl text-xl text-white font-semibold ">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;

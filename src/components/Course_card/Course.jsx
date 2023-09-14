const Course = () => {
  return (
    <div>
      <div className="card w-full bg-white shadow-xl p-4">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/MkTVFLJ/Rectangle-2.png"
            alt="Shoes"
          />
        </figure>
        <div>
          <h2 className="card-title py-4">Introduction to C Programming</h2>
          <p className="text-gray-400">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="my-4 flex justify-between text-gray-400 text-xl">
            <div>$ Price</div>
            <div>Credit: </div>
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

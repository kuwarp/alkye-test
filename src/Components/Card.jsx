

const Card = ({ title, description, imageUrl,nextUrl }) => {
  return (
    <div className=" rounded overflow-hidden   shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt="Card image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4  pb-2">
      <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                            <div>
          <label className="block text-xl mb-2">Email:</label>
          <input
            type="email"
            value={''}
           
            className="border p-2 w-full"
          />
          <button
            onClick={nextUrl}
            className="bg-blue-500 text-white flex justify-end mt-4 px-4 py-2"
          >
            Next
          </button>
        </div>
                            </div>
              </div>
    </div>
  );
};

export default Card;

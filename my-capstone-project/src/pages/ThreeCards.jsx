const ThreeCards = () => {
  return (
    <div className=" bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">
        Church Activities
      </h2>

      <div className="grid gap-1 md:grid-cols-3 justify-items-center">
        {/* Card 1 */}
        <div className="w-64 h-64 bg-yellow-100 rounded-lg shadow-md p-5">
            <img
         src="/church.jpeg"
         alt="Church"
         className="w-12 h-12 mx-auto rounded-full object-contain"
         />
          <h3 className="text-lg font-semibold mb-2 text-center">
            Our Mission
          </h3>
          <p className="text-gray-600 text-center">
            To lead people to Christ through love, worship, 
            and practical service that transforms 
            lives and communities.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-64 h-64 bg-yellow-100 rounded-lg shadow-md p-5">
            <img
         src="/church2.jpeg"
         alt="Church"
         className="w-12 h-12 mx-auto rounded-full object-contain"
         />
          <h3 className="text-lg font-semibold mb-2 text-center">
            Our pastor
          </h3>
          <p className="text-gray-600 text-center">
            Led by a dedicated pastor who teaches God’s Word with clarity, 
            compassion, and a genuine heart for people.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-64 h-64 bg-yellow-100 rounded-lg shadow-md p-5">
            <img
         src="/church1.jpeg"
         alt="Church"
         className="w-12 h-12 mx-auto rounded-full object-contain"
         />
          <h3 className="text-lg font-semibold mb-2 text-center">
            Our Service
          </h3>
          <p className="text-gray-600 text-center">
           We gather in a warm, welcoming atmosphere where worship, 
           prayer, and fellowship connect us 
           to God and to one another.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;

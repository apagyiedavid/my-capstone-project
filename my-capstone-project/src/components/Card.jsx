const Card = ({ title, description }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">
        {title}
        OUR MISSION
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
        To lead people to Christ through love, worship,
        and practical service that transforms lives and communities.
      </p>
    </div>
  );
};

export default Card;

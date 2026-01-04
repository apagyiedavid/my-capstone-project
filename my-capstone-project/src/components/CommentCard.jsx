const CommentCard = () => {
  return (
    <div className="p-2 bg-gray-100 py-16-screen">
      <h2 className="text-2xl font-bold text-center mb-6">
        Comments
      </h2>

      <div className="grid gap-6 md:grid-rows-2">
        {/* Card 1 */}
        <div className="bg-yellow-100 rounded-lg shadow-md p-5">
            <img
         src="/david.png"
         alt="Church"
         className="w-12 h-12 mx-left rounded-full object-contain"
         />
          <h3 className="text-lg font-semibold mb-2">
            King David
          </h3>
        </div>

        {/* Card 2 */}
        <div className="bg-yellow-100 rounded-lg shadow-md p-5">
            <img
         src="/dave.png"
         alt="Church"
         className="w-20 h-20 mx-left rounded-full object-contain"
         />
          <h3 className="text-lg font-semibold mb-2">
            Abisiliwen Apagyie
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;

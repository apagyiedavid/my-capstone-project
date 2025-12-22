import { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=5")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Church Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="border p-3 mb-3">
          <h3 className="font-semibold">{comment.name}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
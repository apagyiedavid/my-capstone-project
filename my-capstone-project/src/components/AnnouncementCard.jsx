import { useEffect, useState } from "react";
import AnnouncementCard from "../components/AnnouncementCard";

const Dashboard = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to Members Dashboard
      </h2>

      <p className="mb-6 text-gray-600">
        Stay updated with the latest church announcements.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {announcements.map((item) => (
          <AnnouncementCard
            key={item.id}
            title={item.title}
            body={item.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

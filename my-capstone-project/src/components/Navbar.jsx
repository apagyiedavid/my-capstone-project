import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" text-white p-4 flex justify-between">
       <img src="./logo.png" alt="logo" className="h-12 w-auto" />
      <h1 className="font-bold">Jesus Mission Church</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;

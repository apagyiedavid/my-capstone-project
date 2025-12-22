const Register = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">New Member Registration</h2>
      <form className="space-y-3">
        <input className="border p-2 w-full" placeholder="Full Name" />
        <input className="border p-2 w-full" placeholder="Email" />
        <button className="bg-blue-800 text-white px-4 py-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

 const InputField = ({ label, type = "text", placeholder }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
};

export default InputField;

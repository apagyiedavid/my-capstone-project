const Register = () => {
  return (
    /* 1. The Wrapper: Centers the form and adds vertical padding */
    <div className="py-32-screen flex items-center justify-center bg-gray-50 p-4 md:p-12">
      
      {/* 2. The Form Card: 
          - 'w-full' for mobile
          - 'md:max-w-md' limits the width on desktop
          - Shadow and white background make it look like a card */}
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-xl shadow-lg">
        
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center md:text-left">
          Join Jesus Mission Church
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="Full Name" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="Email" 
              type="email"
            />
          </div>

          {/* 3. The Button: 
              - 'w-full' makes it easier to tap on mobile 
              - 'md:w-auto' keeps it small on desktop if you prefer */}
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold w-full py-3 rounded-md transition-colors">
            Register
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Register;
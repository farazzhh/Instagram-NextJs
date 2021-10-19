const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10 ">
      <img
        src="./logo.png"
        alt="profile image"
        className="rounded-full bg-blue-50 border p-[1px] w-16 h-16 object-cover "
      />
      <div className="flex-1 mx-4">
              <h2 className="font-bold">Marlyn</h2>
              <h3 className="text-sm text-gray-400">Welcome to the App</h3>
      </div>
      <button>Sign Out</button>
    </div>
  );
};

export default MiniProfile;

const Story = ({ username, img }) => {
    console.log(username);
    return (
      <div>
        <img
          src={img}
          alt="profile image"
          className="w-14 h-14 rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer hover:scale-110 transition duration-200 ease-out"
        />
        <p className="text-xs w-14 truncate text-center">{username}</p>
      </div>
    );
}

export default Story

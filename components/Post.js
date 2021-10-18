import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const Post = ({ username, img, caption }) => {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={img}
          alt="user profile"
          className="h-12 w-12 object-contain"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="w-5" />
      </div>

      {/* Image */}
      <img src={img} alt="post image" className="object-cover w-full" />

      {/* Button */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4 ">
          <HeartIcon className="postBtn" />
          <ChatIcon className="postBtn" />
          <PaperAirplaneIcon className="postBtn" />
        </div>
        <BookmarkIcon className="postBtn" />
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span> {caption}
      </p>
      {/* /* comments */}

      {/* input box*/}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
          type="text"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
};

export default Post;

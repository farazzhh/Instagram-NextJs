import Post from "./Post";

const Data = [
  {
    id: 123,
    username: "MarLyn",
    userImg: "./logo.png",
    img: "./1.jpg",
    caption:
      "Interesting thing is like people are always interesting to creatures smart than it",
  },
  {
    id: 13,
    username: "MarLboboyn",
    userImg: "./logo.png",
    img: "./3.jpg",
    caption: "wows lorem is behind you and you dont care about it",
  },
];

const Posts = () => {
  return (
    <div>
      {/* Post */}
      {Data.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;

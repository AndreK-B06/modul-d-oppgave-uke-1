import "./PostCardImage.css";
import propTypes from "prop-types";

export default function PostCardImage(posts) {
  //JS here
  console.log(posts);
  console.log(Object.keys(posts));
  return (
    <article className="cardImage">
      <h2>{posts.posts.title}</h2>
      <img src={posts.posts.sourceUrl} alt={posts.posts.title} />
      <p>{posts.posts.body}</p>
    </article>
  );
}
PostCardImage.propTypes = {
  posts: propTypes.object,
};

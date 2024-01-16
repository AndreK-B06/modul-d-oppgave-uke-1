import "./PostCardImage.css";
import propTypes from "prop-types";

export default function PostCardImage(posts) {
  //JS here
  console.log(posts);
  console.log(Object.keys(posts));
  return (
    <article className="cardImage">
      <h2>{posts.posts.title}</h2>
      <a href={posts.posts.sourceUrl ? posts.posts.sourceUrl : "#"}>
        source Code
      </a>
      <p>{posts.posts.body}</p>
    </article>
  );
}
PostCardImage.propTypes = {
  posts: propTypes.object,
};

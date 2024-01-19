import "./PostCard.css";
import propTypes from "prop-types";

export default function PostCard(posts) {
  //JS here
  console.log(posts);
  console.log(Object.keys(posts));
  return (
    <article className="card">
      <img src={posts.posts.sourceUrl} alt={posts.posts.title} />
      <h2>{posts.posts.title}</h2>
      <p>{posts.posts.body}</p>
      {/* <section className="like-comtainer">
        <button className="like-btn">Like</button>
        <p></p>
      </section> */}
    </article>
  );
}
PostCard.propTypes = {
  posts: propTypes.object,
};

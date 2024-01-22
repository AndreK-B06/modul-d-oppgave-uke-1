import "./App.css";
import PostCardImage from "./components/PostCardImage/PostCardImage";
import PostCard from "./components/PostCard/PostCard";
import CounterButtons from "./components/ConterComtainer/conter";

function App() {
  const posts = [
    {
      title: "My vecation",
      body: "Best vecation ever!, mett a lot of people",
      sourceUrl:
        "https://images.unsplash.com/photo-1564613469739-c78f970f9c17?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Insane Party",
      body: "Insane party last night, and now i have an insane hangover",
      sourceUrl:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="app">
      <header className="navbar bg-primary text-secondary">
        <a href="/" id="brandName">
          Gosip
        </a>
      </header>

      <h1>Welcome to Gosip</h1>
      <main className="main">
        <CounterButtons></CounterButtons>
        {posts.map((post, i) => {
          return <PostCardImage posts={post} key={i} />;
        })}
        {posts.map((post, i) => {
          return <PostCard posts={post} key={i} />;
        })}
      </main>

      <footer className="footer bg-primary text-secondary">
        <a>Image from Unsplash.com</a>
        <p>Made by Kodehodet 2024</p>
      </footer>
    </div>
  );
}

export default App;

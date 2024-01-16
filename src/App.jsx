import "./App.css";
import PostCardImage from "./components/PostCardImage/PostCardImage";

function App() {
  const posts = [
    { title: "My vecation", body: "Best vecation ever!, mett a lot of people" },
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
        <a href="/">A blank slate</a>
      </header>

      <main className="main">
        <h1>A blank slate for you to use</h1>
        {posts.map((post, i) => {
          return <PostCardImage posts={post} key={i} />;
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

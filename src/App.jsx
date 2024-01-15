import "./App.css";
// import PostCardImage from './components/PostCardImage/PostCardImage'

function App() {
  return (
    <div className="app">
      <header className="navbar bg-primary text-secondary">
        <a href="/">A blank slate</a>
      </header>

      <main className="main">
        <h1>A blank slate for you to use</h1>
        {/* <ul className="poste">{PostCardImage}</ul> */}
      </main>

      <footer className="footer bg-primary text-secondary">
        <a>Image from Unsplash.com</a>
        <p>Made by Kodehodet 2024</p>
      </footer>
    </div>
  );
}

export default App;

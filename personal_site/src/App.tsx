import Projects from "./components/Projects";
import "./assets/style/index.css";

function App() {
  return (
    <div className="skeleton">
      <header className="skeleton-header">
        <h1>KONI WATSON</h1>

        <h3>koniwatson1@gmail.com</h3>
      </header>

      <Projects />

      <footer className="skeleton-footer">
        <p>
          This is a personal website to display my projects and skills. It is a
          work in progress, so please check back later for updates and new
          additions
        </p>
      </footer>
    </div>
  );
}

export default App;

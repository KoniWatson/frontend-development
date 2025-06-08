import Projects from "./pages/Projects";
import "./assets/style/index.sass"

function App() {
  return (
    <div className="skeleton">
      <header className="skeleton-header">
        <h1>KONI WATSON</h1>

        <h3>koniwatson1@gmail.com</h3>
      </header>

      <Projects />

      <footer className="skeleton-header">
        <p>
          This is a personal website to display my portfolio of walk and
          personal projects
        </p>
      </footer>
    </div>
  );
}

export default App;

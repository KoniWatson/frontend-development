import Projects from "./pages/Projects";
import "./assets/style/index.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="skeleton">
      <header className="skeleton-header">
        <h1 onClick={() => setPage("home")}>KONI WATSON</h1>

        <h3>koniwatson1@gmail.com</h3>
      </header>

      {page === "home" && <Projects setPage={setPage} />}
      {page === "web development" && <h1>Web Development Projects</h1>}
      {page === "game development" && <h1>Game Development Projects</h1>}
      {page === "python" && <h1>Python Projects</h1>}
      {page === "certificates" && <h1>Certificates</h1>}

      {page === "home" && (
        <footer className="skeleton-footer">
          <p>
            This is a personal website to display my projects and skills. It is
            a work in progress, so please check back later for updates and new
            additions
          </p>
        </footer>
      )}
    </div>
  );
}

export default App;

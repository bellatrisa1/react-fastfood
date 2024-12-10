import "./App.scss";
import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Hero />

        <About />
        <Menu />
        <Hero />

        <Contact />
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 FastFood. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

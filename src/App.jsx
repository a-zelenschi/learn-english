import { useState } from "react";
import Home from "./components/home/Home";
import { GetData } from "./components/getData/GetData";
import { Hero } from "./components/hero/Hero";
import { Blog } from "./components/blog/Blog";

function App() {
  return (
    <div>
      <Hero />
      <Blog />
      {/* <Home />
      <hr />
      <GetData /> */}
    </div>
  );
}
export default App;

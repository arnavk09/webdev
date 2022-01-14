import React from "react";
import "./App.css";
const author = "by Charlie Mackesy";
console.log("initRender");
//done upto jsx css 1:55:10 (video:https://www.youtube.com/watch?v=4UZrsTqkcW4)
function App() {
  return (
    <>
      <section className="bookList">
        <Book />
        <h4>{author.toUpperCase} </h4>
      </section>
    </>
  );
}
const Book = () => {
  const title = "The Boy, The Mole, The Fox and The Horse";

  return (
    <>
      <article>
        <img
          src="https://m.media-amazon.com/images/I/81PdkxXJObL._AC_UY327_FMwebp_QL65_.jpg"
          alt="??"
        />
        <h1>{title}</h1>
      </article>
      <br />
    </>
  );
};
export default App;

import React from "react";
import "./App.css";
const author = "By Charlie Mackesy";
const img =
  "https://m.media-amazon.com/images/I/81PdkxXJObL._AC_UY327_FMwebp_QL65_.jpg";
console.log("initRender");
//done upto jsx props (video:https://www.youtube.com/watch?v=4UZrsTqkcW4)
function App() {
  return (
    <>
      <section className="bookList">
        <Book />
      </section>
    </>
  );
}
const Book = () => {
  const title = "The Boy, The Mole, The Fox and The Horse";
  <h4>{author}</h4>;

  return (
    <>
      <article>
        <img src={img} alt="??" />
        <h1>{title}</h1>
      </article>
      <br />
    </>
  );
};
export default App;

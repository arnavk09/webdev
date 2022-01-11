import React from "react";
import "./App.css";
//done upto jsx css 1:55:10 (video:https://www.youtube.com/watch?v=4UZrsTqkcW4)
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
  return (
    <>
      <article>
        <Image />
        <Title />
        <Author />
      </article>
      <br />
      <article>
        <Image />
        <Title />
        <Author />
      </article>
      <br />
      <article>
        <Image />
        <Title />
        <Author />
      </article>
      <br />
      <article>
        <Image />
        <Title />
        <Author />
      </article>
      part
    </>
  );
};
const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/81PdkxXJObL._AC_UY327_FMwebp_QL65_.jpg"
      alt="??"
    />
  );
};
const Title = () => {
  return <h1>The Boy, The Mole, The Fox and The Horse</h1>;
};
const Author = () => {
  return <h4>by Charlie Mackesy </h4>;
};
export default App;

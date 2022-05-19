import Book from "./Book";

const App = () => {
  return (
    <div>
      <Book name="JS for beginners" year="2018" price="1000">Children props</Book>
      <Book name="React for beginners" year="2019" price="1200"/>
      <Book name="Vue for beginners" year="2021" price="1500"/>
      <Book name='' year="2021" price="1500"/>
    </div>
  )
};

export default App;

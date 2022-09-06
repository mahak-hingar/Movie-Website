import Movie from "./movies";
import Search from "./search";

const Home = () => {
  return (
    <>
      <div className="container">
        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;
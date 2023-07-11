import "./App.css";
import SimpleList from "./components/SimpleList";
import StudentList from "./components/StudentList";
import ProjectList from "./components/ProjectList";
import MovieList from "./components/MovieList";
import { useState } from "react";
import Spinner from "./components/Spinner";
import ImprovedMovieList from "./components/ImprovedMovieList";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={"App"}>
      {/* <SimpleList /> */}
      {/* <StudentList /> */}
      {/* <ProjectList /> */}
      {/* <MovieList /> */}
      <ImprovedMovieList />
    </div>
  );
}

export default App;

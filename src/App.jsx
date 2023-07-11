import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("Berlin");
  const [user, setUser] = useState({
    username: "",
    city: "Berlin",
    country: "Germany",
    isOnline: false,
  });

  return (
    <div className={"App " + theme}>
      <Counter />
      <select onChange={(event) => setTheme(event.target.value)}>
        <option value="light"> light </option>
        <option value="dark"> dark </option>
      </select>
      <div>
        <div>
          <b>username:</b>{" "}
          <input
            onChange={(event) =>
              setUser((prevState) => ({
                ...prevState,
                city: event.target.value,
              }))
            }
            type="text"
          />
        </div>
        <div>
          <b>city:</b>{" "}
          <input
            onChange={(event) => setCity(event.target.value)}
            type="text"
          />
        </div>
      </div>
      {user.username}
      {user.city}
    </div>
  );
}

export default App;
